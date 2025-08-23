import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { site } from '@/lib/config/site.config'
import { Users, MapPin, Calendar, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Groups',
  description: 'Find community and connection in our small groups.',
}

const groups = [
  {
    name: 'Young Adults',
    description: 'Connect with other young adults in your faith journey',
    day: 'Tuesday',
    time: '7:00 PM',
    location: 'Room 201',
    churchCenterUrl: `${site.churchCenter.base}${site.churchCenter.groups}`,
  },
  {
    name: 'Women&#39;s Bible Study',
    description: 'Deep dive into God&#39;s Word with other women',
    day: 'Wednesday',
    time: '6:30 PM',
    location: 'Fellowship Hall',
    churchCenterUrl: `${site.churchCenter.base}${site.churchCenter.groups}`,
  },
  {
    name: 'Men&#39;s Group',
    description: 'Build authentic relationships and grow spiritually',
    day: 'Thursday',
    time: '7:00 PM',
    location: 'Room 105',
    churchCenterUrl: `${site.churchCenter.base}${site.churchCenter.groups}`,
  },
]

export default function GroupsPage() {
  return (
    <Container className="py-12">
      <div className="text-center space-y-8 mb-16">
        <h1 className="text-4xl font-bold">Small Groups</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Find community and connection in our small groups. There&#39;s a place for everyone!
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {groups.map((group, index) => (
          <Card key={index} className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                {group.name}
              </CardTitle>
              <CardDescription>{group.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {group.day} at {group.time}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {group.location}
                </div>
              </div>
              <Link href={group.churchCenterUrl} target="_blank" rel="noopener noreferrer">
                <Button className="w-full group">
                  Join Group
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href={`${site.churchCenter.base}${site.churchCenter.groups}`} target="_blank" rel="noopener noreferrer">
          <Button size="lg" variant="outline">
            Find More Groups
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </Container>
  )
}
