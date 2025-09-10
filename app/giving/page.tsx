import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { ArrowRight, Heart, Target, Users, ExternalLink } from 'lucide-react'
import { site } from '@/lib/config/site.config'
import { cc } from '@/lib/services/churchCenter'

export const metadata: Metadata = {
  title: 'Give | Destiny Christian Center',
  description: 'Your generosity fuels ministry at Destiny. Give online and support our mission.',
}

export default function GivingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-6">
              Give
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8">
              Your generosity fuels ministry at Destiny and helps us reach our community with the love of Jesus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8">
                <Link href={cc.giving()} target="_blank" rel="noopener noreferrer">
                  Give Online
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8">
                <Link href="/about">
                  Learn About Our Mission
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Give Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Why We Give
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Generosity is at the heart of our faith. When we give, we're participating in God's work in our community and around the world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Love in Action</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your gifts help us show God's love through practical acts of service in our community.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Community Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Together, we're making a difference in Oklahoma City and beyond through outreach and ministry.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Kingdom Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your generosity helps us reach more people with the life-changing message of Jesus.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Ways to Give Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Ways to Give
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the method that works best for you
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Online</h3>
                <p className="text-muted-foreground text-sm mb-4">Quick and secure</p>
                <Button asChild size="sm" className="w-full">
                  <Link href={cc.giving()} target="_blank" rel="noopener noreferrer">
                    Give Now
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">In Person</h3>
                <p className="text-muted-foreground text-sm mb-4">During services</p>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link href="/visit">Plan a Visit</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Recurring</h3>
                <p className="text-muted-foreground text-sm mb-4">Set up automatic giving</p>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link href={cc.giving()} target="_blank" rel="noopener noreferrer">
                    Set Up
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Other Ways</h3>
                <p className="text-muted-foreground text-sm mb-4">Stocks, property, etc.</p>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Your generosity helps us reach more people with the love of Jesus. Every gift, no matter the size, makes an impact.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 px-8">
              <Link href={cc.giving()} target="_blank" rel="noopener noreferrer">
                Give Online Now
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}