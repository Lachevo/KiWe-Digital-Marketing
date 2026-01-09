"use client"

import { useState } from "react"
import { Icons } from "@/components/icons"

export function PlatformMarquee() {
    const [pausedRow, setPausedRow] = useState<string | null>(null)

    const platforms = [
        { name: "Instagram", icon: Icons.Instagram, color: "text-pink-500", bg: "bg-pink-500/10" },
        { name: "TikTok", icon: Icons.TikTok, color: "text-cyan-400", bg: "bg-cyan-400/10" },
        { name: "LinkedIn", icon: Icons.LinkedIn, color: "text-blue-500", bg: "bg-blue-500/10" },
        { name: "X / Twitter", icon: Icons.TwitterX, color: "text-white", bg: "bg-white/10" },
        { name: "YouTube", icon: Icons.YouTube, color: "text-red-500", bg: "bg-red-500/10" },
        { name: "Facebook", icon: Icons.Facebook, color: "text-blue-600", bg: "bg-blue-600/10" },
        { name: "Pinterest", icon: Icons.Pinterest, color: "text-red-400", bg: "bg-red-400/10" },
        { name: "Snapchat", icon: Icons.Snapchat, color: "text-yellow-400", bg: "bg-yellow-400/10" },
    ]

    const PlatformCard = ({ platform }: { platform: any }) => (
        <div
            className="flex-shrink-0 mx-4 group cursor-default"
            onMouseEnter={() => setPausedRow("platforms")}
            onMouseLeave={() => setPausedRow(null)}
        >
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/10 transition-colors">
                <div className={`p-2 rounded-full ${platform.bg}`}>
                    <platform.icon className={`w-5 h-5 ${platform.color}`} />
                </div>
                <span className="font-semibold text-gray-200">{platform.name}</span>
            </div>
        </div>
    )

    return (
        <section className="py-12 overflow-hidden border-y border-white/5 bg-black/20">
            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="text-gray-400 text-sm uppercase tracking-widest font-medium">Platforms We Master</p>
            </div>

            <div className="relative">
                <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div
                        className={`flex animate-scroll-left whitespace-nowrap ${pausedRow ? "animation-play-state-paused" : ""}`}
                        style={{
                            width: "max-content",
                        }}
                    >
                        {[...platforms, ...platforms, ...platforms].map((platform, index) => (
                            <PlatformCard key={index} platform={platform} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
