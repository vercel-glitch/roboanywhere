interface Testimonial {
  name: string
  role: string
  company: string
  image?: string
  quote: string
  rating?: number
}

interface TestimonialsProps {
  title?: string
  subtitle?: string
  testimonials: Testimonial[]
  className?: string
  showRatings?: boolean
}

const Testimonials = ({ 
  title = "What Our Clients Say",
  subtitle = "Don't just take our word for it. Here's what our satisfied customers have to say about RoboAnywhere.",
  testimonials,
  className = "",
  showRatings = false
}: TestimonialsProps) => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            {title}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-secondary-200 hover:shadow-xl transition-shadow duration-300">
              {showRatings && testimonial.rating && renderStars(testimonial.rating)}
              
              <blockquote className="text-text-secondary italic text-lg leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              
              <div className="flex items-center">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <h4 className="text-lg font-semibold text-text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-text-secondary text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {testimonials.length > 4 && (
          <div className="text-center mt-12">
            <button className="btn-secondary">
              View More Testimonials
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Testimonials
