import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Heart, Target, MapPin, Clock, Phone, Mail } from 'lucide-react'
import { themeConfig } from '@/theme.config'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Destiny Church</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're a community of people who believe that everyone matters to God and everyone belongs here.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="text-center">
          <CardHeader>
            <Heart className="w-12 h-12 mx-auto text-destiny-primary mb-4" />
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              To share the love of Christ and help people discover their purpose in God's plan.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Target className="w-12 h-12 mx-auto text-destiny-primary mb-4" />
            <CardTitle>Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              To be a church where everyone belongs and everyone matters, making a difference in our community.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Users className="w-12 h-12 mx-auto text-destiny-primary mb-4" />
            <CardTitle>Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Love, Community, Service, Growth, and Authenticity in everything we do.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Our Story */}
      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
          <p>
            Destiny Church began with a simple vision: to create a place where everyone belongs and everyone matters. 
            What started as a small group of people meeting in a living room has grown into a vibrant community 
            of believers passionate about sharing God's love.
          </p>
          <p>
            Over the years, we've seen countless lives transformed through the power of God's grace. 
            From families finding hope to individuals discovering their purpose, we've been blessed to 
            witness the incredible work God is doing in our community.
          </p>
          <p>
            Today, we continue to grow and serve, always remembering that our mission is not about us—it's about 
            pointing people to Jesus and helping them experience the abundant life He offers.
          </p>
        </div>
      </div>

      {/* Leadership */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Leadership</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardHeader>
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <CardTitle>Pastor John Smith</CardTitle>
              <CardDescription>Lead Pastor</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Pastor John has been leading Destiny Church for over 10 years, 
                bringing passion and vision to our community.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <CardTitle>Sarah Johnson</CardTitle>
              <CardDescription>Worship Pastor</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Sarah leads our worship ministry, creating an atmosphere where 
                people can encounter God through music and praise.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <CardTitle>Mike Davis</CardTitle>
              <CardDescription>Youth Pastor</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Mike oversees our student ministry, helping young people grow 
                in their faith and discover their purpose.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-destiny-primary text-white rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Visit Us</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 mb-2" />
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-sm">{themeConfig.contact.address}</p>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="w-8 h-8 mb-2" />
            <h3 className="font-semibold mb-2">Service Times</h3>
            <div className="text-sm space-y-1">
              {themeConfig.serviceTimes.map((service, index) => (
                <p key={index}>{service.day}: {service.time}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 mb-2" />
            <h3 className="font-semibold mb-2">Contact</h3>
            <p className="text-sm">{themeConfig.contact.phone}</p>
            <p className="text-sm">{themeConfig.contact.email}</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-destiny-primary">
            <a href="/plan-a-visit">Plan Your Visit</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
