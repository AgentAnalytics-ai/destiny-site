"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin } from 'lucide-react'

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Upcoming Events</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Sunday Service</CardTitle>
            <CardDescription>Join us for worship every Sunday</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="w-4 h-4" />
              <span>Every Sunday</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="w-4 h-4" />
              <span>10:00 AM</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span>Main Auditorium</span>
            </div>
            <Button className="w-full">Plan to Attend</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Bible Study</CardTitle>
            <CardDescription>Midweek Bible study and prayer</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="w-4 h-4" />
              <span>Every Wednesday</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="w-4 h-4" />
              <span>7:00 PM</span>
            </div>
            <Button className="w-full">Join Us</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Youth Group</CardTitle>
            <CardDescription>Fun activities for teens</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="w-4 h-4" />
              <span>Every Friday</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="w-4 h-4" />
              <span>6:30 PM</span>
            </div>
            <Button className="w-full">Learn More</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
