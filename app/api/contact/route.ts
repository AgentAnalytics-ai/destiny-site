export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { z } from "zod";
import { sendContactEmail } from "@/lib/mail";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  phone: z.string().optional(),
  // honeypot
  website: z.string().optional(),
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 });
  }
  // honeypot: any value means bot → pretend success
  if (parsed.data.website) return NextResponse.json({ ok: true });

  try {
    await sendContactEmail(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
