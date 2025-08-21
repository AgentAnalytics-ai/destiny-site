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
      prayerRequest,
      isConfidential,
      contactPreference 
    } = body

    // Validate required fields
    if (!firstName || !lastName || !prayerRequest) {
      return NextResponse.json(
        { success: false, error: 'First name, last name, and prayer request are required' },
        { status: 400 }
      )
    }

    // Create person in PCO (if email provided)
    let personId = null
    if (email) {
      const person = await createPerson({
        first_name: firstName,
        last_name: lastName,
        email,
        phone
      })
      personId = person.id
    }

    // Add to Prayer Request workflow
    const prayerWorkflowId = process.env.PCO_PRAYER_WORKFLOW_ID
    if (prayerWorkflowId && personId) {
      await addPersonToWorkflow(personId, prayerWorkflowId, {
        notes: `Prayer Request: ${prayerRequest}\nConfidential: ${isConfidential}\nContact Preference: ${contactPreference}`
      })
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for your prayer request. Our prayer team will be praying for you.',
      personId
    })
  } catch (error) {
    console.error('Prayer form error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to submit prayer request',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
