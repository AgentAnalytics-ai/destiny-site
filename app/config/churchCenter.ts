export const CC = {
  base: "https://destinyokc.churchcenter.com",
  mode: {
    give: "embed",        // Keep users on your site
    events: "embed",      // Keep users on your site  
    groups: "embed",      // Keep users on your site
    checkin: "embed",     // Keep users on your site
    plan: "redirect",     // Redirect for volunteer operations
    prayer: "embed"       // Keep users on your site
  },
  paths: {
    give: "/giving",
    events: "/registrations", 
    groups: "/groups",
    checkin: "/check-ins",
    plan: "/services",
    prayer: "/people/forms/123456" // TODO: Get real prayer form ID from Church Center
  }
}
