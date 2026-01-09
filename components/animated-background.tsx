"use client"

import React, { useEffect, useRef } from "react"

interface Star {
    x: number
    y: number
    vx: number
    vy: number
    size: number
    opacity: number
}

export default function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const stars = useRef<Star[]>([])
    const count = 120
    const mouse = useRef({ x: -1000, y: -1000 })

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let width = (canvas.width = window.innerWidth)
        let height = (canvas.height = window.innerHeight)

        const initStars = () => {
            stars.current = []
            for (let i = 0; i < count; i++) {
                stars.current.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.2, // Very slow drift
                    vy: (Math.random() - 0.5) * 0.2,
                    size: Math.random() * 1.5 + 0.5,
                    opacity: Math.random() * 0.6 + 0.2,
                })
            }
        }

        const update = () => {
            ctx.fillStyle = "black"
            ctx.fillRect(0, 0, width, height)

            for (let i = 0; i < count; i++) {
                const s = stars.current[i]

                // 1. Subtle Repulsion from mouse
                const dx = s.x - mouse.current.x
                const dy = s.y - mouse.current.y
                const dist = Math.sqrt(dx * dx + dy * dy)
                const radius = 100

                if (dist < radius) {
                    const force = (radius - dist) / radius
                    const angle = Math.atan2(dy, dx)
                    // Gently push them with no snapping back
                    s.x += Math.cos(angle) * force * 1.5
                    s.y += Math.sin(angle) * force * 1.5
                }

                // 2. Continuous Drift
                s.x += s.vx
                s.y += s.vy

                // 3. Screen Wrap
                if (s.x < 0) s.x = width
                if (s.x > width) s.x = 0
                if (s.y < 0) s.y = height
                if (s.y > height) s.y = 0

                // 4. Drawing
                ctx.beginPath()
                ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`
                ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
                ctx.fill()
            }

            requestAnimationFrame(update)
        }

        const handleResize = () => {
            width = canvas.width = window.innerWidth
            height = canvas.height = window.innerHeight
            initStars()
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX
            mouse.current.y = e.clientY
        }

        const handleMouseLeave = () => {
            mouse.current.x = -1000
            mouse.current.y = -1000
        }

        initStars()
        update()

        window.addEventListener("resize", handleResize)
        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 bg-black"
            style={{ filter: "blur(0.5px)" }}
        />
    )
}
