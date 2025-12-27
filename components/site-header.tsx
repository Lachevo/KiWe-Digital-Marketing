"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { Menu } from "lucide-react"

interface SiteHeaderProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function SiteHeader({ activeTab, onTabChange }: SiteHeaderProps) {
  const scrollToSection = (sectionId: string) => {
    // update active tab state in the page
    onTabChange(sectionId)
    // smooth scroll to the section if present on the page
    try {
      const el = document.getElementById(sectionId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } catch (e) {
      // server-side or unexpected error — ignore
    }
  }

  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
          <Link href="/" className="flex items-center gap-1.5">
            <Image src="/icons/skitbit-white.svg" alt="KiWe Digital logo" width={20} height={20} className="h-5 w-5" />
            <span className="font-semibold tracking-wide text-white">KiWe Digital</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }} className="hover:text-lime-300 transition-colors">
              About
            </a>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }} className="hover:text-lime-300 transition-colors">
              Services
            </a>
            <a href="#work" onClick={(e) => { e.preventDefault(); scrollToSection('work') }} className="hover:text-lime-300 transition-colors">
              Our Work
            </a>
            <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials') }} className="hover:text-lime-300 transition-colors">
              Testimonials
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-lime-400 text-black font-medium rounded-lg px-6 py-2.5
                         hover:bg-lime-300 hover:shadow-md hover:scale-[1.02]
                         transition-all"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="liquid-glass border-gray-800 p-0 w-64 flex flex-col">
                <div className="flex items-center gap-1.5 px-4 py-4 border-b border-gray-800">
                  <Image
                    src="/icons/skitbit-white.svg"
                    alt="KiWe Digital logo"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                  <span className="font-semibold tracking-wide text-white text-lg">KiWe Digital</span>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-1 mt-2 text-gray-200">
                  {["about", "services", "work", "testimonials"].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-lime-300 transition-colors text-left"
                    >
                      <span className="text-sm capitalize">{section === "work" ? "Our Work" : section}</span>
                    </button>
                  ))}
                </nav>

                {/* CTA Button at Bottom */}
                <div className="mt-auto border-t border-gray-800 p-4">
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="w-full bg-lime-400 text-black font-medium rounded-lg px-6 py-2.5
                               hover:bg-lime-300 hover:shadow-md hover:scale-[1.02]
                               transition-all"
                  >
                    Get Started
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
