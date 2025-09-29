import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { ArrowRight, Heart, Users, BookOpen, Target } from 'lucide-react'
import PhotoGallery from '@/components/ui/PhotoGallery'

export const metadata: Metadata = {
  title: 'About Us | Destiny Christian Center',
  description: 'Learn about Destiny Church - our mission, values, and what makes us different.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-6">
              About Destiny Church
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8">
              A place where everyone belongs and everyone matters
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8">
                <Link href="/visit">
                  Plan Your Visit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8">
                <Link href="/groups">
                  Join a Group
                  <Users className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground">
                We exist to help people find and follow Jesus. This simple mission drives everything we do - from our weekend services to our community outreach programs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Love God</h3>
                    <p className="text-muted-foreground">We&apos;re passionate about worship and growing closer to Him</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Love People</h3>
                    <p className="text-muted-foreground">We build authentic relationships and serve our community</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Make Disciples</h3>
                    <p className="text-muted-foreground">We help people grow in their faith and impact others</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <PhotoGallery 
                folderName="03-community"
                maxPhotos={4}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              What to Expect
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              When you visit Destiny Church, you&apos;ll find a welcoming community ready to embrace you exactly where you are.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Welcoming Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  People who genuinely care about you and your journey
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Contemporary Worship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Music that connects with your heart and lifts your spirit
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Practical Teaching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Messages that apply biblical truth to everyday life
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Safe Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A place where your kids can learn and grow safely
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do as a church family
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                <h3 className="text-2xl font-bold text-primary mb-3">Belonging</h3>
                <p className="text-muted-foreground">
                  Everyone is welcome here, regardless of where you are in your faith journey.
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-secondary/5 to-secondary/10 rounded-xl border border-secondary/20">
                <h3 className="text-2xl font-bold text-secondary mb-3">Growth</h3>
                <p className="text-muted-foreground">
                  We believe in continuous spiritual growth and personal development.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-accent/5 to-accent/10 rounded-xl border border-accent/20">
                <h3 className="text-2xl font-bold text-accent mb-3">Service</h3>
                <p className="text-muted-foreground">
                  We&apos;re committed to serving our community and making a positive impact.
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/20">
                <h3 className="text-2xl font-bold text-primary mb-3">Generosity</h3>
                <p className="text-muted-foreground">
                  We practice and teach biblical generosity in all areas of life.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Get Connected Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Get Connected
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Ready to take the next step? We&apos;d love to help you get connected to our community.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Plan a Visit</h3>
                  <p className="text-muted-foreground text-sm mb-4">Let us know you&apos;re coming</p>
                  <Button asChild size="sm" className="w-full">
                    <Link href="/visit">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Join a Group</h3>
                  <p className="text-muted-foreground text-sm mb-4">Connect with others</p>
                  <Button asChild size="sm" variant="outline" className="w-full">
                    <Link href="/groups">Find Groups</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Serve</h3>
                  <p className="text-muted-foreground text-sm mb-4">Use your gifts</p>
                  <Button asChild size="sm" variant="outline" className="w-full">
                    <Link href="/contact">Get Involved</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Give</h3>
                  <p className="text-muted-foreground text-sm mb-4">Support our mission</p>
                  <Button asChild size="sm" variant="outline" className="w-full">
                    <Link href="/giving">Give Online</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
    </div>
        </Container>
      </section>
    </>
  )
}
