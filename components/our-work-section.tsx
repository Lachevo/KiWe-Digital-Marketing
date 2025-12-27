"use client"

import { Play } from "lucide-react"
import { useState } from "react"

export function OurWorkSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const projects = [
    {
      id: 1,
      client: "TechStart Inc.",
      title: "Product Launch Campaign",
      description: "A viral social media campaign that generated 2M+ impressions and 50K+ engagements in 30 days.",
      videoUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm",
      thumbnail: "/tech-product-launch-social-media-campaign.jpg",
      metrics: { impressions: "2M+", engagement: "50K+", roi: "400%" },
    },
    {
      id: 2,
      client: "Fashion Forward",
      title: "Brand Awareness Campaign",
      description: "Instagram and TikTok campaign that increased brand awareness by 300% and drove 10K new followers.",
      videoUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4",
      thumbnail: "/fashion-brand-instagram-campaign.jpg",
      metrics: { followers: "10K+", awareness: "300%", reach: "5M+" },
    },
    {
      id: 3,
      client: "FitLife Gym",
      title: "Membership Drive",
      description: "Multi-platform campaign that resulted in 500+ new memberships and 80% increase in website traffic.",
      videoUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b0f3222371106db366a14ca1c29cef55-1b1EWVSa4w3FL2zslcaCGYTy9vcxjF.mp4",
      thumbnail: "/fitness-gym-social-media-campaign.jpg",
      metrics: { memberships: "500+", traffic: "80%", conversions: "25%" },
    },
    {
      id: 4,
      client: "Gourmet Eats",
      title: "Restaurant Promotion",
      description:
        "Food photography and influencer campaign that doubled reservations and increased social following by 200%.",
      videoUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm",
      thumbnail: "/restaurant-food-social-media.jpg",
      metrics: { reservations: "2x", followers: "200%", engagement: "150%" },
    },
  ]

  return (
    <div id="work" className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="text-lime-300">Work</span>
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          See how we've helped brands like yours achieve remarkable results through strategic digital marketing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="liquid-glass rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform"
          >
            <div
              className="relative aspect-video bg-gray-900 group cursor-pointer"
              onClick={() => setSelectedVideo(project.videoUrl)}
            >
              <img
                src={project.thumbnail || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-lime-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-black fill-black ml-1" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-lime-400 mb-1">{project.client}</div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key}>
                    <div className="text-lime-400 font-semibold">{value}</div>
                    <div className="text-gray-500 text-xs capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-4xl aspect-video">
            <video src={selectedVideo} controls autoPlay className="w-full h-full rounded-lg" />
          </div>
        </div>
      )}
    </div>
  )
}
