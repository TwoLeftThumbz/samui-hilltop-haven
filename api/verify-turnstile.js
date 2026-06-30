const siteverifyUrl = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const readJsonBody = async (request) => {
  if (request.body && typeof request.body === "object") {
    return request.body;
  }

  const chunks = [];

  for await (const chunk of request) {
    chunks.push(chunk);
  }

  const rawBody = Buffer.concat(chunks).toString("utf8");
  return rawBody ? JSON.parse(rawBody) : {};
};

const getClientIp = (request) => {
  const forwardedFor = request.headers["x-forwarded-for"];

  if (typeof forwardedFor === "string") {
    return forwardedFor.split(",")[0]?.trim();
  }

  return request.headers["x-real-ip"] || request.socket?.remoteAddress;
};

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).json({ success: false, error: "method_not_allowed" });
    return;
  }

  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    response.status(500).json({ success: false, error: "turnstile_not_configured" });
    return;
  }

  try {
    const { token } = await readJsonBody(request);

    if (typeof token !== "string" || token.length === 0) {
      response.status(400).json({ success: false, error: "missing_token" });
      return;
    }

    const verificationResponse = await fetch(siteverifyUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret,
        response: token,
        remoteip: getClientIp(request),
      }),
    });

    const result = await verificationResponse.json();

    if (!result.success) {
      response.status(400).json({
        success: false,
        error: "turnstile_failed",
        codes: result["error-codes"] ?? [],
      });
      return;
    }

    response.status(200).json({ success: true });
  } catch (error) {
    response.status(500).json({ success: false, error: "verification_error" });
  }
}
