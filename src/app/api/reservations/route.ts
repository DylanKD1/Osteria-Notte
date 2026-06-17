import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";
import { createUnsubscribeToken } from "@/lib/unsubscribe-token";

const resend = new Resend(process.env.RESEND_API_KEY);

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://osterianotte.dinavora.com";

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "Dinavora Demo <noreply@dinavora.com>";

interface ReservationPayload {
  name: string;
  email: string;
  phone?: string;
  date: string;
  time: string;
  guests: string;
  message?: string;
  demoConsent?: boolean;
}

function buildEmailHtml(
  payload: ReservationPayload,
  unsubscribeUrl: string
): string {
  const { name, date, time, guests, message } = payload;

  const formattedDate = new Date(date).toLocaleDateString("de-DE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const guestsLabel = guests === "1" ? "1 Person" : `${guests} Personen`;

  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Reservierungsbestätigung – Osteria Notte</title>
</head>
<body style="margin:0;padding:0;background-color:#1c1c1c;font-family:Georgia,'Times New Roman',serif;color:#f0ece4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#1c1c1c;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#222222;border:1px solid #333;">

          <!-- Header -->
          <tr>
            <td style="padding:40px 48px 32px;border-bottom:1px solid #333;">
              <p style="margin:0 0 4px;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#999;">Demo-Website · Dinavora Platform</p>
              <h1 style="margin:0;font-style:italic;font-weight:400;font-size:32px;color:#c9a96e;">Osteria Notte</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 48px;">
              <h2 style="margin:0 0 24px;font-style:italic;font-weight:400;font-size:24px;color:#f0ece4;">Vielen Dank, ${name}.</h2>
              <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#c8c0b4;">
                Ihre Reservierungsanfrage ist bei uns eingegangen. Hier sind Ihre Angaben:
              </p>

              <!-- Details box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#1c1c1c;border:1px solid #3a3a3a;margin-bottom:32px;">
                <tr>
                  <td style="padding:24px 28px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:6px 0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#777;width:40%;">Datum</td>
                        <td style="padding:6px 0;font-size:14px;color:#f0ece4;">${formattedDate}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#777;">Uhrzeit</td>
                        <td style="padding:6px 0;font-size:14px;color:#f0ece4;">${time} Uhr</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#777;">Personen</td>
                        <td style="padding:6px 0;font-size:14px;color:#f0ece4;">${guestsLabel}</td>
                      </tr>
                      ${
                        message
                          ? `<tr>
                        <td style="padding:6px 0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#777;vertical-align:top;">Hinweis</td>
                        <td style="padding:6px 0;font-size:14px;color:#f0ece4;">${message}</td>
                      </tr>`
                          : ""
                      }
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Demo notice -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#2a2000;border:1px solid #5a4500;margin-bottom:32px;">
                <tr>
                  <td style="padding:16px 20px;font-size:12px;line-height:1.6;color:#c9a96e;">
                    <strong>⚠️ Demo-Hinweis:</strong> Diese Website ist eine Software-Demonstration der Dinavora-Plattform (Classic). Dieses Restaurant existiert nicht. Ihre Reservierungsanfrage wird nicht entgegengenommen.
                  </td>
                </tr>
              </table>

              <p style="margin:0;font-size:14px;line-height:1.7;color:#888;">
                So erleben Sie, wie die Dinavora-Plattform im Echtbetrieb aussieht — inklusive automatischer E-Mail-Bestätigung.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 48px 40px;border-top:1px solid #333;">
              <p style="margin:0 0 8px;font-size:11px;color:#555;line-height:1.6;">
                Sie möchten keine weiteren E-Mails von dieser Demo erhalten?
                <a href="${unsubscribeUrl}" style="color:#c9a96e;text-decoration:underline;">Hier abmelden</a>.
              </p>
              <p style="margin:0;font-size:11px;color:#444;">
                Eingegebene Daten werden ausschließlich zur Demonstration verwendet —
                <a href="mailto:hello@dinavora.com" style="color:#666;">hello@dinavora.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  let body: ReservationPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const { name, email, phone, date, time, guests, message, demoConsent } = body;

  // Basic validation
  if (!name?.trim() || !email?.trim() || !date || !time || !guests) {
    return NextResponse.json(
      { error: "Bitte füllen Sie alle Pflichtfelder aus." },
      { status: 400 }
    );
  }

  const emailNorm = email.trim().toLowerCase();

  // RFC-5322-ish email sanity check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailNorm)) {
    return NextResponse.json(
      { error: "Bitte geben Sie eine gültige E-Mail-Adresse an." },
      { status: 400 }
    );
  }

  // Suppression check — silent: user still sees "thank you"
  const suppressed = await prisma.emailSuppression.findUnique({
    where: { email: emailNorm },
  });

  if (suppressed) {
    return NextResponse.json({ ok: true });
  }

  // Persist consent decision (always, so we have an audit record)
  const consentGranted = demoConsent === true;
  await prisma.demoConsent.upsert({
    where: { email: emailNorm },
    update: {
      demoConsentGranted: consentGranted,
      demoConsentAt: consentGranted ? new Date() : null,
    },
    create: {
      email: emailNorm,
      demoConsentGranted: consentGranted,
      demoConsentAt: consentGranted ? new Date() : null,
    },
  });

  // Gate: no consent → skip email
  if (!consentGranted) {
    return NextResponse.json({ ok: true });
  }

  // Build unsubscribe URL
  const token = createUnsubscribeToken(emailNorm);
  const unsubscribeUrl = `${APP_URL}/api/unsubscribe?token=${token}`;

  // Send confirmation email
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: [emailNorm],
    replyTo: "hello@dinavora.com",
    subject: "Ihre Reservierungsanfrage bei Osteria Notte (Demo)",
    html: buildEmailHtml({ name, email: emailNorm, phone, date, time, guests, message }, unsubscribeUrl),
    headers: {
      "List-Unsubscribe": `<${unsubscribeUrl}>, <mailto:hello@dinavora.com?subject=unsubscribe>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
    },
  });

  if (error) {
    console.error("[reservations] Resend error:", error);
    // Don't surface internal errors to the user — the submission still "worked"
  }

  return NextResponse.json({ ok: true });
}
