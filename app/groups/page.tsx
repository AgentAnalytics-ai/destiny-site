import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Clock, MapPin, Mail, Phone } from 'lucide-react'
import { getGroups } from '@/lib/pco'

export default async function GroupsPage() {
  let groups = []
  let error = null

  try {
    const groupsData = await getGroups(50, 0)
    groups = groupsData || []
  } catch (err) {
    console.error('Failed to fetch groups:', err)
    error = 'Failed to load groups'
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Find Your Community</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Connect with others in our church through these small groups and ministries.
        </p>
      </div>

      {error ? (
        <div className="text-center py-12">
          <p className="text-red-600 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      ) : groups.length === 0 ? (
        <div className="text-center py-12">
          <Users className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">No groups available</h3>
          <p className="text-gray-600">Check back soon for new groups!</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <Card key={group.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{group.attributes.name}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {group.attributes.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {group.attributes.day_of_week && group.attributes.time && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{group.attributes.day_of_week}s at {group.attributes.time}</span>
                  </div>
                )}
                {group.attributes.location && (
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{group.attributes.location}</span>
                  </div>
                )}
                {group.attributes.max_participants && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span>
                      {group.attributes.current_participants || 0} / {group.attributes.max_participants} members
                    </span>
                  </div>
                )}
                <div className="pt-2 space-y-2">
                  {group.attributes.contact_email && (
                    <Button variant="outline" size="sm" className="w-full">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Leader
                    </Button>
                  )}
                  {group.attributes.contact_phone && (
                    <Button variant="outline" size="sm" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Leader
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
