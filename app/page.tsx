import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { site } from '@/lib/config/site.config'
import { googleMapsLink } from '@/lib/utils/urls'
import { ArrowRight, Calendar, MapPin, Play } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Destiny Christian Center',
  description: 'Find your next. Join us every Sunday at 10:30 AM.',
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white">
        <Container className="text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl lg:text-8xl font-bold mb-8 animate-fade-in-up">
              Find your next.
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Join us every Sunday at 10:30 AM for powerful worship and life-changing messages
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 shadow-lg">
                <Link href="/visit">
                  Plan a Visit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-primary/20 backdrop-blur-sm border-2 border-white text-white hover:bg-primary/30 text-lg px-8 py-4 shadow-lg">
                <Link href="/live">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Live
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Times */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-bold text-primary">
                Sundays Are For Fuel
              </h2>
              <p className="text-xl text-muted-foreground">
                Experience the power of community and the presence of God
              </p>
              <div className="space-y-4">
                {site.serviceTimes.map((service, index) => (
                  <div key={index} className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <Calendar className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-semibold text-primary">{service.label}</p>
                      <p className="text-muted-foreground">{service.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 shadow-lg">
                <Link href="/visit">
                  Plan Your Visit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">Location</h3>
                <p className="text-muted-foreground mb-6">
                  {site.contact.addressLine1}<br />
                  {site.contact.addressLine2}
                </p>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg" 
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Link 
                    href={googleMapsLink(`${site.contact.addressLine1} ${site.contact.addressLine2}`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get Directions
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What to Expect with Photos */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
              What to Expect
            </h2>
            <p className="text-xl text-muted-foreground">
              A welcoming environment where everyone belongs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="aspect-video bg-gray-200">
                <Image 
                  src="/images/congregation/worship.jpg" 
                  alt="Worship service at Destiny Church"
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">Casual Atmosphere</h3>
                <p className="text-muted-foreground">Come as you are - no dress code required</p>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="aspect-video bg-gray-200">
                <Image 
                  src="/images/congregation/community.jpg" 
                  alt="Community at Destiny Church"
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">Contemporary Worship</h3>
                <p className="text-muted-foreground">Powerful, modern worship music</p>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="aspect-video bg-gray-200">
                <Image 
                  src="/images/congregation/teaching.jpg" 
                  alt="Teaching at Destiny Church"
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">Relevant Teaching</h3>
                <p className="text-muted-foreground">Biblical messages for everyday life</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* App Download */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
              Dive deeper. Stay Connected.
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Download our app to stay connected with the Destiny family
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 shadow-lg">
              <Link 
                href={site.app.android}
                target="_blank"
                rel="noreferrer"
              >
                Download App
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
