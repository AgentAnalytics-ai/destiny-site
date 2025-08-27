export const site = {
  name: "Destiny Christian Center",
  shortName: "DESTINY",
  campus: { city: "Oklahoma City", state: "OK" },

  contact: {
    phone: "405-677-1451",
    email: "info@destinyokc.com",
    addressLine1: "3801 SE 29th St.",
    addressLine2: "Oklahoma City, OK 73115",
  },

  serviceTimes: [
    { label: "Sunday", time: "10:30 AM" },
    { label: "Wednesday", time: "7:00 PM (Youth, Kids & Groups)" },
  ],

  // Public web properties
  website: "https://www.destinyokc.com",
  liveStreamUrl: "https://destinyokc.online.church",
  app: {
    android: "https://play.google.com/store/apps/details?id=com.echurchapps.destinychristia",
    ios: "", // add if they provide an App Store link
  },

  // Church Center placeholder (swap when you flip to PCO/Church Center)
  churchCenter: {
    base: "", // e.g. "https://<subdomain>.churchcenter.com"
    giving: "", // e.g. "/giving"
    events: "", // e.g. "/registrations"
    groups: "", // e.g. "/groups"
    planAVisitForm: "", // e.g. "/people/forms/00000"
    prayerForm: "", // e.g. "/people/forms/00001"
  },

  // For now, mirror their current donate page (PushPay) and Event page
  links: {
    donate: "https://www.destinyokc.com/donate",
    events: "https://www.destinyokc.com/events",
    sermons: "https://www.destinyokc.com/sermons",
    podcast: "https://www.destinyokc.com/podcast",
    blog: "https://www.destinyokc.com/blog",
    team: "https://www.destinyokc.com/team",
    planVisit: "https://www.destinyokc.com/plan",
    timesLocation: "https://www.destinyokc.com/times-location",
  },

  nav: {
    main: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/groups", label: "Groups" },
      { href: "/messages", label: "Messages" },
      { href: "/live", label: "Live" },
      { href: "/events", label: "Events" },
      { href: "/resource", label: "Resource" },
    ],
    // Optional mega menus, mapped to internal pages you will create:
    about: [
      { href: "/about/sunday-morning", label: "Sunday Morning" },
      { href: "/about/times-location", label: "Times + Location" },
      { href: "/about/beliefs", label: "What We Believe" },
      { href: "/about/connect-card", label: "Connect Card" },
      { href: "/about/next-step", label: "Next Step" },
      { href: "/about/ministries", label: "Ministries" },
      { href: "/about/core-values", label: "Core Values" },
      { href: "/about/team", label: "Destiny Team" },
      { href: "/about/contact", label: "Contact" },
    ],
    messages: [
      { href: "/messages/sermons", label: "Sermons" },
      { href: "/messages/podcast", label: "Podcast" },
      { href: "/messages/blog", label: "Blog" },
      { href: "/messages/app", label: "App" },
      { href: "/messages/live-notes", label: "Live Notes" },
    ],
    resource: [
      { href: "/resource/baptism", label: "Baptism" },
      { href: "/resource/communion", label: "Communion" },
      { href: "/resource/financial", label: "Financial" },
      { href: "/resource/holy-spirit", label: "The Holy Spirit" },
    ],
  },

  seo: {
    titleTemplate: "%s | Destiny Christian Center",
    description:
      "A church in OKC — Sundays 10:30am. You belong here. Plan your visit and get connected.",
    ogImage: "/og.png",
  },
} as const;

export const FEATURES = {
  givingEmbed: false,           // V1: link out to donate page; swap later to Church Center
  eventsFromICS: false,         // V2 optional
  featuredEventsFromAPI: false, // V2 optional (PCO reads)
} as const;

export type SiteConfig = typeof site
