import { NextRequest, NextResponse } from "next/server";
import { verifyUnsubscribeToken } from "@/lib/unsubscribe-token";

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://osterianotte.dinavora.com";

function htmlPage(title: string, heading: string, body: string): Response {
  return new Response(
    `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title} – Osteria Notte</title>
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    body{background:#1c1c1c;color:#f0ece4;font-family:Georgia,'Times New Roman',serif;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:40px 20px}
    .card{max-width:520px;width:100%;border:1px solid #333;padding:48px 40px;text-align:center}
    h1{font-style:italic;font-weight:400;font-size:2rem;color:#c9a96e;margin-bottom:20px}
    p{font-size:14px;line-height:1.8;color:#c8c0b4;margin-bottom:14px}
    a{color:#c9a96e;text-decoration:underline}
    .back{display:inline-block;margin-top:24px;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#777;text-decoration:none;border-bottom:1px solid #444;padding-bottom:2px}
    .back:hover{color:#c9a96e;border-color:#c9a96e}
  </style>
</head>
<body>
  <div class="card">
    <h1>${heading}</h1>
    ${body}
    <a class="back" href="${APP_URL}">← Zurück zur Website</a>
  </div>
</body>
</html>`,
    { headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}

/** GET — browser click from email link */
export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token") ?? "";
  const email = verifyUnsubscribeToken(token);

  if (!email) {
    return htmlPage(
      "Ungültiger Link",
      "Ungültiger Link.",
      `<p>Dieser Abmelde-Link ist ungültig oder abgelaufen.</p>
       <p>Kontaktieren Sie uns unter <a href="mailto:hello@dinavora.com">hello@dinavora.com</a>, falls Sie Hilfe benötigen.</p>`
    );
  }

  return htmlPage(
    "Abgemeldet",
    "Abgemeldet.",
    `<p>Die E-Mail-Adresse <strong>${email}</strong> wurde erfolgreich von unserer Demo-Mailingliste entfernt.</p>
     <p>Sie erhalten keine weiteren Bestätigungs-E-Mails von dieser Demo.</p>
     <p style="font-size:12px;color:#666;margin-top:24px;">
       Eingegebene Daten werden auf Anfrage vollständig gelöscht —
       <a href="mailto:hello@dinavora.com">hello@dinavora.com</a>
     </p>`
  );
}

/** POST — RFC 8058 one-click unsubscribe (Gmail, Apple Mail, Yahoo) */
export async function POST(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token") ?? "";
  const email = verifyUnsubscribeToken(token);

  if (!email) {
    return new NextResponse("Invalid token", { status: 400 });
  }

  return new NextResponse("OK", { status: 200 });
}
