'use client'

import { useState, useEffect } from 'react'
import LeadPopup from './LeadPopup'

const ScrollPopupManager = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Don't show popup if it has already been shown in this session
    if (hasShown) return

    let scrollTimer: NodeJS.Timeout
    let timeTimer: NodeJS.Timeout
    
    const handleScroll = () => {
      // Clear existing timer
      clearTimeout(scrollTimer)
      
      // Check if user has scrolled at least 30% of the page
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      
      if (scrollPercent > 30) {
        // Set timer to show popup after 3 seconds of scrolling past 30%
        scrollTimer = setTimeout(() => {
          if (!hasShown) {
            setShowPopup(true)
            setHasShown(true)
          }
        }, 3000)
      }
    }

    // Also show popup after user has been on page for 45 seconds
    timeTimer = setTimeout(() => {
      if (!hasShown) {
        setShowPopup(true)
        setHasShown(true)
      }
    }, 45000)

    // Add scroll listener
    window.addEventListener('scroll', handleScroll)

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimer)
      clearTimeout(timeTimer)
    }
  }, [hasShown])

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  return (
    <LeadPopup 
      isOpen={false} 
      onClose={handleClosePopup} 
    />
  )
}

export default ScrollPopupManager