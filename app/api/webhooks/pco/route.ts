import { NextRequest, NextResponse } from 'next/server'
import { verifyWebhookSignature } from '@/lib/pco'
import { revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('x-pco-signature')
    const webhookSecret = process.env.PCO_WEBHOOK_SECRET

    if (!signature || !webhookSecret) {
      return NextResponse.json(
        { success: false, error: 'Missing signature or webhook secret' },
        { status: 401 }
      )
    }

    // Verify webhook signature
    if (!verifyWebhookSignature(body, signature, webhookSecret)) {
      return NextResponse.json(
        { success: false, error: 'Invalid signature' },
        { status: 401 }
      )
    }

    const payload = JSON.parse(body)
    const { event_type, resource_type, resource_id } = payload

    console.log(`PCO Webhook: ${event_type} on ${resource_type} ${resource_id}`)

    // Revalidate relevant pages based on the webhook
    switch (resource_type) {
      case 'Group':
        revalidatePath('/groups')
        revalidatePath('/api/planning-center/groups')
        break
      case 'Event':
        revalidatePath('/events')
        revalidatePath('/api/planning-center/events')
        break
      case 'Plan':
        revalidatePath('/sermons')
        revalidatePath('/api/planning-center/services/weekend')
        break
      default:
        // Revalidate all dynamic pages
        revalidatePath('/groups')
        revalidatePath('/events')
        revalidatePath('/sermons')
    }

    return NextResponse.json({ success: true, message: 'Webhook processed successfully' })
  } catch (error) {
    console.error('PCO webhook error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process webhook',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
