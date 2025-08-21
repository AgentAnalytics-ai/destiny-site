export interface PCOGroup {
  id: string
  type: string
  attributes: {
    name: string
    description?: string
    location?: string
    day_of_week?: string
    time?: string
    contact_name?: string
    contact_email?: string
    contact_phone?: string
    max_participants?: number
    current_participants?: number
    is_public: boolean
    created_at: string
    updated_at: string
  }
  relationships?: {
    organization?: {
      data: { id: string; type: string }
    }
  }
}

export interface PCOEvent {
  id: string
  type: string
  attributes: {
    name: string
    description?: string
    starts_at: string
    ends_at: string
    location?: string
    registration_ends_at?: string
    max_registrations?: number
    current_registrations?: number
    is_public: boolean
    created_at: string
    updated_at: string
  }
  relationships?: {
    organization?: {
      data: { id: string; type: string }
    }
  }
}

export interface PCOService {
  id: string
  type: string
  attributes: {
    name: string
    starts_at: string
    ends_at: string
    created_at: string
    updated_at: string
  }
  relationships?: {
    organization?: {
      data: { id: string; type: string }
    }
  }
}

export interface PCOPerson {
  id: string
  type: string
  attributes: {
    first_name: string
    last_name: string
    email?: string
    phone?: string
    address?: string
    city?: string
    state?: string
    zip?: string
    created_at: string
    updated_at: string
  }
}

export interface PCOWorkflow {
  id: string
  type: string
  attributes: {
    name: string
    description?: string
    created_at: string
    updated_at: string
  }
}

// Core PCO fetch function with caching and error handling
export async function pcoFetch(path: string, options?: RequestInit) {
  const appId = process.env.PCO_APP_ID
  const secret = process.env.PCO_SECRET

  if (!appId || !secret) {
    throw new Error('PCO credentials not configured')
  }

  const auth = Buffer.from(`${appId}:${secret}`).toString('base64')
  
  try {
    const res = await fetch(`https://api.planningcenteronline.com${path}`, {
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      next: { revalidate: 300 }, // 5 minutes cache
      ...options,
    })

    if (!res.ok) {
      const errorText = await res.text()
      console.error(`PCO API Error (${res.status}): ${errorText}`)
      throw new Error(`PCO fetch failed: ${res.status} - ${errorText}`)
    }

    return res.json()
  } catch (error) {
    console.error('PCO fetch error:', error)
    throw error
  }
}

// Helper functions for common PCO operations
export async function getGroups(limit = 50, offset = 0) {
  const response = await pcoFetch(`/groups/v2/groups?where[is_public]=true&per_page=${limit}&offset=${offset}`)
  return response.data as PCOGroup[]
}

export async function getEvents(limit = 50, offset = 0) {
  const now = new Date().toISOString()
  const response = await pcoFetch(
    `/registrations/v2/events?where[starts_at][gte]=${now}&where[is_public]=true&per_page=${limit}&offset=${offset}&order=starts_at`
  )
  return response.data as PCOEvent[]
}

export async function getWeekendServices() {
  const now = new Date()
  const startOfWeek = new Date(now)
  startOfWeek.setDate(now.getDate() - now.getDay()) // Start of current week (Sunday)
  
  const endOfWeek = new Date(startOfWeek)
  endOfWeek.setDate(startOfWeek.getDate() + 6) // End of week (Saturday)
  
  const response = await pcoFetch(
    `/services/v2/service_types/1/plans?where[sort_date][gte]=${startOfWeek.toISOString()}&where[sort_date][lte]=${endOfWeek.toISOString()}&include=plan_times`
  )
  return response.data as PCOService[]
}

export async function createPerson(personData: Partial<PCOPerson['attributes']>) {
  const response = await pcoFetch('/people/v2/people', {
    method: 'POST',
    body: JSON.stringify({
      data: {
        type: 'Person',
        attributes: personData
      }
    })
  })
  return response.data as PCOPerson
}

export async function addPersonToWorkflow(personId: string, workflowId: string, workflowData?: any) {
  const response = await pcoFetch(`/people/v2/people/${personId}/workflows/${workflowId}/workflow_steps`, {
    method: 'POST',
    body: JSON.stringify({
      data: {
        type: 'WorkflowStep',
        attributes: workflowData || {}
      }
    })
  })
  return response.data
}

// Webhook verification helper
export function verifyWebhookSignature(payload: string, signature: string, secret: string): boolean {
  const crypto = require('crypto')
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex')
  
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  )
}
