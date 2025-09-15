"use client"

export default function VisitPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-black mb-8">Plan Your Visit</h1>
          <p className="text-xl text-black mb-8">We can&apos;t wait to meet you!</p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">Service Times</h2>
              <p className="text-lg text-black mb-2">Sunday: 10:30 AM</p>
              <p className="text-lg text-black">Wednesday: 7:00 PM</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">Location</h2>
              <p className="text-lg text-black mb-2">123 Church St</p>
              <p className="text-lg text-black">Oklahoma City, OK 73101</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}