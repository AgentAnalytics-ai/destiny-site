'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function GroupsPage() {
  // 2025 Optimized Groups Data
  const groups = [
    {
      id: 1,
      name: "Young Adults",
      description: "Connect with other young adults as we explore faith, build friendships, and grow together in Christ.",
      leader: "Pastor Sarah Johnson",
      time: "Sundays 6:00 PM",
      location: "Main Campus - Room 201",
      image: "/uploads/03-community/JLA02845 (1).jpg",
      churchCenterUrl: "https://destinyokc.churchcenter.com/groups/young-adults"
    },
    {
      id: 2,
      name: "Men's Fellowship",
      description: "A place for men to grow in faith, build authentic relationships, and support each other through life's challenges.",
      leader: "Elder Michael Davis",
      time: "Wednesdays 7:00 PM",
      location: "Main Campus - Fellowship Hall",
      image: "/uploads/03-community/Untitled-1067.jpg",
      churchCenterUrl: "https://destinyokc.churchcenter.com/groups/mens-fellowship"
    },
    {
      id: 3,
      name: "Women's Bible Study",
      description: "Join us for deep Bible study, prayer, and fellowship as we grow in our relationship with God and each other.",
      leader: "Sister Lisa Williams",
      time: "Tuesdays 10:00 AM",
      location: "Main Campus - Room 105",
      image: "/uploads/05-testimonials/JLA03499.jpg",
      churchCenterUrl: "https://destinyokc.churchcenter.com/groups/womens-bible-study"
    },
    {
      id: 4,
      name: "Family Life",
      description: "Strengthen your family bonds through faith-based activities, parenting support, and community building.",
      leader: "Pastor Mark & Sarah Thompson",
      time: "Sundays 4:00 PM",
      location: "Main Campus - Family Center",
      image: "/uploads/03-community/Untitled-5009.jpg",
      churchCenterUrl: "https://destinyokc.churchcenter.com/groups/family-life"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/uploads/03-community/JLA02845 (1).jpg"
            alt="Destiny Church Community Groups"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        {/* Content Overlay */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Join Our Community
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Connect with others, grow in faith, and build lasting relationships through our small groups and fellowship opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Groups Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {groups.map((group) => (
              <div key={group.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="relative h-64">
                  <Image
                    src={group.image}
                    alt={`${group.name} group at Destiny Church`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{group.name}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{group.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="font-medium">Leader:</span> {group.leader}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">Time:</span> {group.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-medium">Location:</span> {group.location}
                    </div>
                  </div>
                  
                  <Link
                    href={group.churchCenterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    Join This Group
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Can&apos;t Find the Right Group?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We&apos;re always starting new groups based on interest and need. Let us know what you&apos;re looking for!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://destinyokc.churchcenter.com/groups"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View All Groups
            </Link>
            <Link
              href="/contact"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Start a New Group
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}