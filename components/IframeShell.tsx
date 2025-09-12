import { Container } from '@/components/ui/container'

interface IframeShellProps {
  title: string
  src: string
  description?: string
}

export default function IframeShell({ title, src, description }: IframeShellProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4 capitalize">
              {title}
            </h1>
            {description && (
              <p className="text-xl text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        </Container>
      </section>

      {/* Embedded Content */}
      <section className="py-8 bg-white">
        <Container>
          <div className="rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <iframe 
              className="w-full min-h-[80vh]" 
              src={src} 
              loading="lazy"
              title={`Destiny Church ${title}`}
              allowFullScreen
            />
          </div>
        </Container>
      </section>
    </>
  )
}
