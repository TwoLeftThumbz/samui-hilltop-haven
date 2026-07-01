import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type TurnstileContactAction = {
  label: string;
  id: string;
};

type TurnstileContactGateProps = {
  action: TurnstileContactAction | null;
  onOpenChange: (open: boolean) => void;
};

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "error-callback"?: () => void;
          "expired-callback"?: () => void;
        },
      ) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
    };
  }
}

const turnstileScriptId = "cloudflare-turnstile-script";
const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;

const loadTurnstileScript = () =>
  new Promise<void>((resolve, reject) => {
    if (window.turnstile) {
      resolve();
      return;
    }

    const existingScript = document.getElementById(
      turnstileScriptId,
    ) as HTMLScriptElement | null;

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener("error", () => reject(), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = turnstileScriptId;
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => reject(), { once: true });

    document.head.appendChild(script);
  });

const getContactRedirect = async (token: string, actionId: string) => {
  const response = await fetch("/api/contact-redirect", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token, actionId }),
  });

  if (!response.ok) {
    return null;
  }

  const result = await response.json();
  return result.success === true && typeof result.redirectUrl === "string"
    ? result.redirectUrl
    : null;
};

const TurnstileContactGate = ({
  action,
  onOpenChange,
}: TurnstileContactGateProps) => {
  const [scriptReady, setScriptReady] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "expired" | "verified">(
    "idle",
  );
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);
  const open = Boolean(action);

  useEffect(() => {
    if (!open || !turnstileSiteKey) {
      return;
    }

    setStatus("loading");

    loadTurnstileScript()
      .then(() => {
        setScriptReady(true);
        setStatus("idle");
      })
      .catch(() => {
        setStatus("error");
      });
  }, [open]);

  useEffect(() => {
    if (
      !open ||
      !scriptReady ||
      !containerRef.current ||
      !window.turnstile ||
      !turnstileSiteKey
    ) {
      return;
    }

    if (widgetIdRef.current) {
      window.turnstile.remove(widgetIdRef.current);
      widgetIdRef.current = null;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: turnstileSiteKey,
      callback: async (token) => {
        if (!token || !action) {
          setStatus("error");
          return;
        }

        setStatus("loading");

        const redirectUrl = await getContactRedirect(token, action.id).catch(
          () => null,
        );

        if (!redirectUrl) {
          setStatus("error");

          if (widgetIdRef.current && window.turnstile) {
            window.turnstile.reset(widgetIdRef.current);
          }

          return;
        }

        setStatus("verified");
        window.location.href = redirectUrl;
      },
      "error-callback": () => setStatus("error"),
      "expired-callback": () => setStatus("expired"),
    });
  }, [action, open, scriptReady]);

  useEffect(() => {
    if (open) {
      return;
    }

    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.remove(widgetIdRef.current);
      widgetIdRef.current = null;
    }

    setScriptReady(Boolean(window.turnstile));
    setStatus("idle");
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Quick verification</DialogTitle>
          <DialogDescription>
            Complete the check to continue to {action?.label ?? "this contact option"}.
          </DialogDescription>
        </DialogHeader>

        <div className="flex min-h-[78px] items-center justify-center rounded-md border border-border bg-muted/20 p-4">
          {turnstileSiteKey ? (
            <div ref={containerRef} />
          ) : (
            <p className="text-center text-sm text-destructive">
              Turnstile is not configured. Add VITE_TURNSTILE_SITE_KEY to
              enable contact links.
            </p>
          )}
        </div>

        {status === "loading" && (
          <p className="text-center text-sm text-muted-foreground">Loading verification...</p>
        )}
        {status === "expired" && (
          <p className="text-center text-sm text-muted-foreground">
            The check expired. Complete it again to continue.
          </p>
        )}
        {status === "error" && (
          <p className="text-center text-sm text-destructive">
            Verification failed. Please complete the check again.
          </p>
        )}
        {status === "verified" && (
          <p className="text-center text-sm text-muted-foreground">Verification complete...</p>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TurnstileContactGate;
