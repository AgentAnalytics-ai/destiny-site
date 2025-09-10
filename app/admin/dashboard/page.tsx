import type { Metadata } from 'next'
import Link from 'next/link'
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
        {/* Enhanced Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quick access to Planning Center and Church Center tools
          </p>
        </div>

        {/* Enhanced Quick Links */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {PC_ADMIN.quickLinks.map((link, index) => (
              <Button
                key={link.label}
                variant="outline"
                asChild
                className="h-auto p-4 flex flex-col items-center space-y-2 border-2 hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-bright"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <Link href={link.href} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{link.label}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>

        {/* Enhanced Sections */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary">Team Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PC_ADMIN.sections.map((section) => {
              const IconComponent = iconMap[section.id as keyof typeof iconMap] || Users
              
              return (
                <Card key={section.id} className="hover:shadow-bright transition-all duration-300 hover:scale-105 border-2 hover:border-primary/20 bg-gradient-to-br from-white to-primary/5">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <IconComponent className="h-5 w-5 text-primary" />
                      <div>
                        <CardTitle className="text-lg text-primary">{section.title}</CardTitle>
                        {section.owner && (
                          <CardDescription className="text-secondary">Owner: {section.owner}</CardDescription>
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
                        className="w-full justify-start h-auto p-2 hover:bg-primary/10 hover:text-primary transition-colors"
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
