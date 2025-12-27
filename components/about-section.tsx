import { Sparkles, Target, Users } from "lucide-react"

export function AboutSection() {
  return (
    <div id="about" className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          About <span className="text-lime-300">KiWe Digital</span>
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          We're a team of digital marketing experts passionate about helping brands grow their online presence. From
          social media management to full-scale digital campaigns, we deliver results that matter.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="liquid-glass rounded-2xl p-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-lime-400/10 mb-4">
            <Target className="w-6 h-6 text-lime-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            To empower businesses with data-driven digital marketing strategies that drive real growth and engagement.
          </p>
        </div>

        <div className="liquid-glass rounded-2xl p-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-lime-400/10 mb-4">
            <Sparkles className="w-6 h-6 text-lime-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Our Approach</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            We combine creativity with analytics to craft campaigns that resonate with your audience and deliver
            measurable ROI.
          </p>
        </div>

        <div className="liquid-glass rounded-2xl p-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-lime-400/10 mb-4">
            <Users className="w-6 h-6 text-lime-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Our Team</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            A diverse group of strategists, content creators, and analysts dedicated to your brand's success.
          </p>
        </div>
      </div>

      <div className="liquid-glass rounded-2xl p-8 mt-8">
        <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-lime-400 mt-2 flex-shrink-0" />
            <div>
              <h4 className="font-semibold mb-1">Proven Track Record</h4>
              <p className="text-gray-400 text-sm">Over 200+ successful campaigns delivered</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-lime-400 mt-2 flex-shrink-0" />
            <div>
              <h4 className="font-semibold mb-1">Data-Driven Results</h4>
              <p className="text-gray-400 text-sm">Average 300% increase in engagement</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-lime-400 mt-2 flex-shrink-0" />
            <div>
              <h4 className="font-semibold mb-1">Dedicated Support</h4>
              <p className="text-gray-400 text-sm">24/7 customer service and account management</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-lime-400 mt-2 flex-shrink-0" />
            <div>
              <h4 className="font-semibold mb-1">Industry Expertise</h4>
              <p className="text-gray-400 text-sm">10+ years of digital marketing experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
