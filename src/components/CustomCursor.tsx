"use client"

import { useState, useEffect, useRef } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const isDesktopRef = useRef(true)

  useEffect(() => {
    // Check if desktop
    isDesktopRef.current = window.innerWidth >= 768
    
    const updatePosition = (e: MouseEvent) => {
      if (cursorRef.current && isDesktopRef.current) {
        setPosition({ x: e.clientX, y: e.clientY })
      }
    }

    const handleClick = () => {
      if (isDesktopRef.current) {
        setClicked(true)
        setTimeout(() => setClicked(false), 300)
      }
    }

    // Only attach listeners if on desktop
    if (isDesktopRef.current) {
      window.addEventListener("mousemove", updatePosition)
      window.addEventListener("click", handleClick)
    }

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${clicked ? "cursor-click" : ""} hidden md:block`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  )
}

