import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { ExternalLink, Users, Heart, BookOpen, Coffee, Home } from 'lucide-react'
import { cc } from '@/lib/services/churchCenter'

export const metadata: Metadata = {
  title: 'Small Groups | Destiny Christian Center',
  description: 'Find community and connection in our small groups. There\'s a place for everyone!',
}

export default function GroupsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-6">
              Small Groups
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8">
              Find community and connection in our small groups. There&apos;s a place for everyone!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8">
                <Link href={cc.groups()} target="_blank" rel="noopener noreferrer">
                  Browse All Groups
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8">
                <Link href="/visit">
                  Plan Your First Visit
                  <Users className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Groups Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Why Small Groups?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Life is better together. Small groups provide a place to grow in faith, build friendships, and support one another through life&apos;s journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Authentic Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Build real relationships with people who care about you and your spiritual growth.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Spiritual Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Study God&apos;s Word together and apply biblical truth to your everyday life.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Support & Encouragement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Find support during life&apos;s challenges and celebrate victories together.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Types of Groups Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Types of Groups
            </h2>
            <p className="text-xl text-muted-foreground">
              We have groups for every stage of life and interest
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Life Stage</h3>
                <p className="text-muted-foreground text-sm mb-4">Young adults, families, seniors</p>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link href={cc.groups()} target="_blank" rel="noopener noreferrer">
                    Find Groups
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Bible Study</h3>
                <p className="text-muted-foreground text-sm mb-4">Deep dive into Scripture</p>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link href={cc.groups()} target="_blank" rel="noopener noreferrer">
                    Find Groups
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Coffee className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Interest-Based</h3>
                <p className="text-muted-foreground text-sm mb-4">Hobbies, sports, activities</p>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link href={cc.groups()} target="_blank" rel="noopener noreferrer">
                    Find Groups
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Location-Based</h3>
                <p className="text-muted-foreground text-sm mb-4">Groups in your area</p>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link href={cc.groups()} target="_blank" rel="noopener noreferrer">
                    Find Groups
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* How to Join Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              How to Join a Group
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Getting connected is easy! Follow these simple steps to find your perfect group.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Browse Groups</h3>
              <p className="text-muted-foreground">
                Explore our directory of small groups and find one that fits your interests and schedule.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Contact the Leader</h3>
              <p className="text-muted-foreground">
                Reach out to the group leader to learn more and confirm meeting details.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Show Up & Connect</h3>
              <p className="text-muted-foreground">
                Attend your first meeting and start building meaningful relationships.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Find Your Group?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Don&apos;t wait - your community is waiting for you. Browse our groups today and take the first step toward deeper connections.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 px-8">
              <Link href={cc.groups()} target="_blank" rel="noopener noreferrer">
                Browse All Groups
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
