import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  VERCEL_URL: z.string().optional(),
  VERCEL_ANALYTICS_ID: z.string().optional(),
  PCO_APPLICATION_ID: z.string().optional(),
  PCO_SECRET: z.string().optional(),
  
  // Church Center
  CHURCH_CENTER_URL: z.string().url(),
  
  // Email (Resend) for contact form
  RESEND_API_KEY: z.string().optional(),
  CONTACT_TO: z.string().email().optional(),
  CONTACT_FROM: z.string().min(1).optional(),
  
  // Optional public base for sitemap/robots
  NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
  
  FEATURES: z.object({
    eventsFromICS: z.boolean().default(false),
    pcoApiEnabled: z.boolean().default(false),
  }).default({
    eventsFromICS: false,
    pcoApiEnabled: false,
  }),
})

export const env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  VERCEL_URL: process.env.VERCEL_URL,
  VERCEL_ANALYTICS_ID: process.env.VERCEL_ANALYTICS_ID,
  PCO_APPLICATION_ID: process.env.PCO_APPLICATION_ID,
  PCO_SECRET: process.env.PCO_SECRET,
  
  // Church Center
  CHURCH_CENTER_URL: process.env.CHURCH_CENTER_URL,
  
  // Email
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  CONTACT_TO: process.env.CONTACT_TO,
  CONTACT_FROM: process.env.CONTACT_FROM,
  
  // Public URL
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  
  FEATURES: {
    eventsFromICS: process.env.FEATURES_EVENTS_FROM_ICS === 'true',
    pcoApiEnabled: process.env.FEATURES_PCO_API_ENABLED === 'true',
  },
})

