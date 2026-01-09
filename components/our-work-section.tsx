"use client"

import { Play } from "lucide-react"
import { useState, useEffect } from "react"

export function OurWorkSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [thumbnails, setThumbnails] = useState<Record<string, string>>({})

  const projects = [
    {
      id: 1,
      client: "Yenu Trading",
      title: "Trading Strategy",
      description: "Educational views on trading market analysis.",
      videoId: "7552228406931361035",
    },
    {
      id: 2,
      client: "Universal Consultancy",
      title: "Study Abroad",
      description: "Helping students achieve their international education goals.",
      videoId: "7591912437666827532",
    },
    {
      id: 3,
      client: "JimiChops",
      title: "Barber Transformation",
      description: "Satisfying grooming and style makeovers.",
      videoId: "7582900318984310028",
    },
    {
      id: 4,
      client: "Rainbow Capital",
      title: "Financial Growth",
      description: "Expert advice on capital management and investment.",
      videoId: "7588113385691057464",
    },
    {
      id: 5,
      client: "Gojo Jobs",
      title: "Career Opportunities",
      description: "Connecting talent with top employers.",
      videoId: "7556516467957566776",
    },
    {
      id: 6,
      client: "Cenacle Reflexology",
      title: "Wellness & Health",
      description: "Promoting holistic health and reflexology benefits.",
      videoId: "7580039356593884427",
    },
    {
      id: 7,
      client: "Next Point Travel",
      title: "Travel Adventures",
      description: "Curating unforgettable travel experiences.",
      videoId: "7585990918587649291",
    },
  ]

  useEffect(() => {
    projects.forEach((project) => {
      fetch(`/api/tiktok-oembed?videoId=${project.videoId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.thumbnail_url) {
            setThumbnails((prev) => ({ ...prev, [project.videoId]: data.thumbnail_url }))
          }
        })
        .catch((err) => console.error("Error loading thumbnail:", err))
    })
  }, [])

  return (
    <div id="work" className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Viral <span className="text-lime-300">Campaigns</span>
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          See how we've helped brands like yours achieve remarkable results with trending vertical content.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative rounded-xl overflow-hidden cursor-pointer"
            onClick={() => setSelectedVideo(project.videoId)}
          >
            {/* 9:16 Aspect Ratio Container */}
            <div className="aspect-[9/16] relative bg-gray-900 border border-white/10 overflow-hidden">
              {/* Thumbnail Image */}
              {thumbnails[project.videoId] ? (
                <img
                  src={thumbnails[project.videoId]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                // Fallback Gradient if no thumbnail yet
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-80" />
              )}

              {/* Overlays */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-lime-400 flex items-center justify-center shadow-lg shadow-lime-400/20 group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 md:w-8 md:h-8 text-black fill-black ml-1" />
                </div>
              </div>

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-12">
                <div className="text-xs font-medium text-lime-300 mb-1">{project.client}</div>
                <h3 className="text-sm md:text-base font-bold text-white mb-0 leading-tight">{project.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          {/* Vertical Video Modal */}
          <div className="relative h-[85vh] aspect-[9/16] max-w-full bg-black rounded-xl overflow-hidden shadow-2xl shadow-lime-400/10" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://www.tiktok.com/embed/v2/${selectedVideo}?autoplay=1`}
              className="w-full h-full border-none"
              allow="autoplay; fullscreen"
            ></iframe>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-white/20 transition-colors z-50"
            >
              <span className="sr-only">Close</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
