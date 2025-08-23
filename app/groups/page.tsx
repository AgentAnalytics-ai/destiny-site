"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Users, Clock, MapPin, ExternalLink } from 'lucide-react'
import { site } from '@/lib/config/site.config'

// Sample groups data - in real implementation, this could come from Church Center API
const groups = [
  {
    id: 'young-adults',
    title: 'Young Adults',
    description: 'Ages 18-30',
    day: 'Tuesday',
    time: '7:00 PM',
    location: 'Room 201',
    churchCenterUrl: `${site.churchCenter.base}/groups/young-adults`,
  },
  {
    id: 'womens-bible-study',
    title: "Women's Bible Study",
    description: 'All ages welcome',
    day: 'Thursday',
    time: '10:00 AM',
    location: 'Fellowship Hall',
    churchCenterUrl: `${site.churchCenter.base}/groups/womens-bible-study`,
  },
  {
    id: 'mens-group',
    title: "Men's Group",
    description: 'Brotherhood and accountability',
    day: 'Saturday',
    time: '8:00 AM',
    location: 'Conference Room',
    churchCenterUrl: `${site.churchCenter.base}/groups/mens-group`,
  },
]

export default function GroupsPage() {
  return (
    <Container className="py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Small Groups</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Connect with others and grow in your faith through our small groups. 
          Find a group that fits your schedule and interests.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <Card key={group.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                {group.title}
              </CardTitle>
              <CardDescription>{group.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{group.day} {group.time}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{group.location}</span>
              </div>
              <Button 
                className="w-full" 
                onClick={() => window.open(group.churchCenterUrl, '_blank')}
              >
                Join Group
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  )
}
