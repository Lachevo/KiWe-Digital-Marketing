import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      image: "/professional-woman-ceo.png",
      rating: 5,
      text: "KiWe Digital transformed our social media presence completely. Within 3 months, we saw a 400% increase in engagement and our brand awareness skyrocketed. Their team is professional, creative, and truly understands digital marketing.",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, Fashion Forward",
      company: "Fashion Forward",
      image: "/professional-marketing-director.png",
      rating: 5,
      text: "Working with KiWe has been a game-changer for our brand. They don't just post content—they create strategic campaigns that drive real results. Our follower count tripled and sales increased by 250% in just 6 months.",
    },
    {
      name: "Emily Rodriguez",
      role: "Owner, FitLife Gym",
      company: "FitLife Gym",
      image: "/professional-woman-gym-owner.jpg",
      rating: 5,
      text: "The ROI we've seen from KiWe's campaigns is incredible. They helped us fill our gym to capacity with a targeted social media strategy. Their content is always on-brand and their analytics reports are detailed and actionable.",
    },
    {
      name: "David Park",
      role: "Founder, Gourmet Eats",
      company: "Gourmet Eats",
      image: "/professional-restaurant-owner.png",
      rating: 5,
      text: "KiWe Digital's content creation is top-notch. Their food photography and video work has made our restaurant the talk of the town. Reservations doubled and our Instagram following grew by 200%. Highly recommend!",
    },
    {
      name: "Lisa Thompson",
      role: "CMO, EcoHome Solutions",
      company: "EcoHome Solutions",
      image: "/professional-woman-cmo.jpg",
      rating: 5,
      text: "The team at KiWe is responsive, creative, and data-driven. They took the time to understand our brand and created campaigns that truly resonated with our audience. Our engagement rates are now 5x higher than before.",
    },
    {
      name: "James Wilson",
      role: "VP Marketing, CloudTech",
      company: "CloudTech",
      image: "/professional-man-vp-marketing.jpg",
      rating: 5,
      text: "KiWe Digital doesn't just manage social media—they build communities. Their strategic approach helped us connect with our target audience in meaningful ways. The results speak for themselves: 3M+ impressions and counting.",
    },
  ]

  return (
    <div id="testimonials" className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Client <span className="text-lime-300">Testimonials</span>
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Don't just take our word for it. Here's what our clients have to say about working with KiWe Digital.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="liquid-glass rounded-2xl p-6 flex flex-col">
            <Quote className="w-8 h-8 text-lime-400/30 mb-4" />

            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-lime-400 text-lime-400" />
              ))}
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">{testimonial.text}</p>

            <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-sm">{testimonial.name}</div>
                <div className="text-xs text-gray-400">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="liquid-glass rounded-2xl p-8 text-center mt-12">
        <h3 className="text-2xl font-bold mb-2">Join Our Success Stories</h3>
        <p className="text-gray-400 mb-6">Ready to see similar results for your brand?</p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-lg bg-lime-400 px-8 py-3 text-black font-medium hover:bg-lime-300 transition-colors"
        >
          Get Started Today
        </a>
      </div>
    </div>
  )
}
