import { Star, Quote } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Yoseph Solomon",
      role: "Owner, Cenacle Reflexology",
      company: "Cenacle Reflexology",
      image: "/reflex.jpg",
      rating: 5,
      text: "They transformed our reflexology business with consistent, high-quality content and real results—we saw more bookings within weeks.",
    },
    {
      name: "Henok Sisay",
      role: "Manager, Next Point Travel Solution",
      company: "Next Point Travel Solution",
      image: "/henok",
      rating: 5,
      text: "They boosted our travel agency’s visibility and trust with powerful content that brought real inquiries.",
    },
    {
      name: "Tadiyos Meseret",
      role: "Owner, Gojo Jobs",
      company: "Gojo Jobs",
      image: "/gojo.JPG",
      rating: 5,
      text: "They helped our job vacancy company reach the right candidates with clear, engaging, and high-converting content. Thanks to their strategy, our listings now get more visibility, applications, and genuine applicants.",
    },
    {
      name: "Yenu Trading",
      role: "Owner and CEO",
      company: "Yenu Trading",
      image: "/yenuCeo.jpg",
      rating: 5,
      text: "KiWe Digital truly understands the local market. Their creative campaigns helped us modernize our brand while staying true to our roots, resulting in a significant boost in both online engagement and instore foot traffic.",
    },
  ]

  return (
    <div id="testimonials" className="space-y-8">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Client <span className="text-lime-300">Testimonials</span>
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Don't just take our word for it. Here's what our clients have to say about working with KiWe Digital.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 h-full">
                <div className="liquid-glass rounded-2xl p-6 flex flex-col h-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-lime-400/50 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="w-8 h-8 text-lime-400/30" />
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-lime-400 text-lime-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">"{testimonial.text}"</p>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-800 mt-auto">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-lime-400/20"
                    />
                    <div>
                      <div className="font-semibold text-sm text-lime-100">{testimonial.name}</div>
                      <div className="text-xs text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-[-2rem] bg-black/50 border-lime-400/30 hover:bg-lime-400/20 hover:text-lime-400" />
            <CarouselNext className="right-[-2rem] bg-black/50 border-lime-400/30 hover:bg-lime-400/20 hover:text-lime-400" />
          </div>
        </Carousel>
      </div>

      <div className="liquid-glass rounded-2xl p-8 text-center mt-12 max-w-4xl mx-auto">
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
