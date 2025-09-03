export interface Testimonial {
  name: string
  role: string
  company: string
  image?: string
  quote: string
  rating?: number
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'SEO Manager',
    company: 'TechCorp Solutions',
    quote: 'RoboAnywhere has transformed our SEO workflow. We\'ve seen a 40% increase in efficiency and our backlink quality has improved dramatically. The automation features save us hours every week.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Digital Marketing Director',
    company: 'Growth Dynamics',
    quote: 'The automation features are incredible. What used to take our team hours now happens automatically, allowing us to focus on strategy. ROI has been outstanding.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Manager',
    company: 'StartupHub',
    quote: 'As a small team, RoboAnywhere gives us enterprise-level SEO capabilities. The backlink analysis is incredibly detailed and actionable. Highly recommend!',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'SEO Consultant',
    company: 'Digital Solutions Pro',
    quote: 'I use RoboAnywhere for all my clients. The reporting features are top-notch, and clients love the transparency. It\'s become an essential part of my toolkit.',
    rating: 5,
  },
  {
    name: 'Lisa Wang',
    role: 'Content Marketing Lead',
    company: 'E-commerce Plus',
    quote: 'The user interface is intuitive and the insights are actionable. We\'ve improved our search rankings significantly since implementing RoboAnywhere.',
    rating: 4,
  },
  {
    name: 'James Miller',
    role: 'VP of Marketing',
    company: 'SaaS Innovations',
    quote: 'Outstanding customer support and a product that delivers on its promises. The task automation alone has saved us countless hours of manual work.',
    rating: 5,
  },
]

// Featured testimonials for key pages
export const featuredTestimonials = testimonials.slice(0, 2)

// Home page testimonials (mix of different roles)
export const homeTestimonials = [
  testimonials[0], // SEO Manager
  testimonials[1], // Digital Marketing Director
  testimonials[2], // Marketing Manager (small team perspective)
  testimonials[3], // SEO Consultant (agency perspective)
]
