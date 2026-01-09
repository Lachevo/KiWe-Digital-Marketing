"use client"

import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { OurWorkSection } from "@/components/our-work-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { AppverseFooter } from "@/components/appverse-footer"
import { PlatformMarquee } from "@/components/platform-marquee"
import Script from "next/script"
import { useState } from "react"
import dynamic from "next/dynamic"

const AnimatedBackground = dynamic(() => import("@/components/animated-background"), { ssr: false })

export default function Page() {
  const [activeTab, setActiveTab] = useState("about")

  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": "https://kiwedigital.com/#pricing",
    name: "Pricing Plans",
    description: "Digital Marketing pricing plans - Starter, Growth, and Enterprise packages for all business needs",
    url: "https://kiwedigital.com/#pricing",
    mainEntity: {
      "@type": "PriceSpecification",
      name: "Digital Marketing Services",
      description: "Professional social media management and digital marketing services with three pricing tiers",
      offers: [
        {
          "@type": "Offer",
          name: "Starter Plan",
          price: "499",
          priceCurrency: "USD",
          description: "Social media management for 2 platforms with content creation",
        },
        {
          "@type": "Offer",
          name: "Growth Plan",
          price: "999",
          priceCurrency: "USD",
          description: "Full social media management with ads and analytics",
        },
        {
          "@type": "Offer",
          name: "Enterprise Plan",
          price: "2499",
          priceCurrency: "USD",
          description: "Complete digital marketing solution with dedicated account manager",
        },
      ],
    },
  }

  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://kiwedigital.com/",
    name: "KiWe Digital Marketing | Social Media Management Made Simple",
    description:
      "From social media campaigns to full-scale digital marketing strategies, KiWe delivers results that grow your brand and engage your audience.",
    url: "https://kiwedigital.com/",
    mainEntity: {
      "@type": "Organization",
      name: "KiWe Digital Marketing",
      url: "https://kiwedigital.com",
      sameAs: [
        "https://twitter.com/kiwedigital",
        "https://instagram.com/kiwedigital",
        "https://linkedin.com/company/kiwedigital",
      ],
    },
    hasPart: [
      {
        "@type": "WebPageElement",
        "@id": "https://kiwedigital.com/#pricing",
        name: "Pricing Section",
        url: "https://kiwedigital.com/#pricing",
      },
    ],
  }

  return (
    <>
      {/* Starfield background only on home */}
      <div className="fixed inset-0 z-0 bg-black">
        <AnimatedBackground />
      </div>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader activeTab={activeTab} onTabChange={setActiveTab} />
        <Hero />

        <section className="container mx-auto px-4 py-16">
          <AboutSection />
        </section>

        <PlatformMarquee />

        <section className="container mx-auto px-4 py-16">
          <ServicesSection />
          <OurWorkSection />
          <TestimonialsSection />
          <ContactSection />
        </section>

        <AppverseFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData),
        }}
      />

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}
