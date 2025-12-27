import { Sparkles, Megaphone } from "lucide-react"

export function ServicesSection() {
  return (
    <div id="services" className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What We <span className="text-lime-300">Do Best</span>
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          We don't just post content — we build brands, spark conversations, and turn followers into customers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {/* Full Social Media Management */}
        <div className="liquid-glass rounded-2xl p-8 hover:scale-[1.02] transition-transform">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-lime-400/10 mb-6">
            <Sparkles className="w-7 h-7 text-lime-400" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Full Social Media Management</h3>
          <p className="text-gray-300 text-base leading-relaxed mb-6">
            We handle <span className="text-lime-300 font-semibold">everything</span> to grow your online presence — so
            you can focus on running your business.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-lime-400 flex-shrink-0 mt-2" />
              <div>
                <p className="text-white font-medium">Content Writing & Captioning</p>
                <p className="text-gray-400 text-sm">Scroll-stopping captions that drive engagement</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-lime-400 flex-shrink-0 mt-2" />
              <div>
                <p className="text-white font-medium">Video Production & Editing</p>
                <p className="text-gray-400 text-sm">Professional videos that capture attention in seconds</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-lime-400 flex-shrink-0 mt-2" />
              <div>
                <p className="text-white font-medium">Posting Schedule & Strategy</p>
                <p className="text-gray-400 text-sm">Consistent posting at optimal times for maximum reach</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-lime-400 flex-shrink-0 mt-2" />
              <div>
                <p className="text-white font-medium">Audience Engagement & Performance Tracking</p>
                <p className="text-gray-400 text-sm">We respond, analyze, and optimize for growth</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Advertising */}
        <div className="liquid-glass rounded-2xl p-8 hover:scale-[1.02] transition-transform">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-lime-400/10 mb-6">
            <Megaphone className="w-7 h-7 text-lime-400" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Social Media Advertising</h3>
          <p className="text-gray-300 text-base leading-relaxed mb-6">
            We create and manage <span className="text-lime-300 font-semibold">high-performing ad campaigns</span> that
            actually convert.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-lime-400 flex-shrink-0" />
              <p className="text-white font-medium">Facebook Ads</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-lime-400 flex-shrink-0" />
              <p className="text-white font-medium">Instagram Ads</p>
            </div>
          </div>

          <div className="bg-lime-400/5 border border-lime-400/20 rounded-xl p-5 mt-6">
            <p className="text-lime-300 font-semibold mb-2">Our Goal:</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Help your brand reach the <span className="text-white font-medium">right audience</span>, boost
              engagement, and drive <span className="text-white font-medium">real results</span> that impact your bottom
              line.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-gray-400 text-sm">From targeting to creative to optimization — we handle it all.</p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12 liquid-glass rounded-2xl p-8">
        <p className="text-xl text-gray-300">
          Ready to level up your social media game?{" "}
          <span className="text-lime-300 font-semibold">Let's make it happen.</span>
        </p>
      </div>
    </div>
  )
}
