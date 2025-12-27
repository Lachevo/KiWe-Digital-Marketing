"use client"

import React, { useEffect, useRef } from "react"

type Star = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  alpha: number
}

export default function Starfield({ count = 120 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const starsRef = useRef<Star[]>([])
  const pointer = useRef({ x: -9999, y: -9999, active: false })

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!

    let width = (canvas.width = canvas.clientWidth)
    let height = (canvas.height = canvas.clientHeight)

    const rand = (min: number, max: number) => Math.random() * (max - min) + min

    const initStars = () => {
      const arr: Star[] = []
      for (let i = 0; i < count; i++) {
        const speed = rand(0.02, 0.6)
        const angle = Math.random() * Math.PI * 2
        arr.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          r: rand(0.4, 1.8),
          alpha: rand(0.4, 1),
        })
      }
      starsRef.current = arr
    }

    const resize = () => {
      width = canvas.width = canvas.clientWidth
      height = canvas.height = canvas.clientHeight
      initStars()
    }

    const handleMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.current.x = e.clientX - rect.left
      pointer.current.y = e.clientY - rect.top
      pointer.current.active = true
    }
    const handleLeave = () => {
      pointer.current.active = false
    }

    const repulse = (star: Star) => {
      if (!pointer.current.active) return
      const dx = star.x - pointer.current.x
      const dy = star.y - pointer.current.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      const min = 80
      if (dist < min && dist > 0) {
        const force = (1 - dist / min) * 0.8
        const nx = (dx / dist) * force
        const ny = (dy / dist) * force
        star.vx += nx
        star.vy += ny
      }
    }

    const tick = () => {
      ctx.clearRect(0, 0, width, height)
      const stars = starsRef.current
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i]
        // small friction
        s.vx *= 0.995
        s.vy *= 0.995

        repulse(s)

        s.x += s.vx
        s.y += s.vy

        if (s.x < -10) s.x = width + 10
        if (s.x > width + 10) s.x = -10
        if (s.y < -10) s.y = height + 10
        if (s.y > height + 10) s.y = -10

        ctx.beginPath()
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    initStars()
    window.addEventListener("resize", resize)
    canvas.addEventListener("mousemove", handleMove)
    canvas.addEventListener("mouseleave", handleLeave)

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousemove", handleMove)
      canvas.removeEventListener("mouseleave", handleLeave)
    }
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden
    />
  )
}
