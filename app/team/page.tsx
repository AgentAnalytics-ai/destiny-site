import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { ExternalLink, Users, Calendar, Heart, Settings, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Team Portal | Destiny Christian Center',
  description: 'Resources and tools for Destiny Church volunteers and leaders.',
}

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-6">
              Team Portal
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8">
              Resources and tools for Destiny Church volunteers and leaders
            </p>
          </div>
        </Container>
      </section>

      {/* Quick Access Cards */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Quick Access
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for Sunday morning and beyond
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Services Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Access worship plans, schedules, and service details
                </p>
                <Button asChild size="lg" className="w-full">
                  <Link href="/plan" target="_blank" rel="noopener noreferrer">
                    Open Services
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Check-Ins</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Manage kids check-ins and volunteer schedules
                </p>
                <Button asChild size="lg" variant="outline" className="w-full">
                  <Link href="/checkin">
                    Open Check-Ins
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Prayer Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  View and manage prayer requests from our community
                </p>
                <Button asChild size="lg" variant="outline" className="w-full">
                  <Link href="/prayer">
                    View Requests
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">ProPresenter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Access worship slides and presentation materials
                </p>
                <Button asChild size="lg" variant="outline" className="w-full">
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    Open Slides
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Volunteer Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  View your volunteer schedule and sign up for opportunities
                </p>
                <Button asChild size="lg" variant="outline" className="w-full">
                  <Link href="/plan" target="_blank" rel="noopener noreferrer">
                    View Schedule
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Team Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Access training materials and team communication
                </p>
                <Button asChild size="lg" variant="outline" className="w-full">
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    View Resources
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Need Help?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact our team if you need assistance with any of these tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8">
                <Link href="/contact">
                  Contact Support
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8">
                <Link href="mailto:info@destinyokc.com">
                  Email Us
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
