import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { themeConfig } from '@/theme.config'
import { Heart, CreditCard, Smartphone, Globe } from 'lucide-react'

export default function GivingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Give to Destiny Church</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your generosity helps us fulfill our mission and serve our community. Thank you for your support!
        </p>
      </div>

      {/* Church Center Giving Widget */}
      <div className="max-w-4xl mx-auto mb-12">
        <Card>
          <CardHeader className="text-center">
            <Heart className="w-12 h-12 mx-auto text-destiny-primary mb-4" />
            <CardTitle className="text-2xl">Give Online</CardTitle>
            <CardDescription>
              Make a secure donation using our Church Center giving platform
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-destiny-primary hover:bg-destiny-primary/90"
            >
              <a 
                href={themeConfig.external.churchCenter} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Give Now
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Giving Options */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card className="text-center">
          <CardHeader>
            <CreditCard className="w-12 h-12 mx-auto text-destiny-primary mb-4" />
            <CardTitle>Online Giving</CardTitle>
            <CardDescription>
              Set up recurring donations or make one-time gifts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <a href={themeConfig.external.churchCenter} target="_blank" rel="noopener noreferrer">
                Give Online
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Smartphone className="w-12 h-12 mx-auto text-destiny-primary mb-4" />
            <CardTitle>Mobile App</CardTitle>
            <CardDescription>
              Give through our Church Center mobile app
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <a href="/app">Get Our App</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Globe className="w-12 h-12 mx-auto text-destiny-primary mb-4" />
            <CardTitle>Text to Give</CardTitle>
            <CardDescription>
              Text "GIVE" to our giving number
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <a href="sms:+1234567890&body=GIVE" target="_blank" rel="noopener noreferrer">
                Text to Give
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Giving Information */}
      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Why Give?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Supporting Our Mission</h3>
            <p className="text-gray-600 mb-4">
              Your gifts help us share the love of Christ through worship, community, and service to our city.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Sunday services and worship</li>
              <li>• Children's and student ministries</li>
              <li>• Community outreach programs</li>
              <li>• Facility maintenance and operations</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Financial Stewardship</h3>
            <p className="text-gray-600 mb-4">
              We are committed to transparency and wise stewardship of all resources entrusted to us.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Annual financial reports available</li>
              <li>• Budget oversight by church leadership</li>
              <li>• Regular giving statements</li>
              <li>• Secure online transactions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
