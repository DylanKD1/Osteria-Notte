import crypto from "crypto";

function secret(): string {
  const s = process.env.UNSUBSCRIBE_SECRET;
  if (!s) throw new Error("UNSUBSCRIBE_SECRET is not set");
  return s;
}

/**
 * Returns `{hmac_hex}.{email_base64url}`.
 * The HMAC binds the email so the token cannot be forged or redirected to another address.
 */
export function createUnsubscribeToken(email: string): string {
  const sig = crypto
    .createHmac("sha256", secret())
    .update(email)
    .digest("hex");
  const emailB64 = Buffer.from(email).toString("base64url");
  return `${sig}.${emailB64}`;
}

/**
 * Returns the verified email address, or null if the token is invalid/tampered.
 * Uses timing-safe comparison to prevent timing attacks.
 */
export function verifyUnsubscribeToken(token: string): string | null {
  try {
    const dotIdx = token.indexOf(".");
    if (dotIdx === -1) return null;

    const sig = token.slice(0, dotIdx);
    const emailB64 = token.slice(dotIdx + 1);

    // HMAC-SHA256 hex is always exactly 64 chars
    if (sig.length !== 64) return null;

    const email = Buffer.from(emailB64, "base64url").toString("utf-8");
    if (!email || !email.includes("@")) return null;

    const expected = crypto
      .createHmac("sha256", secret())
      .update(email)
      .digest("hex");

    const sigBuf = Buffer.from(sig, "hex");
    const expectedBuf = Buffer.from(expected, "hex");

    if (sigBuf.length !== expectedBuf.length) return null;

    return crypto.timingSafeEqual(sigBuf, expectedBuf) ? email : null;
  } catch {
    return null;
  }
}
