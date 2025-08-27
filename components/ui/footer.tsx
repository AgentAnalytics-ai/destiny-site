import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { site } from '@/lib/config/site.config'
import { MapPin, Phone, Mail, Calendar } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-primary text-white">
      <Container>
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Church Info */}
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">{site.name}</h3>
              <p className="text-white/80 mb-4">
                A church in OKC where everyone belongs and everyone matters.
              </p>
              <div className="space-y-2 text-sm text-white/80">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{site.contact.addressLine1}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>{site.contact.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>{site.contact.email}</span>
                </div>
              </div>
            </div>

            {/* Service Times */}
            <div>
              <h4 className="font-semibold mb-4">Service Times</h4>
              <div className="space-y-2 text-sm text-white/80">
                {site.serviceTimes.map((service) => (
                  <div key={service.label} className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <div>
                      <div className="font-medium">{service.label}</div>
                      <div>{service.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/giving" className="text-white/80 hover:text-white transition-colors">
                    Give Online
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-white/80 hover:text-white transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/groups" className="text-white/80 hover:text-white transition-colors">
                    Groups
                  </Link>
                </li>
                <li>
                  <Link href="/visit" className="text-white/80 hover:text-white transition-colors">
                    Plan a Visit
                  </Link>
                </li>
                <li>
                  <Link href="/watch" className="text-white/80 hover:text-white transition-colors">
                    Watch Live
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2 text-sm">
                <Link href="/about" className="block text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="/about/contact" className="block text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
                <a 
                  href={site.links.sermons} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Sermons
                </a>
                <a 
                  href={site.app.android} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Get the App
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}