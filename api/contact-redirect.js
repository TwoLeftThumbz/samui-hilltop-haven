const siteverifyUrl = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const whatsappPhoneNumber = process.env.WHATSAPP_PHONE_NUMBER || "66869109339";
const reservationEmail = process.env.RESERVATION_EMAIL || "hello@sorasierra.com";

const messages = {
  reservation:
    "Hello Sora Sierra,\n\nI would like to reserve a table with a view.\n\nDetails:\n- Name:\n- Contact Number or Email:\n- Number of guests:\n- Date:\n- Time:\n- Special requests:\n\nThank you!",
  generalReservation:
    "Hello Sora Sierra,\n\nI would like to make a reservation.\n\nDetails:\n- Name:\n- Contact Number or Email:\n- Number of guests:\n- Date:\n- Time:\n- Special requests:\n\nThank you!",
};

const contactActions = {
  whatsapp: () => `https://wa.me/${whatsappPhoneNumber}`,
  "hero-reservation": () =>
    `https://wa.me/${whatsappPhoneNumber}?text=${encodeURIComponent(messages.reservation)}`,
  "reservation-email": () => {
    const subject = encodeURIComponent("Reservation Request");
    const body = encodeURIComponent(messages.generalReservation);
    return `mailto:${reservationEmail}?subject=${subject}&body=${body}`;
  },
};

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

const verifyTurnstileToken = async ({ token, secret, request }) => {
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
  return result.success === true;
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
    const { token, actionId } = await readJsonBody(request);

    if (typeof token !== "string" || token.length === 0) {
      response.status(400).json({ success: false, error: "missing_token" });
      return;
    }

    const getRedirectUrl = contactActions[actionId];

    if (!getRedirectUrl) {
      response.status(400).json({ success: false, error: "unknown_contact_action" });
      return;
    }

    const verified = await verifyTurnstileToken({ token, secret, request });

    if (!verified) {
      response.status(400).json({ success: false, error: "turnstile_failed" });
      return;
    }

    response.status(200).json({ success: true, redirectUrl: getRedirectUrl() });
  } catch (error) {
    response.status(500).json({ success: false, error: "verification_error" });
  }
}
