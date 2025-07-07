import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for database tables
export interface Project {
  id: number
  title: string
  description: string
  category: "construction" | "interior"
  status: "ongoing" | "completed"
  location: string
  start_date: string
  completion_date?: string
  expected_completion?: string
  progress: number
  team_size: number
  area: string
  client: string
  features: string[]
  image_url: string
  gallery_urls: string[]
  created_at: string
  updated_at: string
}

export interface JobOpening {
  id: number
  title: string
  department: string
  location: string
  type: "full-time" | "part-time" | "contract"
  experience: string
  salary_range: string
  description: string
  requirements: string[]
  responsibilities: string[]
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface JobApplication {
  id: number
  job_id: number
  name: string
  email: string
  phone?: string
  experience: string
  cover_letter: string
  resume_url?: string
  status: "pending" | "reviewed" | "interviewed" | "hired" | "rejected"
  created_at: string
  updated_at: string
}

export interface ContactInquiry {
  id: number
  name: string
  email: string
  phone?: string
  service?: string
  message: string
  status: "new" | "contacted" | "quoted" | "converted" | "closed"
  created_at: string
  updated_at: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
  is_featured: boolean
  created_at: string
}
