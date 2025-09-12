import { CC } from "@/app/config/churchCenter"
import IframeShell from "@/components/IframeShell"
import { notFound, redirect } from "next/navigation"

const descriptions = {
  give: "Support our mission and ministries through online giving",
  events: "Join us for upcoming events and activities", 
  groups: "Find community and connection in our small groups",
  checkin: "Check in your kids for a safe and fun experience",
  prayer: "Share your prayer requests with our community"
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const key = slug as keyof typeof CC.paths
  const path = CC.paths[key]
  
  if (!path) return notFound()

  const url = `${CC.base}${path}`
  const mode = CC.mode[key]

  if (mode === "redirect") {
    redirect(url)
  }

  return (
    <IframeShell 
      title={key} 
      src={url}
      description={descriptions[key as keyof typeof descriptions]}
    />
  )
}
