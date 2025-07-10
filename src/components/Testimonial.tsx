'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: "Working with the Cropion team during their pilot testing has been exciting. The early prototypes show real promise for detecting weeds that I often miss during manual scouting.",
      author: "Sarah Martinez",
      role: "Corn & Soybean Farmer",
      location: "Iowa",
      image: "https://images.pexels.com/photos/7728020/pexels-photo-7728020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      quote: "I've been collaborating with Cropion on field trials for their rover technology. The potential for reducing manual labor while improving crop monitoring is what drew me to participate.",
      author: "Michael Chen",
      role: "Organic Vegetable Farmer", 
      location: "California",
      image: "https://images.pexels.com/photos/7551728/pexels-photo-7551728.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      quote: "As a test partner for Cropion's development program, I'm impressed by their approach to solving real farming challenges. The team listens to farmer feedback and iterates quickly.",
      author: "Jennifer Thompson",
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
    }, 6000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-sm text-[#0ea47a] font-medium mb-4 uppercase tracking-wide">
            DEVELOPMENT PARTNERS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Building with Real Farmers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're working closely with forward-thinking farmers to develop technology that solves real agricultural challenges.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left Content - Image */}
              <div className="lg:col-span-2 relative h-80 lg:h-auto">
                <Image 
                  src={testimonials[currentIndex].image}
                  alt={`Farm operation - ${testimonials[currentIndex].author}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Right Content - Testimonial */}
              <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-[#0ea47a]/10 rounded-2xl flex items-center justify-center mb-8">
                  <Quote className="w-6 h-6 text-[#0ea47a]" />
                </div>

                {/* Quote */}
                <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                {/* Author Info */}
                <div className="mb-8">
                  <div className="font-bold text-gray-900 text-lg mb-1">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-[#0ea47a] font-medium text-sm mb-1">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonials[currentIndex].location}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentIndex 
                            ? 'bg-[#0ea47a] scale-110' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <button
                      onClick={goToPrevious}
                      className="w-10 h-10 bg-white border border-gray-200 hover:border-[#0ea47a] hover:bg-[#0ea47a]/5 rounded-xl flex items-center justify-center transition-all duration-200 group"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-[#0ea47a]" />
                    </button>
                    
                    <button
                      onClick={goToNext}
                      className="w-10 h-10 bg-white border border-gray-200 hover:border-[#0ea47a] hover:bg-[#0ea47a]/5 rounded-xl flex items-center justify-center transition-all duration-200 group"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-[#0ea47a]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Development Status */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[#0ea47a]/5 to-[#12d39d]/5 rounded-2xl p-8 border border-[#0ea47a]/10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Join Our Development Program
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We're actively seeking farming partners to help us refine our technology. 
                Get early access and help shape the future of autonomous farming.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-[#0ea47a] to-[#12d39d] hover:from-[#0a7557] hover:to-[#0ea47a] text-white px-8 py-3 rounded-xl transition-all duration-200 font-medium">
                  Become a Partner
                </button>
                <button className="border-2 border-[#0ea47a] text-[#0ea47a] hover:bg-[#0ea47a] hover:text-white px-8 py-3 rounded-xl transition-all duration-200 font-medium">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial