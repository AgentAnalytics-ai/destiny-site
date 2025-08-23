import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  VERCEL_URL: z.string().optional(),
  VERCEL_ANALYTICS_ID: z.string().optional(),
  PCO_APPLICATION_ID: z.string().optional(),
  PCO_SECRET: z.string().optional(),
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
  FEATURES: {
    eventsFromICS: process.env.FEATURES_EVENTS_FROM_ICS === 'true',
    pcoApiEnabled: process.env.FEATURES_PCO_API_ENABLED === 'true',
  },
})

