export const contentConfig = {
  // Content Types
  types: {
    sermons: {
      path: '/messages/sermons',
      title: 'Sermons',
      description: 'Watch and listen to our latest messages',
      icon: 'Play',
      features: ['video', 'audio', 'notes', 'download']
    },
    blog: {
      path: '/messages/blog',
      title: 'Blog',
      description: 'Read our latest articles and devotionals',
      icon: 'BookOpen',
      features: ['search', 'categories', 'author']
    },
    live: {
      path: '/live',
      title: 'Live Stream',
      description: 'Join us live for services and events',
      icon: 'Radio',
      features: ['live-chat', 'prayer-requests', 'countdown']
    },
    events: {
      path: '/events',
      title: 'Events',
      description: 'Upcoming events and activities',
      icon: 'Calendar',
      features: ['registration', 'calendar', 'reminders']
    }
  },

  // Church Center Integration
  churchCenter: {
    enabled: true,
    baseUrl: 'https://destinyokc.churchcenter.com',
    features: {
      giving: true,
      events: true,
      groups: true,
      registrations: true,
      forms: true,
      people: true
    }
  },

  // Content Management
  cms: {
    type: 'markdown', // or 'contentful', 'sanity', etc.
    features: ['preview', 'draft', 'scheduling', 'seo']
  }
}
