export const site = {
  name: "Destiny Church",
  campus: { city: "Oklahoma City", state: "OK" },
  serviceTimes: ["Sun 9:00a", "Sun 11:00a"],
  contactEmail: "info@destinychurch.org",
  address: "1234 Main St, Oklahoma City, OK 73101",
  phone: "(405) 555-0123",
  churchCenter: {
    base: "https://destinyokc.churchcenter.com",
    giving: "/giving",
    events: "/registrations",
    groups: "/groups",
    planAVisitForm: "/people/forms/00000",
    prayerForm: "/people/forms/00001",
  },
  socials: { 
    youtube: "https://youtube.com/destinyokc", 
    instagram: "https://instagram.com/destinyokc", 
    facebook: "https://facebook.com/destinyokc" 
  },
  external: {
    youVersion: "https://bible.com/events/123456",
    soundCloud: "https://soundcloud.com/destinyokc",
  },
  seo: {
    titleTemplate: "%s | Destiny Church",
    description: "A place where everyone belongs and everyone matters. Join us for worship, community, and spiritual growth in Oklahoma City.",
    ogImage: "/og-image.png",
    twitterHandle: "@destinyokc",
  }
} as const

export const FEATURES = {
  givingEmbed: false,
  eventsFromICS: false, // future
  featuredEventsFromAPI: false, // future
} as const

export type SiteConfig = typeof site
