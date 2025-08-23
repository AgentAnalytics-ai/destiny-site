import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { site } from '@/lib/config/site.config'
import { MapPin, Clock, Mail, Phone } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/50">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{site.name}</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{site.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{site.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{site.contactEmail}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Service Times</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              {site.serviceTimes.map((time, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link 
                href={`${site.churchCenter.base}${site.churchCenter.giving}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Give
              </Link>
              <Link 
                href={`${site.churchCenter.base}${site.churchCenter.events}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Events
              </Link>
              <Link 
                href={`${site.churchCenter.base}${site.churchCenter.groups}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Groups
              </Link>
              <Link 
                href="/about"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Plan a Visit</h3>
            <p className="text-sm text-muted-foreground">
              We&apos;d love to meet you! Plan your visit and let us know you&apos;re coming.
            </p>
            <Link 
              href={`${site.churchCenter.base}${site.churchCenter.planAVisitForm}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Plan a Visit →
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {site.socials.youtube && (
                <Link 
                  href={site.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  YouTube
                </Link>
              )}
              {site.socials.instagram && (
                <Link 
                  href={site.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Instagram
                </Link>
              )}
              {site.socials.facebook && (
                <Link 
                  href={site.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Facebook
                </Link>
              )}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}