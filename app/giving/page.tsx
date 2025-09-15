"use client"

export default function GivingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Match Planning Center's layout */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
            <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
            </svg>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Give Online</h1>
          <p className="text-xl text-muted mb-8">Support our mission and ministries through secure online giving</p>
          <button 
            onClick={() => window.open('https://destinyokc.churchcenter.com/giving', '_blank')}
            className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all duration-200 hover:shadow-md"
          >
            Give Now
          </button>
        </div>
      </section>

      {/* Why Give Section - Match Planning Center's card styling */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why We Give</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Your generosity helps us reach our community and beyond with the love of Christ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-soft border border-gray-200 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Local Impact</h3>
              <p className="text-muted">Supporting our community outreach, food pantry, and local mission work</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-soft border border-gray-200 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Global Mission</h3>
              <p className="text-muted">Partnering with missionaries and organizations around the world</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-soft border border-gray-200 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Ministry Growth</h3>
              <p className="text-muted">Expanding our facilities and programs to serve more people</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
