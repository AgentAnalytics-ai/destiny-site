"use client"

import Link from 'next/link'

export default function GivingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-primary">Give Online</h1>
            <p className="text-xl text-muted">Support our mission and ministries through secure online giving.</p>
          </div>
        </div>
      </section>

      <section className="py-12 container text-center">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-3xl font-semibold text-foreground mb-6">Your Generosity Makes a Difference</h2>
          <p className="text-lg text-muted mb-8">
            Thank you for partnering with Destiny Church to impact our community and spread the Gospel. Your giving helps us continue our mission.
          </p>
          <Link 
            href="https://destinyokc.churchcenter.com/giving" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary text-xl px-8 py-4"
          >
            Give Now
          </Link>
          <p className="text-sm text-muted mt-4">You will be redirected to our secure Planning Center Giving page.</p>
        </div>
      </section>
    </div>
  )
}
