"use client";
import React, { useState, useEffect, ComponentPropsWithoutRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

type HoverBorderGradientProps<T extends React.ElementType = 'div'> = {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  duration?: number;
  clockwise?: boolean;
  gradientColor?: string;
  as?: T;
} & ComponentPropsWithoutRef<T>

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "div",
  duration = 1,
  clockwise = true,
  gradientColor = "#3275F8",
  ...props
}: HoverBorderGradientProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  useEffect(() => {
    const rotateDirection = (currentDirection: Direction): Direction => {
      const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
      const currentIndex = directions.indexOf(currentDirection);
      const nextIndex = clockwise
        ? (currentIndex - 1 + directions.length) % directions.length
        : (currentIndex + 1) % directions.length;
      return directions[nextIndex];
    };

    const interval = setInterval(() => {
      setDirection((prevState) => rotateDirection(prevState));
    }, duration * 1000);
    return () => clearInterval(interval);
  }, [duration, clockwise]);

  const getBackgroundStyle = () => {
    const positions = {
      TOP: "50% 0%",
      RIGHT: "100% 50%",
      BOTTOM: "50% 100%",
      LEFT: "0% 50%",
    };

    if (hovered) {
      return {
        background: `
          radial-gradient(
            circle at ${positions[direction]},
            ${gradientColor} 0%,
            ${gradientColor}80 10%,
            ${gradientColor}40 30%,
            transparent 50%
          ),
          radial-gradient(
            circle at 50% 50%,
            ${gradientColor}20 0%,
            transparent 70%
          )
        `,
      };
    }

    return {
      background: `
        radial-gradient(
          circle at ${positions[direction]},
          ${gradientColor}80 0%,
          ${gradientColor}40 20%,
          transparent 40%
        )
      `,
    };
  };

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative rounded-xl p-[2px] overflow-hidden",
        containerClassName
      )}
      {...props}
    >
      {/* Animated gradient border */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        animate={getBackgroundStyle()}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        style={{
          opacity: hovered ? 1 : 0.7,
        }}
      />
      
      {/* Additional glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: hovered ? 0.4 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          background: `
            radial-gradient(
              circle at 50% 50%,
              ${gradientColor}40 0%,
              transparent 70%
            )
          `,
          filter: "blur(20px)",
        }}
      />
      
      {/* Inner content */}
      <div
        className={cn(
          "relative w-full h-full bg-bg-black rounded-xl z-10",
          className
        )}
      >
        {children}
      </div>
    </Tag>
  );
}