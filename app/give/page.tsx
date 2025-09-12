import { CC } from "@/app/config/churchCenter"
import IframeShell from "@/components/IframeShell"

export default function GivePage() {
  const url = `${CC.base}${CC.paths.give}`
  
  return (
    <IframeShell 
      title="Give" 
      src={url}
      description="Support our mission and ministries through online giving"
    />
  )
}
