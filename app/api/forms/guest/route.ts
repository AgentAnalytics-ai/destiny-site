import { NextRequest, NextResponse } from 'next/server'
import { createPerson, addPersonToWorkflow } from '@/lib/pco'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      address, 
      city, 
      state, 
      zip,
      children,
      visitDate,
      howDidYouHear,
      additionalInfo 
    } = body

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { success: false, error: 'First name, last name, and email are required' },
        { status: 400 }
      )
    }

    // Create person in PCO
    const person = await createPerson({
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      address,
      city,
      state,
      zip
    })

    // Add to Guest Follow-up workflow (you'll need to get the actual workflow ID)
    const guestWorkflowId = process.env.PCO_GUEST_WORKFLOW_ID
    if (guestWorkflowId) {
      await addPersonToWorkflow(person.id, guestWorkflowId, {
        notes: `Visit Date: ${visitDate}\nChildren: ${children}\nHow did you hear: ${howDidYouHear}\nAdditional Info: ${additionalInfo}`
      })
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for planning your visit! We\'ll be in touch soon.',
      personId: person.id
    })
  } catch (error) {
    console.error('Guest form error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to submit guest form',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
