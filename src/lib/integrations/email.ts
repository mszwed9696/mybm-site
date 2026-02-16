// =============================================================
// Email Delivery Integration Layer
// =============================================================
// Provider-agnostic email sending abstraction.
// Designed to be called from Supabase Edge Functions.

export type EmailProvider = "resend" | "sendgrid" | "postmark";

export interface EmailPayload {
    to: string;
    subject: string;
    html: string;
    from?: string;
    replyTo?: string;
}

export interface EmailConfig {
    provider: EmailProvider;
    apiKey: string;
    fromAddress: string;
}

/**
 * Send an email using the configured provider.
 * This should be called from a Supabase Edge Function or server-side context.
 */
export async function sendEmail(
    config: EmailConfig,
    payload: EmailPayload
): Promise<{ success: boolean; error?: string }> {
    if (!config.apiKey) {
        console.warn("Email API key not configured — skipping send.");
        return { success: false, error: "Email API key not configured" };
    }

    const from = payload.from || config.fromAddress;

    try {
        switch (config.provider) {
            case "resend":
                return await sendViaResend(config.apiKey, { ...payload, from });
            case "sendgrid":
                return await sendViaSendGrid(config.apiKey, { ...payload, from });
            case "postmark":
                return await sendViaPostmark(config.apiKey, { ...payload, from });
            default:
                return { success: false, error: `Unsupported provider: ${config.provider}` };
        }
    } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error";
        console.error("Email send error:", message);
        return { success: false, error: message };
    }
}

// ─── Provider Implementations ───────────────────────────────

async function sendViaResend(
    apiKey: string,
    payload: EmailPayload & { from: string }
): Promise<{ success: boolean; error?: string }> {
    const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            from: payload.from,
            to: payload.to,
            subject: payload.subject,
            html: payload.html,
            reply_to: payload.replyTo,
        }),
    });

    if (!response.ok) {
        const errorText = await response.text();
        return { success: false, error: errorText };
    }
    return { success: true };
}

async function sendViaSendGrid(
    apiKey: string,
    payload: EmailPayload & { from: string }
): Promise<{ success: boolean; error?: string }> {
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            personalizations: [{ to: [{ email: payload.to }] }],
            from: { email: payload.from },
            subject: payload.subject,
            content: [{ type: "text/html", value: payload.html }],
            reply_to: payload.replyTo ? { email: payload.replyTo } : undefined,
        }),
    });

    if (!response.ok) {
        const errorText = await response.text();
        return { success: false, error: errorText };
    }
    return { success: true };
}

async function sendViaPostmark(
    apiKey: string,
    payload: EmailPayload & { from: string }
): Promise<{ success: boolean; error?: string }> {
    const response = await fetch("https://api.postmarkapp.com/email", {
        method: "POST",
        headers: {
            "X-Postmark-Server-Token": apiKey,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            From: payload.from,
            To: payload.to,
            Subject: payload.subject,
            HtmlBody: payload.html,
            ReplyTo: payload.replyTo,
        }),
    });

    if (!response.ok) {
        const errorText = await response.text();
        return { success: false, error: errorText };
    }
    return { success: true };
}

// ─── Email Templates ────────────────────────────────────────

export function buildAuditConfirmationEmail(leadName: string): EmailPayload {
    return {
        to: "", // To be filled by caller
        subject: "Your Free Growth Audit is Being Prepared — Mind Your Business Media",
        html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="color: #0f172a; font-size: 24px; margin-bottom: 16px;">
          Thanks, ${leadName}! Your audit is underway.
        </h1>
        <p style="color: #475569; font-size: 16px; line-height: 1.6;">
          Our team is reviewing your current marketing setup and will deliver a 
          custom performance audit to your inbox within 48 hours.
        </p>
        <p style="color: #475569; font-size: 16px; line-height: 1.6;">
          Your audit will include actionable insights on:
        </p>
        <ul style="color: #475569; font-size: 16px; line-height: 1.8;">
          <li>Wasted ad spend identification</li>
          <li>Funnel leak analysis</li>
          <li>ROAS optimization opportunities</li>
          <li>90-day growth roadmap</li>
        </ul>
        <p style="color: #64748b; font-size: 14px; margin-top: 32px;">
          — The Mind Your Business Media Team
        </p>
      </div>
    `,
    };
}

export function buildQuizResultEmail(
    leadName: string,
    offerName: string,
    rationale: string[]
): EmailPayload {
    const bulletHtml = rationale.map((b) => `<li>${b}</li>`).join("");
    return {
        to: "",
        subject: `Your Personalized Recommendation — ${offerName}`,
        html: `
      <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="color: #0f172a; font-size: 24px; margin-bottom: 16px;">
          ${leadName}, here's your personalized recommendation
        </h1>
        <h2 style="color: #7c3aed; font-size: 20px; margin-bottom: 12px;">
          ${offerName}
        </h2>
        <ul style="color: #475569; font-size: 16px; line-height: 1.8;">
          ${bulletHtml}
        </ul>
        <a href="https://mindyourbusiness.media/contact" 
           style="display: inline-block; background: #7c3aed; color: white; 
                  padding: 14px 28px; border-radius: 8px; text-decoration: none; 
                  font-weight: 600; margin-top: 24px;">
          Book Your Strategy Call
        </a>
        <p style="color: #64748b; font-size: 14px; margin-top: 32px;">
          — The Mind Your Business Media Team
        </p>
      </div>
    `,
    };
}
