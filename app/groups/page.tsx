import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { ExternalLink } from 'lucide-react'
import { cc } from '@/lib/services/churchCenter'

export const metadata: Metadata = {
  title: 'Groups',
  description: 'Find community and connection in our small groups.',
}

export default function GroupsPage() {
  return (
    <Container className="py-12">
      <div className="text-center space-y-8 mb-16">
        <h1 className="text-4xl font-bold">Small Groups</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Find community and connection in our small groups. There&apos;s a place for everyone!
        </p>
      </div>

      <div className="text-center">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <Link href={cc.groups()} target="_blank" rel="noopener noreferrer">
            Browse Groups on Church Center
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Container>
  )
}
