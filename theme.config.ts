export const themeConfig = {
  site: {
    name: "Destiny Church",
    url: "https://www.destinyokc.com",
    description: "A place where everyone belongs and everyone matters.",
  },
  logo: {
    primary: "/logo-primary.svg",
    brand: "/logo-brand.svg",
    alt: "Destiny Church Logo",
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
      { name: "Plan a Visit", href: "/visit" },
      { name: "Events", href: "/events" },
      { name: "Groups", href: "/groups" },
      { name: "Sermons", href: "/sermons" },
      { name: "Giving", href: "/giving" }, // Changed to /giving for consistency
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
    footer: [
      { name: "Plan a Visit", href: "/visit" },
      { name: "Events", href: "/events" },
      { name: "Groups", href: "/groups" },
      { name: "Sermons", href: "/sermons" },
      { name: "Giving", href: "/giving" }, // Changed to /giving for consistency
      { name: "Team Portal", href: "/team" },
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
    address: "3801 SE 29th St, Oklahoma City, OK 73115",
    phone: "(405) 677-1451",
    email: "info@destinyokc.com",
  },
  social: {
    facebook: "https://facebook.com/destinyokc",
    instagram: "https://instagram.com/destinyokc",
    youtube: "https://www.youtube.com/@DestinyChristianOKC",
  },
  external: {
    churchCenter: "https://destinyokc.churchcenter.com",
    youVersion: "https://www.bible.com/events/49489389",
    soundCloud: "https://soundcloud.com/destinychristian",
  }
}



