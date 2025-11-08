"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface AnimatedHamburgerProps {
  isOpen: boolean
  className?: string
}

export function AnimatedHamburger({ isOpen, className }: AnimatedHamburgerProps) {
  return (
    <div className={cn("flex flex-col justify-center items-center w-6 h-6", className)}>
      <span
        className={cn(
          "block h-0.5 w-6 bg-current transition-all duration-300 ease-out origin-center",
          isOpen ? "rotate-45 translate-y-1" : "translate-y-0"
        )}
      />
      <span
        className={cn(
          "block h-0.5 w-6 bg-current transition-all duration-300 ease-out mt-1",
          isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
        )}
      />
      <span
        className={cn(
          "block h-0.5 w-6 bg-current transition-all duration-300 ease-out mt-1 origin-center",
          isOpen ? "-rotate-45 -translate-y-2" : "translate-y-0"
        )}
      />
    </div>
  )
}