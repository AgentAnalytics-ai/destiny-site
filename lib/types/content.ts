export interface Sermon {
  id: string
  title: string
  speaker: string
  date: string
  description: string
  videoUrl?: string
  audioUrl?: string
  thumbnail?: string
  duration?: number
  tags: string[]
}

export interface BlogPost {
  id: string
  title: string
  author: string
  date: string
  content: string
  excerpt: string
  featuredImage?: string
  tags: string[]
}

export interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  registrationUrl?: string
  image?: string
}
