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
              <p className="text-lg text-black mb-2">Destiny Christian Center</p>
              <p className="text-lg text-black mb-2">[Your Actual Address]</p>
              <p className="text-lg text-black">Oklahoma City, OK [Your ZIP]</p>
              <div className="mt-4">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}