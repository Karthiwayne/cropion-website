'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: "Thanks to Cropion, we built our smart farming system in just a couple of hours and went live! Their extensive library of 500+ components makes it a breeze to create any type of agricultural solution. It's a true time-saver for modern farmers!",
      author: "David Williamson",
      role: "Product Manager at Cropion",
      image: "https://images.pexels.com/photos/7551728/pexels-photo-7551728.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      quote: "The autonomous weed detection has revolutionized our farming operations. We've seen a 40% increase in crop yield and reduced our herbicide usage by 60%. Cropion's AI technology is truly game-changing for sustainable agriculture.",
      author: "Sarah Chen",
      role: "Farm Operations Director",
      image: "https://images.pexels.com/photos/7728020/pexels-photo-7728020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      quote: "Implementation was seamless and the ROI was immediate. Our team was up and running within days, and the real-time monitoring capabilities have given us insights we never had before. Highly recommend Cropion to any serious farming operation.",
      author: "Michael Rodriguez",
      role: "Agricultural Technology Specialist",
      image: "https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      quote: "The precision and accuracy of Cropion's rovers are outstanding. We've been able to reduce labor costs by 35% while improving our crop quality. The customer support team is also incredibly responsive and knowledgeable.",
      author: "Emily Thompson",
      role: "Sustainable Farming Consultant",
      image: "https://images.pexels.com/photos/7728020/pexels-photo-7728020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ]

  // Auto-swipe functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change testimonial every 5 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <section className="py-24 bg-[#0ea47a] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-[#0ea47a] font-bold text-sm">C</span>
              </div>
              <span className="text-white font-medium">Cropion</span>
            </div>
            
            <blockquote className="text-xl leading-relaxed mb-8 min-h-[120px] flex items-center">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            
            <div className="text-white/80 mb-8">
              <div className="font-medium">{testimonials[currentIndex].author}</div>
              <div className="text-sm">{testimonials[currentIndex].role}</div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={goToPrevious}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={goToNext}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <Image 
                src={testimonials[currentIndex].image}
                alt={`Testimonial from ${testimonials[currentIndex].author}`}
                width={600}
                height={400}
                className="w-full h-80 object-cover transition-all duration-500 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial