import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { site } from '@/lib/config/site.config'
import { Calendar, Users, Heart, MapPin, ExternalLink, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Home',
  description: site.seo?.description,
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        
        <Container className="relative py-20 lg:py-32">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {site.name}
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A place where everyone belongs and everyone matters. 
                Come as you are, leave transformed.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`${site.churchCenter.base}${site.churchCenter.planAVisitForm}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group relative overflow-hidden px-8">
                  <span className="relative z-10">Plan Your Visit</span>
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="border-2 hover:bg-slate-50 px-8">
                  Our Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center space-y-4 p-8 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Join Us</h3>
              <p className="text-muted-foreground">
                {site.serviceTimes.join(', ')}
              </p>
            </div>
            
            <div className="group text-center space-y-4 p-8 rounded-2xl hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Get Connected</h3>
              <p className="text-muted-foreground">
                Find community in our small groups
              </p>
            </div>
            
            <div className="group text-center space-y-4 p-8 rounded-2xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Give</h3>
              <p className="text-muted-foreground">
                Support our mission and ministries
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-slate-50">
        <Container>
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <MapPin className="w-12 h-12 text-primary mx-auto" />
              <h2 className="text-3xl font-bold">Find Us</h2>
              <p className="text-xl text-muted-foreground">{site.address}</p>
            </div>
            <Link href={`https://maps.google.com/?q=${encodeURIComponent(site.address)}`} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="group">
                Get Directions
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}
