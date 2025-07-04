"use client"

import type React from "react"

import { memo, useCallback, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { animate } from "framer-motion"

interface GlowingEffectProps {
  blur?: number
  inactiveZone?: number
  proximity?: number
  spread?: number
  variant?: "default" | "white" | "blue" | "purple" | "green" | "orange"
  glow?: boolean
  className?: string
  disabled?: boolean
  movementDuration?: number
  borderWidth?: number
}
const GlowingEffect = memo(
  ({
    blur = 2,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 35,
    variant = "default",
    glow = false,
    className,
    movementDuration = 2,
    borderWidth = 1.5,
    disabled = false,
  }: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const lastPosition = useRef({ x: 0, y: 0 })
    const animationFrameRef = useRef<number>(0)

    const handleMove = useCallback(
      (e?: MouseEvent | { x: number; y: number }) => {
        if (!containerRef.current) return

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          const element = containerRef.current
          if (!element) return

          const { left, top, width, height } = element.getBoundingClientRect()
          const mouseX = e?.x ?? lastPosition.current.x
          const mouseY = e?.y ?? lastPosition.current.y

          if (e) {
            lastPosition.current = { x: mouseX, y: mouseY }
          }

          const center = [left + width * 0.5, top + height * 0.5]
          const distanceFromCenter = Math.hypot(mouseX - center[0], mouseY - center[1])
          const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone

          if (distanceFromCenter < inactiveRadius) {
            element.style.setProperty("--active", "0")
            return
          }

          const isActive =
            mouseX > left - proximity &&
            mouseX < left + width + proximity &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity

          element.style.setProperty("--active", isActive ? "1" : "0")

          if (!isActive) return

          const currentAngle = Number.parseFloat(element.style.getPropertyValue("--start")) || 0
          const targetAngle = (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) / Math.PI + 90

          const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180
          const newAngle = currentAngle + angleDiff

          animate(currentAngle, newAngle, {
            duration: movementDuration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (value) => {
              element.style.setProperty("--start", String(value))
            },
          })
        })
      },
      [inactiveZone, proximity, movementDuration],
    )

    useEffect(() => {
      if (disabled) return

      const handleScroll = () => handleMove()
      const handlePointerMove = (e: PointerEvent) => handleMove(e)

      window.addEventListener("scroll", handleScroll, { passive: true })
      document.body.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      })

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
        window.removeEventListener("scroll", handleScroll)
        document.body.removeEventListener("pointermove", handlePointerMove)
      }
    }, [handleMove, disabled])

    const getGradient = () => {
      switch (variant) {
        case "white":
          return `repeating-conic-gradient(
            from 236.84deg at 50% 50%,
            var(--black),
            var(--black) calc(25% / var(--repeating-conic-gradient-times))
          )`
        case "blue":
          return `radial-gradient(circle, #4facfe 15%, #4facfe00 25%),
            radial-gradient(circle at 30% 70%, #00f2fe 12%, #00f2fe00 22%),
            radial-gradient(circle at 70% 30%, #4facfe 15%, #4facfe00 25%), 
            repeating-conic-gradient(
              from 236.84deg at 50% 50%,
              #4facfe 0%,
              #00f2fe calc(50% / var(--repeating-conic-gradient-times)),
              #4facfe calc(100% / var(--repeating-conic-gradient-times))
            )`
        case "purple":
          return `radial-gradient(circle, #ff6b9d 15%, #ff6b9d00 25%),
            radial-gradient(circle at 30% 70%, #c44569 12%, #c44569 00 22%),
            radial-gradient(circle at 70% 30%, #ff6b9d 15%, #ff6b9d00 25%), 
            repeating-conic-gradient(
              from 236.84deg at 50% 50%,
              #ff6b9d 0%,
              #c44569 calc(50% / var(--repeating-conic-gradient-times)),
              #ff6b9d calc(100% / var(--repeating-conic-gradient-times))
            )`
        case "green":
          return `radial-gradient(circle, #6bcf7f 15%, #6bcf7f00 25%),
            radial-gradient(circle at 30% 70%, #4ade80 12%, #4ade8000 22%),
            radial-gradient(circle at 70% 30%, #6bcf7f 15%, #6bcf7f00 25%), 
            repeating-conic-gradient(
              from 236.84deg at 50% 50%,
              #6bcf7f 0%,
              #4ade80 calc(50% / var(--repeating-conic-gradient-times)),
              #6bcf7f calc(100% / var(--repeating-conic-gradient-times))
            )`
        case "orange":
          return `radial-gradient(circle, #ffa500 15%, #ffa50000 25%),
            radial-gradient(circle at 30% 70%, #ff8c00 12%, #ff8c0000 22%),
            radial-gradient(circle at 70% 30%, #ffa500 15%, #ffa50000 25%), 
            repeating-conic-gradient(
              from 236.84deg at 50% 50%,
              #ffa500 0%,
              #ff8c00 calc(50% / var(--repeating-conic-gradient-times)),
              #ffa500 calc(100% / var(--repeating-conic-gradient-times))
            )`
        default:
          return `radial-gradient(circle, #ff6b9d 15%, #ff6b9d00 25%),
            radial-gradient(circle at 30% 70%, #ffd93d 12%, #ffd93d00 22%),
            radial-gradient(circle at 70% 30%, #6bcf7f 15%, #6bcf7f00 25%), 
            radial-gradient(circle at 60% 80%, #4facfe 12%, #4facfe00 22%),
            radial-gradient(circle at 20% 20%, #a8edea 10%, #a8edea00 20%),
            repeating-conic-gradient(
              from 236.84deg at 50% 50%,
              #ff6b9d 0%,
              #ffd93d calc(20% / var(--repeating-conic-gradient-times)),
              #6bcf7f calc(40% / var(--repeating-conic-gradient-times)), 
              #4facfe calc(60% / var(--repeating-conic-gradient-times)),
              #a8edea calc(80% / var(--repeating-conic-gradient-times)),
              #ff6b9d calc(100% / var(--repeating-conic-gradient-times))
            )`
      }
    }

    return (
      <>
        <div
          className={cn(
            "pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity",
            glow && "opacity-100",
            variant === "white" && "border-white",
            disabled && "!block",
          )}
        />
        <div
          ref={containerRef}
          style={
            {
              "--blur": `${blur}px`,
              "--spread": spread,
              "--start": "0",
              "--active": "0",
              "--glowingeffect-border-width": `${borderWidth}px`,
              "--repeating-conic-gradient-times": "5",
              "--gradient": getGradient(),
            } as React.CSSProperties
          }
          className={cn(
            "pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity",
            glow && "opacity-100",
            blur > 0 && "blur-[var(--blur)] drop-shadow-lg",
            className,
            disabled && "!hidden",
          )}
        >
          <div
            className={cn(
              "glow",
              "rounded-[inherit]",
              'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',
              "after:[border:var(--glowingeffect-border-width)_solid_transparent]",
              "after:[background:var(--gradient)] after:[background-attachment:fixed]",
              "after:opacity-[var(--active)] after:transition-opacity after:duration-500",
              "after:[mask-clip:padding-box,border-box]",
              "after:[mask-composite:intersect]",
              "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]",
            )}
          />
        </div>
      </>
    )
  },
)

GlowingEffect.displayName = "GlowingEffect"

export { GlowingEffect }