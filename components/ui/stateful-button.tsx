"use client"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import type React from "react"
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion"

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  className?: string
  children: React.ReactNode
  isLoading?: boolean
}

export const StatefulButton = ({ className, children, isLoading, ...props }: ButtonProps) => {
  return (
    <motion.button
      layout
      className={cn(
        "group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-accent-blue to-accent-purple font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] transition-all duration-300 ease-out hover:shadow-[0px_0px_20px_0px_#6366f1]",
        className
      )}
      {...props}
    >
      <motion.div layout className="flex items-center justify-center gap-2">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.svg
              key="loader"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </motion.svg>
          ) : (
            <motion.span
              key="text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {children}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  )
}