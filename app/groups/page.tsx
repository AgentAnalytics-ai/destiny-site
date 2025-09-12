"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { Users, Calendar, MapPin, ArrowRight, Heart, BookOpen } from 'lucide-react'

export default function GroupsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Small Groups
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find community and connection in our small groups
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => window.open('https://destinyokc.churchcenter.com/groups', '_blank')}
            >
              <Users className="w-5 h-5 mr-2" />
              Browse Groups
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Why Groups Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Join a Group?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Small groups are where life happens. Connect with others, grow in faith, and make lasting friendships.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Build meaningful relationships with people who care about you
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Study God&apos;s Word together and grow in your faith journey
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Find encouragement and support through life&apos;s challenges
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Types of Groups */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Types of Groups</h2>
            <p className="text-lg text-muted-foreground">
              Find the group that&apos;s right for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 text-primary mr-2" />
                  Life Stage Groups
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Groups for different life stages - young adults, families, seniors
                </p>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => window.open('https://destinyokc.churchcenter.com/groups', '_blank')}
                >
                  Browse Groups
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-5 h-5 text-primary mr-2" />
                  Bible Studies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Deep dive into Scripture with guided study and discussion
                </p>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => window.open('https://destinyokc.churchcenter.com/groups', '_blank')}
                >
                  Browse Groups
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary mr-2" />
                  Location-Based
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Groups meeting in your neighborhood for convenience
                </p>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => window.open('https://destinyokc.churchcenter.com/groups', '_blank')}
                >
                  Browse Groups
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
            <h2 className="text-3xl font-bold mb-4">Ready to Connect?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join a small group and experience the power of Christian community
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-4"
              onClick={() => window.open('https://destinyokc.churchcenter.com/groups', '_blank')}
            >
              <Users className="w-5 h-5 mr-2" />
              Find Your Group
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
