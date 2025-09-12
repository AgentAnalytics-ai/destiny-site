import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { Calendar, MapPin, Clock, ArrowRight, Users, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Events | Destiny Christian Center',
  description: 'Join us for upcoming events and activities',
}

export default function EventsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Upcoming Events
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join us for worship, fellowship, and community events
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => window.open('https://destinyokc.churchcenter.com/registrations', '_blank')}
            >
              <Calendar className="w-5 h-5 mr-2" />
              View All Events
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Regular Services */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Regular Services</h2>
            <p className="text-lg text-muted-foreground">
              Join us every week for worship and fellowship
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl">Sunday Service</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary mr-2" />
                    <span className="text-lg font-semibold">10:30 AM</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary mr-2" />
                    <span>3801 SE 29th St, Oklahoma City, OK</span>
                  </div>
                  <p className="text-muted-foreground">
                    Join us for worship, teaching, and community
                  </p>
                  <Button asChild>
                    <Link href="/visit">Plan Your Visit</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl">Wednesday Bible Study</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary mr-2" />
                    <span className="text-lg font-semibold">7:00 PM</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary mr-2" />
                    <span>3801 SE 29th St, Oklahoma City, OK</span>
                  </div>
                  <p className="text-muted-foreground">
                    Deep dive into God's Word with discussion and fellowship
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/visit">Plan Your Visit</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Special Events */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Special Events</h2>
            <p className="text-lg text-muted-foreground">
              Check out our upcoming special events and activities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 text-primary mr-2" />
                  Community Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Fun community events for the whole family
                </p>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => window.open('https://destinyokc.churchcenter.com/registrations', '_blank')}
                >
                  View Events
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="w-5 h-5 text-primary mr-2" />
                  Outreach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Serve our community and make a difference
                </p>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => window.open('https://destinyokc.churchcenter.com/registrations', '_blank')}
                >
                  View Events
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 text-primary mr-2" />
                  Seasonal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Holiday celebrations and seasonal activities
                </p>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => window.open('https://destinyokc.churchcenter.com/registrations', '_blank')}
                >
                  View Events
                </Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="text-xl mb-8 opacity-90">
              Don't miss out on upcoming events and activities
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-4"
              onClick={() => window.open('https://destinyokc.churchcenter.com/registrations', '_blank')}
            >
              <Calendar className="w-5 h-5 mr-2" />
              View All Events
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
