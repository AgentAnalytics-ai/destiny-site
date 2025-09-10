export const themeConfig = {
  site: {
    name: "Destiny Church",
    url: "https://www.destinyokc.com",
    description: "A place where everyone belongs and everyone matters.",
  },
  logo: {
    primary: "/logo-primary.svg",
    brand: "/logo-brand.svg",
    alt: "Destiny Church",
  },
  colors: {
    primary: "#0066cc",
    secondary: "#64748b", 
    accent: "#f97316",
  },
  typography: {
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
      serif: ["Georgia", "serif"],
    },
  },
  navigation: {
    main: [
      { name: "Home", href: "/" },
      { name: "Plan a Visit", href: "/plan-a-visit" },
      { name: "Events", href: "/events" },
      { name: "Groups", href: "/groups" },
      { name: "Sermons", href: "/sermons" },
      { name: "Giving", href: "/giving" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
    footer: [
      { name: "Plan a Visit", href: "/plan-a-visit" },
      { name: "Events", href: "/events" },
      { name: "Groups", href: "/groups" },
      { name: "Sermons", href: "/sermons" },
      { name: "Giving", href: "/giving" },
      { name: "App", href: "/app" },
      { name: "About", href: "/about" },
      { name: "Beliefs", href: "/beliefs" },
      { name: "Kids", href: "/kids" },
      { name: "Students", href: "/students" },
      { name: "Contact", href: "/contact" },
    ],
  },
  serviceTimes: [
    { day: "Sunday", time: "9:00 AM & 11:00 AM" },
    { day: "Wednesday", time: "7:00 PM" },
  ],
  contact: {
    address: "1234 Main St, Oklahoma City, OK 73101",
    phone: "(405) 555-0123",
    email: "info@destinyokc.com",
  },
  social: {
    facebook: "https://facebook.com/destinyokc",
    instagram: "https://instagram.com/destinyokc",
    youtube: "https://youtube.com/destinyokc",
  },
  external: {
    churchCenter: "https://destinyokc.churchcenter.com",
    youVersion: "https://bible.com/events/123456",
    soundCloud: "https://soundcloud.com/destinyokc",
  }
}



