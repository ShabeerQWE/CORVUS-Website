"use client"
import type React from "react"
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string
  children: React.ReactNode
  as?: React.ElementType
  containerClassName?: string
  borderClassName?: string
  duration?: number
  className?: string
} & React.HTMLAttributes<HTMLElement>) {
  const content = (
    <>
      <div className="absolute inset-0" style={{ borderRadius: `calc(${borderRadius} * 0.96)`, position: "relative" }}>
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn("h-20 w-20 bg-[radial-gradient(var(--accent-blue-light)_40%,transparent_60%)] opacity-[0.8]", borderClassName)}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-border-gray bg-bg-black text-sm text-white antialiased backdrop-blur-xl",
          className,
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
          position: "relative"
        }}
      >
        {children}
      </div>
    </>
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Element = Component as any;
  
  return (
    <Element
      className={cn("relative h-16 w-40 overflow-hidden bg-transparent p-[1px] text-xl", containerClassName)}
      style={{
        borderRadius: borderRadius,
        position: "relative"
      }}
      {...otherProps}
    >
      {content}
    </Element>
  )
}

export const MovingBorder = ({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode
  duration?: number
  rx?: string
  ry?: string
} & React.SVGAttributes<SVGElement>) => {
  const pathRef = useRef<SVGPathElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const progress = useMotionValue<number>(0)
  const [pathData, setPathData] = useState<string>("")

  useEffect(() => {
    const updatePath = () => {
      if (!svgRef.current) return
      
      const width = svgRef.current.clientWidth || 100
      const height = svgRef.current.clientHeight || 100
      
      // Convert percentage-based rx/ry to actual pixels
      const rxValue = rx ? (parseFloat(rx) / 100) * width : 0
      const ryValue = ry ? (parseFloat(ry) / 100) * height : 0
      
      // Create a rectangular path with optional rounded corners
      if (rxValue > 0 || ryValue > 0) {
        setPathData(
          `M ${rxValue},0
           L ${width - rxValue},0
           Q ${width},0 ${width},${ryValue}
           L ${width},${height - ryValue}
           Q ${width},${height} ${width - rxValue},${height}
           L ${rxValue},${height}
           Q 0,${height} 0,${height - ryValue}
           L 0,${ryValue}
           Q 0,0 ${rxValue},0 Z`
        )
      } else {
        setPathData(`M 0,0 L ${width},0 L ${width},${height} L 0,${height} Z`)
      }
    }

    updatePath()
    window.addEventListener('resize', updatePath)
    return () => window.removeEventListener('resize', updatePath)
  }, [rx, ry])

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength()
    if (length) {
      const pxPerMillisecond = length / duration
      progress.set((time * pxPerMillisecond) % length)
    }
  })

  const x = useTransform(progress, (val) => {
    try {
      return pathRef.current?.getPointAtLength(val).x ?? 0
    } catch {
      return 0
    }
  })
  
  const y = useTransform(progress, (val) => {
    try {
      return pathRef.current?.getPointAtLength(val).y ?? 0
    } catch {
      return 0
    }
  })

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ position: "absolute", width: "100%", height: "100%" }}
        {...otherProps}
      >
        <path
          fill="none"
          stroke="none"
          d={pathData}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
          willChange: "transform"
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}