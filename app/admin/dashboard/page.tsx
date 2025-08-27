import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { ExternalLink, Users, Calendar, Users2, Shield } from 'lucide-react'
import { PC_ADMIN } from '@/lib/config/pc-links'

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Planning Center and Church Center quick access',
}

const iconMap = {
  executive: Shield,
  worship: Users,
  dkids: Users2,
  director_camera_audio_presentation: Users,
  workflow_mgmt: Calendar,
  background_checks: Shield,
  youth: Users2,
  community_groups: Users,
  host_teams: Users,
  prayer_teams: Shield,
}

export default function AdminDashboardPage() {
  return (
    <Container className="py-12">
      <div className="space-y-8">
        {/* Header with Logo */}
        <div className="text-center space-y-6">
          <div className="flex justify-center mb-6">
            <img
              src="/images/logo/Logo-Destiny-RGB.png"
              alt="Destiny Christian Center"
              className="h-20 w-auto max-w-xs"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-primary">Admin Dashboard</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick access to Planning Center and Church Center tools
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {PC_ADMIN.quickLinks.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                asChild
                className="h-auto p-4 flex flex-col items-center space-y-2 hover:shadow-md transition-all"
              >
                <Link href={link.href} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5" />
                  <span className="text-sm font-medium">{link.label}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Team Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PC_ADMIN.sections.map((section) => {
              const IconComponent = iconMap[section.id as keyof typeof iconMap] || Users
              
              return (
                <Card key={section.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{section.title}</CardTitle>
                        {section.owner && (
                          <CardDescription className="text-sm font-medium">
                            Owner: {section.owner}
                          </CardDescription>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {section.links.map((link) => (
                      <Button
                        key={link.label}
                        variant="ghost"
                        size="sm"
                        asChild
                        className="w-full justify-start h-auto p-2 hover:bg-primary/5"
                      >
                        <Link href={link.href} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {link.label}
                        </Link>
                      </Button>
                    ))}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </Container>
  )
}
