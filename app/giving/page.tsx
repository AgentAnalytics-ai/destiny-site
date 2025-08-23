import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { site, FEATURES } from '@/lib/config/site.config'
import { Heart, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Give',
  description: 'Support the mission of Destiny Church through online giving.',
  openGraph: {
    title: 'Give | Destiny Church',
    description: 'Support the mission of Destiny Church through online giving.',
  },
}

export default function GivingPage() {
  return (
    <Container className="py-12">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Give to {site.name}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your generosity enables us to reach more people with the love of Christ.
          </p>
        </div>

        {FEATURES.givingEmbed ? (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                Online Giving
              </CardTitle>
            </CardHeader>
            <CardContent>
              <iframe
                src={`${site.churchCenter.base}${site.churchCenter.giving}`}
                className="w-full h-96 border-0 rounded-lg"
                title="Online Giving"
              />
            </CardContent>
          </Card>
        ) : (
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                Give Online
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild size="lg" className="w-full">
                <Link 
                  href={`${site.churchCenter.base}${site.churchCenter.giving}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Give Now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        )}

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tithes & Offerings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Support our general ministry and operations through regular giving.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Missions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Help us reach people locally and globally with the gospel.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Special Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Give to specific initiatives and building projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  )
}