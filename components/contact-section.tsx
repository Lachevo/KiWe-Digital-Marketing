"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Icons } from "@/components/icons"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div id="contact" className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-lime-300">Touch</span>
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Ready to grow your brand? Let's talk about how we can help you achieve your digital marketing goals.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-12">
        {/* Contact Form */}
        <div className="liquid-glass rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/20 transition-colors"
                placeholder="Abebe Kebede"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/20 transition-colors"
                placeholder="abebe@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/20 transition-colors"
                placeholder="+251 911 123 456"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/20 transition-colors"
                placeholder="Ethio Retail PLC"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/20 transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-lime-400 text-black font-medium rounded-lg px-6 py-3 hover:bg-lime-300 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="liquid-glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-lime-400/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-lime-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a
                    href="mailto:Adonaywelday211@gmail.com"
                    className="text-gray-400 hover:text-lime-400 transition-colors"
                  >
                    Adonaywelday211@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-lime-400/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-lime-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Phone</div>
                  <a href="tel:+251926404142" className="text-gray-400 hover:text-lime-400 transition-colors">
                    +251 926 404 142
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-lime-400/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-lime-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Office</div>
                  <p className="text-gray-400">
                    HayaHulet 22,  Building
                    <br />
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="liquid-glass rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Monday - Friday</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Saturday</span>
                <span className="font-medium">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Sunday</span>
                <span className="font-medium">Closed</span>
              </div>
            </div>
          </div>

          <div className="liquid-glass rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex flex-wrap gap-3 items-center">
              <a
                href="https://t.me/kiwedigitals"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-900/50 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#2AABEE] hover:border-[#2AABEE] hover:bg-[#2AABEE]/10 transition-colors"
                aria-label="Telegram"
              >
                <Icons.Telegram className="w-5 h-5" />
              </a>
              <a
                href="#instagram"
                className="w-10 h-10 rounded-full bg-gray-900/50 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#E4405F] hover:border-[#E4405F] hover:bg-[#E4405F]/10 transition-colors"
                aria-label="Instagram"
              >
                <Icons.Instagram className="w-5 h-5" />
              </a>
              <a
                href="#tiktok"
                className="w-10 h-10 rounded-full bg-gray-900/50 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#00F2EA] hover:border-[#00F2EA] hover:bg-[#00F2EA]/10 transition-colors"
                aria-label="TikTok"
              >
                <Icons.TikTok className="w-5 h-5" />
              </a>
              <a
                href="#linkedin"
                className="w-10 h-10 rounded-full bg-gray-900/50 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#0077B5] hover:border-[#0077B5] hover:bg-[#0077B5]/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Icons.LinkedIn className="w-5 h-5" />
              </a>
              <a
                href="#twitter"
                className="w-10 h-10 rounded-full bg-gray-900/50 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-white hover:bg-white/10 transition-colors"
                aria-label="X / Twitter"
              >
                <Icons.TwitterX className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
