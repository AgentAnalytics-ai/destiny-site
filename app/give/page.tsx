"use client"

import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { Heart, CreditCard, Smartphone, Users, Target, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Give | Destiny Christian Center',
  description: 'Support our mission and ministries through online giving',
}

export default function GivePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Give Online
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Support our mission and ministries through secure online giving
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => window.open('https://destinyokc.churchcenter.com/giving', '_blank')}
            >
              <CreditCard className="w-5 h-5 mr-2" />
              Give Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Why Give Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why We Give</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your generosity helps us reach our community and beyond with the love of Christ
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Local Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Supporting our community outreach, food pantry, and local mission work
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Global Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Partnering with missionaries and organizations around the world
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Ministry Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Expanding our facilities and programs to serve more people
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Ways to Give Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Ways to Give</h2>
            <p className="text-lg text-muted-foreground">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CreditCard className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Online</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Secure online giving with credit/debit cards
                </p>
                <Button 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open('https://destinyokc.churchcenter.com/giving', '_blank')}
                >
                  Give Online
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smartphone className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Mobile App</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Download the Church Center app for easy giving
                </p>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('https://destinyokc.churchcenter.com', '_blank')}
                >
                  Get App
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">In Person</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Give during our Sunday services or at the church office
                </p>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full"
                  asChild
                >
                  <Link href="/visit">Plan Visit</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Recurring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Set up automatic recurring donations
                </p>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('https://destinyokc.churchcenter.com/giving', '_blank')}
                >
                  Set Up
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
            <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 opacity-90">
              Your generosity helps us reach our community and beyond with the love of Christ
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-4"
              onClick={() => window.open('https://destinyokc.churchcenter.com/giving', '_blank')}
            >
              <Heart className="w-5 h-5 mr-2" />
              Give Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
