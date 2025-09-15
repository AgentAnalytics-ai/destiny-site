"use client"

import Link from 'next/link'

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-primary">Upcoming Events</h1>
            <p className="text-xl text-muted">Join us for community, growth, and fun!</p>
          </div>
        </div>
      </section>

      <section className="py-12 container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Event Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <img src="https://via.placeholder.com/400x250" alt="Event Image" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-foreground mb-2">Community Outreach Day</h3>
              <p className="text-muted mb-4">Join us as we serve our local community. It&apos;s a great way to make a difference!</p>
              <div className="flex items-center text-sm text-muted mb-4">
                <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                <span>October 26, 2024</span>
              </div>
              <Link href="https://destinyokc.churchcenter.com/registrations" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">
                Register Now
              </Link>
            </div>
          </div>

          {/* Another Example Event Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <img src="https://via.placeholder.com/400x250" alt="Event Image" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-foreground mb-2">Youth Fall Retreat</h3>
              <p className="text-muted mb-4">A weekend of fun, fellowship, and spiritual growth for our youth. Don&apos;t miss out!</p>
              <div className="flex items-center text-sm text-muted mb-4">
                <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                <span>November 8-10, 2024</span>
              </div>
              <Link href="https://destinyokc.churchcenter.com/registrations" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">
                Learn More
              </Link>
            </div>
          </div>

          {/* Add more event cards as needed */}
        </div>
      </section>
    </div>
  )
}
