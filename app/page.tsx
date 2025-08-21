import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { themeConfig } from '@/theme.config'
import Link from 'next/link'
import { Calendar, Users, Play, Heart } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-destiny-primary to-destiny-secondary text-white">
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            A place where everyone belongs
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Join us as we discover God's love, build authentic relationships, and make a difference in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-destiny-primary hover:bg-gray-100">
              <Link href="/plan-a-visit">Plan a Visit</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-destiny-primary">
              <Link href="/giving">Give Online</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Service Times</h2>
          <div className="space-y-4">
            {themeConfig.serviceTimes.map((service, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-semibold text-lg">{service.day}</span>
                <span className="text-destiny-primary font-bold">{service.time}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button asChild>
              <Link href="/plan-a-visit">Plan Your Visit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get Connected</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Calendar className="w-12 h-12 mx-auto text-destiny-primary mb-4" />
              <CardTitle>Events</CardTitle>
              <CardDescription>Join us for upcoming events and activities</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/events">View Events</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="w-12 h-12 mx-auto text-destiny-primary mb-4" />
              <CardTitle>Groups</CardTitle>
              <CardDescription>Find your community in one of our groups</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/groups">Find Groups</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Play className="w-12 h-12 mx-auto text-destiny-primary mb-4" />
              <CardTitle>Sermons</CardTitle>
              <CardDescription>Watch or listen to recent messages</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/sermons">Watch Sermons</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Heart className="w-12 h-12 mx-auto text-destiny-primary mb-4" />
              <CardTitle>Prayer</CardTitle>
              <CardDescription>Submit prayer requests and get support</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/prayer">Request Prayer</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Destiny Church</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're a community of people who believe that everyone matters to God and everyone belongs here. 
              Whether you're exploring faith for the first time or you've been following Jesus for years, 
              you're welcome here.
            </p>
            <Button asChild size="lg">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
