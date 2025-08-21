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
      areasOfInterest,
      experience,
      availability,
      additionalInfo 
    } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !areasOfInterest) {
      return NextResponse.json(
        { success: false, error: 'First name, last name, email, and areas of interest are required' },
        { status: 400 }
      )
    }

    // Create person in PCO
    const person = await createPerson({
      first_name: firstName,
      last_name: lastName,
      email,
      phone
    })

    // Add to Serve/Volunteer workflow
    const serveWorkflowId = process.env.PCO_SERVE_WORKFLOW_ID
    if (serveWorkflowId) {
      await addPersonToWorkflow(person.id, serveWorkflowId, {
        notes: `Areas of Interest: ${areasOfInterest.join(', ')}\nExperience: ${experience}\nAvailability: ${availability}\nAdditional Info: ${additionalInfo}`
      })
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for your interest in serving! Our team will contact you soon.',
      personId: person.id
    })
  } catch (error) {
    console.error('Serve form error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to submit serve form',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
