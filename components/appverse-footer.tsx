"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, Twitter, Linkedin, MessageCircle } from "lucide-react"
import LazyVideo from "./lazy-video"
import Image from "next/image"

interface FooterContent {
  tagline: string
  copyright: string
}

const defaultContent: FooterContent = {
  tagline:
    "Transform your social media presence with data-driven strategies. We create content that converts and campaigns that deliver results.",
  copyright: "© 2025 — KiWe Digital Marketing",
}

export function AppverseFooter() {
  const [content, setContent] = useState<FooterContent>(defaultContent)

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("kiwe-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.footer) {
          setContent(parsed.footer)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section className="text-white">
      {/* Contact CTA */}
      <div className="container mx-auto px-4 pt-12 sm:pt-16">
        <div className="flex justify-center">
          <Button
            asChild
            className="rounded-full bg-lime-400 px-6 py-2 text-sm font-medium text-black shadow-[0_0_20px_rgba(163,230,53,0.35)] hover:bg-lime-300"
          >
            <a href="#contact" rel="noopener noreferrer">
              Get Started Today
            </a>
          </Button>
        </div>
      </div>


      <footer className="border-t border-white/10 pb-20 md:pb-10">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5">
                <Image
                  src="/kiWeIcon.jpg"
                  alt="KiWe Digital logo"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <span className="text-xl font-semibold text-lime-300">KiWe Digital</span>
              </div>
              <p className="max-w-sm text-sm text-neutral-400">{content.tagline}</p>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2">
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Navigation</h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {["Home", "Services", "Case Studies", "Pricing", "Blog", "Contact"].map((item) => (
                    <li key={item}>
                      <Link href={`#${item.toLowerCase()}`} className="hover:text-lime-300">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">Social media</h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex items-center gap-2">
                    <Twitter className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://twitter.com/kiwedigital"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-300"
                      aria-label="Follow KiWe Digital on Twitter"
                    >
                      X/Twitter
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://linkedin.com/company/kiwedigital"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-300"
                      aria-label="Connect with KiWe Digital on LinkedIn"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Instagram className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://instagram.com/kiwedigital"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-300"
                      aria-label="Follow KiWe Digital on Instagram"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://wa.me/yourwhatsappnumber"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-300"
                      aria-label="Message KiWe Digital on WhatsApp"
                    >
                      WhatsApp
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-neutral-400" />
                    <a href="tel:+251926404142" className="hover:text-lime-300" aria-label="Call KiWe Digital">
                      0926404142
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-neutral-400" />
                    <a
                      href="https://t.me/kiwedigitals"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-300"
                      aria-label="Telegram KiWe Digital"
                    >
                      Telegram @kiwedigitals
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
            <p>{content.copyright}</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-lime-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-lime-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
