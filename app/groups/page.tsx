"use client"

import Link from 'next/link'

export default function GroupsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-primary">Find Your Community</h1>
            <p className="text-xl text-muted">Connect with others and grow together in our small groups.</p>
          </div>
        </div>
      </section>

      <section className="py-12 container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Group Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <img src="https://via.placeholder.com/400x250" alt="Group Image" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-foreground mb-2">Men&apos;s Bible Study</h3>
              <p className="text-muted mb-4">Join other men for fellowship, prayer, and in-depth study of God&apos;s Word.</p>
              <div className="flex items-center text-sm text-muted mb-4">
                <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17.555 17.555A1 1 0 0117 18H7a1 1 0 01-.707-1.707l2.586-2.586a1 1 0 011.414 0l1.586 1.586a1 1 0 001.414 0l2.586-2.586a1 1 0 011.414 0l.707.707a1 1 0 010 1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                <span>Tuesdays, 7:00 PM</span>
              </div>
              <Link href="https://destinyokc.churchcenter.com/groups" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">
                Join Group
              </Link>
            </div>
          </div>

          {/* Another Example Group Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <img src="https://via.placeholder.com/400x250" alt="Group Image" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-foreground mb-2">Women&apos;s Prayer Group</h3>
              <p className="text-muted mb-4">A supportive community for women to share, pray, and encourage one another.</p>
              <div className="flex items-center text-sm text-muted mb-4">
                <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17.555 17.555A1 1 0 0117 18H7a1 1 0 01-.707-1.707l2.586-2.586a1 1 0 011.414 0l1.586 1.586a1 1 0 001.414 0l2.586-2.586a1 1 0 011.414 0l.707.707a1 1 0 010 1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                <span>Thursdays, 10:00 AM</span>
              </div>
              <Link href="https://destinyokc.churchcenter.com/groups" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">
                Learn More
              </Link>
            </div>
          </div>

          {/* Add more group cards as needed */}
        </div>
      </section>
    </div>
  )
}
