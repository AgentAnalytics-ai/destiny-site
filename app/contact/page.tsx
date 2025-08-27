"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setStatus(res.ok ? "sent" : "error");
    if (res.ok) e.currentTarget.reset();
  }

  return (
    <main className="container mx-auto max-w-xl px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        {/* honeypot */}
        <input name="website" className="hidden" tabIndex={-1} autoComplete="off" />
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input name="name" required className="w-full border rounded-md px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input name="email" type="email" required className="w-full border rounded-md px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm mb-1">Phone (optional)</label>
          <input name="phone" className="w-full border rounded-md px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea name="message" rows={5} required className="w-full border rounded-md px-3 py-2" />
        </div>
        <button
          disabled={status === "sending"}
          className="inline-flex items-center rounded-md border px-5 py-2"
        >
          {status === "sending" ? "Sending…" : "Send"}
        </button>
        {status === "sent" && <p className="text-green-600">Thanks! We&apos;ll be in touch.</p>}
        {status === "error" && <p className="text-red-600">Something went wrong. Please try again.</p>}
      </form>
    </main>
  );
}
