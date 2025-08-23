import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { site } from '@/lib/config/site.config'
import { Calendar, Users, Heart, MapPin, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Home',
  description: site.seo?.description,
}

export default function HomePage() {
  return (
    <Container className="py-12">
      {/* Hero Section */}
      <div className="text-center space-y-8 mb-16">
        <h1 className="text-5xl font-bold">Welcome to {site.name}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A place where everyone belongs and everyone matters.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`${site.churchCenter.base}${site.churchCenter.planAVisitForm}`} target="_blank" rel="noopener noreferrer">
            <Button size="lg">
              Plan a Visit
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Link href="/watch">
            <Button variant="outline" size="lg">
              Watch Online
            </Button>
          </Link>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="text-center space-y-4">
          <Calendar className="w-12 h-12 text-primary mx-auto" />
          <h3 className="text-xl font-semibold">Join Us</h3>
          <p className="text-muted-foreground">
            {site.serviceTimes.join(', ')}
          </p>
        </div>
        <div className="text-center space-y-4">
          <Users className="w-12 h-12 text-primary mx-auto" />
          <h3 className="text-xl font-semibold">Get Connected</h3>
          <p className="text-muted-foreground">
            Find community in our small groups
          </p>
        </div>
        <div className="text-center space-y-4">
          <Heart className="w-12 h-12 text-primary mx-auto" />
          <h3 className="text-xl font-semibold">Give</h3>
          <p className="text-muted-foreground">
            Support our mission and ministries
          </p>
        </div>
      </div>

      {/* Location */}
      <div className="text-center space-y-4">
        <MapPin className="w-8 h-8 text-primary mx-auto" />
        <h2 className="text-2xl font-semibold">Find Us</h2>
        <p className="text-muted-foreground">{site.address}</p>
      </div>
    </Container>
  )
}
