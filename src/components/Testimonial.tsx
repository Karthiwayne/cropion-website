'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: "After one season with Cropion's pilot program, our corn yield increased by 32% and we cut herbicide costs in half. The weed detection caught problems I would have missed.",
      author: "Maria Santos",
      role: "Corn & Soybean Farmer",
      location: "Iowa",
      image: "https://images.pexels.com/photos/7728020/pexels-photo-7728020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      quote: "We saved $8,000 in labor costs and caught a pest outbreak early that could have cost us the entire tomato crop. The rovers worked around the clock during our busiest season.",
      author: "James Mitchell",
      role: "Organic Vegetable Farmer", 
      location: "California",
      image: "https://images.pexels.com/photos/7551728/pexels-photo-7551728.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      quote: "I've been farming for 30 years, and this technology impressed me. We reduced water usage by 40% while actually improving our wheat quality through better soil monitoring.",
      author: "Robert Chen",
      role: "Wheat & Barley Farmer",
      location: "Nebraska",
      image: "https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ]

  // Auto-swipe functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-sm text-[#0ea47a] font-medium mb-3 uppercase tracking-wide">
            PILOT PROGRAM RESULTS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Farmers, Real Results
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Content - Image */}
              <div className="relative h-64 lg:h-auto">
                <Image 
                  src={testimonials[currentIndex].image}
                  alt={`Farm operation - ${testimonials[currentIndex].author}`}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Right Content - Testimonial */}
              <div className="p-8 lg:p-10">
                {/* Stars */}
                <div className="flex space-x-1 mb-6">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                {/* Author Info */}
                <div className="mb-6">
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentIndex ? 'bg-[#0ea47a]' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={goToPrevious}
                      className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4 text-gray-600" />
                    </button>
                    
                    <button
                      onClick={goToNext}
                      className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 text-center">
            {[
              { value: '50+', label: 'Pilot Participants' },
              { value: '35%', label: 'Avg. Yield Increase' },
              { value: '98%', label: 'Satisfaction Rate' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-2xl font-bold text-[#0ea47a] mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial