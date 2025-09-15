"use client"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
            <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 7h12v9a1 1 0 01-1 1H5a1 1 0 01-1-1V7z"/>
            </svg>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Events</h1>
          <p className="text-xl text-muted mb-8">Join us for upcoming events and activities</p>
          <button 
            onClick={() => window.open('https://destinyokc.churchcenter.com/registrations', '_blank')}
            className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-200 hover:shadow-md"
          >
            View All Events
          </button>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Event Categories</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Find events that interest you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-soft border border-gray-200 text-center">
              <h3 className="text-xl font-semibold text-primary mb-2">Worship Services</h3>
              <p className="text-muted">Sunday morning worship</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-soft border border-gray-200 text-center">
              <h3 className="text-xl font-semibold text-primary mb-2">Bible Studies</h3>
              <p className="text-muted">Deep dive into God&apos;s Word</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-soft border border-gray-200 text-center">
              <h3 className="text-xl font-semibold text-primary mb-2">Community Events</h3>
              <p className="text-muted">Fun activities for all ages</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
