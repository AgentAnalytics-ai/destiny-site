import type { Metadata } from 'next'
import { site } from '@/lib/config/site.config'

export const metadata: Metadata = {
  title: 'Messages',
  description: site.seo.description,
}

export default function MessagesPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Messages
            </h1>
            <p className="text-xl lg:text-2xl text-white/90">
              Watch or listen to our latest sermons and messages
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Message */}
            <Card className="lg:col-span-2">
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-200 rounded-t-lg">
                  <iframe
                    src="https://www.youtube.com/embed/VIDEO_ID"
                    title="Featured Message"
                    className="w-full h-full rounded-t-lg"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <CardTitle className="text-xl font-bold text-primary mb-2">
                    Stir Up Your Faith
                  </CardTitle>
                  <p className="text-muted-foreground mb-4">
                    Join us as we explore how to reignite our passion for God and live out our faith with boldness and purpose.
                  </p>
                  <Button asChild>
                    <Link href="https://www.destinyokc.com/sermons">
                      View All Sermons
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Messages */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Recent Messages</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i}>
                    <CardContent className="p-4">
                      <div className="aspect-video bg-gray-200 rounded mb-3">
                        <iframe
                          src={`https://www.youtube.com/embed/VIDEO_ID_${i}`}
                          title={`Message ${i}`}
                          className="w-full h-full rounded"
                          allowFullScreen
                        />
                      </div>
                      <CardTitle className="text-sm font-semibold text-primary">
                        Message Title {i}
                      </CardTitle>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
