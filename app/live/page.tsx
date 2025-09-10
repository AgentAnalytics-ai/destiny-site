import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { Play, Users, MessageCircle, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Live Stream | Destiny Christian Center',
  description: 'Join us live every Sunday at 10:30 AM',
}

export default function LivePage() {
  // This would be dynamic based on whether they're actually live
  const isLive = false; // You can make this dynamic later
  
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Live Stream
            </h1>
            <p className="text-xl lg:text-2xl text-white/90">
              Join us live every Sunday at 10:30 AM
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-gray-100 p-6 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    {isLive ? (
                      <>
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="font-semibold text-primary">Live Now - Sunday Service</span>
                      </>
                    ) : (
                      <>
                        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                        <span className="font-semibold text-gray-600">Next Service: Sunday 10:30 AM</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="aspect-video bg-gray-200">
                  {isLive ? (
                    <iframe
                      src="https://www.youtube.com/embed/live_stream?channel=UC_DESTINY_CHANNEL_ID&autoplay=1&mute=0"
                      title="Destiny Church Live Stream"
                      className="w-full h-full"
                      allowFullScreen
                      allow="autoplay; encrypted-media"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
                      <div className="text-center p-8">
                        <Play className="h-16 w-16 text-primary/60 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-primary mb-4">Service Starts Soon!</h3>
                        <p className="text-gray-600 mb-6 max-w-md">
                          Join us live every Sunday at 10:30 AM for worship, teaching, and community.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <a 
                            href="https://www.youtube.com/@DestinyChristianOKC"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                          >
                            <Play className="h-4 w-4 mr-2" />
                            Visit Our YouTube Channel
                            <ExternalLink className="h-4 w-4 ml-2" />
                          </a>
                          <a 
                            href="/visit"
                            className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors"
                          >
                            Plan Your Visit
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Rest of the existing chat and service info code remains the same */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gray-100 p-6 border-b border-gray-200">
                  <h3 className="font-semibold text-primary flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Live Chat
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4 h-96 overflow-y-auto">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                        J
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold">John D.</p>
                        <p className="text-sm text-muted-foreground">Great message today!</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-sm font-bold">
                        S
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold">Sarah M.</p>
                        <p className="text-sm text-muted-foreground">Praying for everyone watching!</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Type a message..." 
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
                      Send
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">
                <h3 className="font-semibold text-primary mb-4">Service Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Viewers</p>
                      <p className="text-sm text-muted-foreground">{isLive ? "1,247 watching" : "Join us Sunday!"}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Play className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Audio Quality</p>
                      <p className="text-sm text-muted-foreground">HD Audio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
