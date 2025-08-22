"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Clock, MapPin } from 'lucide-react'

export default function GroupsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Small Groups</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Young Adults</CardTitle>
            <CardDescription>Ages 18-30</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="w-4 h-4" />
              <span>Tuesday 7:00 PM</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span>Room 201</span>
            </div>
            <Button className="w-full">Join Group</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Women's Bible Study</CardTitle>
            <CardDescription>All ages welcome</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="w-4 h-4" />
              <span>Thursday 10:00 AM</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span>Fellowship Hall</span>
            </div>
            <Button className="w-full">Join Group</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Men's Group</CardTitle>
            <CardDescription>Brotherhood and accountability</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="w-4 h-4" />
              <span>Saturday 8:00 AM</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span>Conference Room</span>
            </div>
            <Button className="w-full">Join Group</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
