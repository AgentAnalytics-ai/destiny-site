import { Resend } from "resend";
import { env } from "@/lib/utils/env";

export const resend = env.RESEND_API_KEY ? new Resend(env.RESEND_API_KEY) : undefined;

export async function sendContactEmail(data: {
  name: string;
  email: string;
  message: string;
  phone?: string;
}) {
  if (!resend || !env.CONTACT_TO || !env.CONTACT_FROM) {
    throw new Error("Email is not configured.");
  }
  return resend.emails.send({
    to: env.CONTACT_TO,
    from: env.CONTACT_FROM,
    subject: `New message from ${data.name}`,
    reply_to: data.email, // Fixed: changed from replyTo to reply_to
    text: `Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone ?? ""}
---
${data.message}`,
  });
}
