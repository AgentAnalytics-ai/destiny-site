import type { Metadata } from 'next'
import { Prose } from '@/components/ui/prose'
import { Container } from '@/components/ui/container'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Destiny Church, our mission, values, and leadership.',
  openGraph: {
    title: 'About | Destiny Church',
    description: 'Learn about Destiny Church, our mission, values, and leadership.',
  },
}

export default function AboutPage() {
  return (
    <Container className="py-12">
      <div className="max-w-4xl mx-auto">
        <Prose>
          <h1>About Destiny Church</h1>
          
          <p>
            Welcome to Destiny Church, a place where everyone belongs and everyone matters. 
            We&apos;re passionate about creating an environment where people can encounter God, 
            grow in their faith, and make a difference in their community.
          </p>

          <h2>Our Mission</h2>
          <p>
            We exist to help people find and follow Jesus. This simple mission drives 
            everything we do - from our weekend services to our community outreach programs.
          </p>

          <h2>What to Expect</h2>
          <p>When you visit Destiny Church, you&apos;ll find:</p>
          <ul>
            <li><strong>Welcoming Community</strong>: People who genuinely care about you and your journey</li>
            <li><strong>Contemporary Worship</strong>: Music that connects with your heart and lifts your spirit</li>
            <li><strong>Practical Teaching</strong>: Messages that apply biblical truth to everyday life</li>
            <li><strong>Safe Environment</strong>: A place where your kids can learn and grow</li>
          </ul>

          <h2>Our Values</h2>
          <h3>Belonging</h3>
          <p>Everyone is welcome here, regardless of where you are in your faith journey.</p>

          <h3>Growth</h3>
          <p>We believe in continuous spiritual growth and personal development.</p>

          <h3>Service</h3>
          <p>We&apos;re committed to serving our community and making a positive impact.</p>

          <h3>Generosity</h3>
          <p>We practice and teach biblical generosity in all areas of life.</p>

          <h2>Get Connected</h2>
          <p>
            Ready to take the next step? We&apos;d love to help you get connected through 
            our small groups, serving opportunities, and giving to support our mission.
          </p>
        </Prose>
      </div>
    </Container>
  )
}
