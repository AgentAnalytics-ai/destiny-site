"use client"

export default function GivingPage() {
  return (
    <div className="min-h-screen">
      {/* Your custom header/branding */}
      <section className="py-8 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl font-bold text-primary mb-4">Give Online</h1>
          <p className="text-xl text-gray-600">Support our mission through secure giving</p>
        </div>
      </section>
      
      {/* Direct Church Center embed */}
      <iframe 
        src="https://destinyokc.churchcenter.com/giving"
        className="w-full h-screen border-0"
        title="Online Giving"
      />
    </div>
  )
}
