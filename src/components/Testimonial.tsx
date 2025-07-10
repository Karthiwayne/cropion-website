'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, MapPin, Sprout } from 'lucide-react'

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: "When I first heard about Cropion's pilot program, I was skeptical about AI helping with farming. But after one season, our corn yield increased by 32% and we cut our herbicide costs in half. The weed detection system caught problems I would have missed until it was too late.",
      author: "Maria Santos",
      role: "Corn & Soybean Farmer",
      location: "Iowa",
      farmType: "320-acre family farm",
      image: "https://images.pexels.com/photos/7728020/pexels-photo-7728020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      quote: "The rovers worked around the clock during our busiest season, which was a game-changer for our small operation. We saved about $8,000 in labor costs and caught a potential pest outbreak early that could have cost us the entire tomato crop.",
      author: "James Mitchell",
      role: "Organic Vegetable Farmer", 
      location: "California Central Valley",
      farmType: "85-acre organic farm",
      image: "https://images.pexels.com/photos/7551728/pexels-photo-7551728.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      quote: "I've been farming for 30 years, and this technology impressed me more than I expected. The soil monitoring helped us optimize our irrigation schedule, reducing water usage by 40% while actually improving our wheat quality.",
      author: "Robert Chen",
      role: "Wheat & Barley Farmer",
      location: "Nebraska",
      farmType: "1,200-acre grain operation",
      image: "https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      quote: "As a young farmer just starting out, Cropion's pilot program gave me confidence I didn't have before. The real-time alerts helped me make better decisions, and I ended up with 25% better yields than my neighbors in my first year.",
      author: "Sarah Williams",
      role: "Mixed Crop Farmer",
      location: "Ohio",
      farmType: "150-acre diversified farm",
      image: "https://images.pexels.com/photos/7728020/pexels-photo-7728020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      quote: "The data insights were incredible - I learned things about my fields that I never knew after farming them for 15 years. The precision application feature alone saved us $3,500 in fertilizer costs while improving our cotton yield by 18%.",
      author: "David Rodriguez",
      role: "Cotton Farmer",
      location: "Texas",
      farmType: "450-acre cotton farm",
      image: "https://images.pexels.com/photos/7551728/pexels-photo-7551728.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ]

  // Auto-swipe functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 6000) // Change testimonial every 6 seconds

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
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 right-16 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-16 left-16 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Sprout className="w-6 h-6 text-white" />
            </div>
            <span className="text-white/90 font-medium uppercase tracking-wide text-sm">Pilot Program Results</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Farmers, Real Results
          </h2>
          <p className="text-white/90 text-xl max-w-3xl mx-auto leading-relaxed">
            Hear from the farmers who participated in our pilot program and experienced 
            firsthand how Cropion transformed their agricultural operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Testimonial */}
          <div className="text-white">
            <div className="mb-8">
              <div className="text-6xl text-white/20 font-serif mb-4">"</div>
              <blockquote className="text-xl leading-relaxed mb-8 min-h-[140px] flex items-center">
                {testimonials[currentIndex].quote}
              </blockquote>
            </div>
            
            {/* Author Info */}
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">
                    {testimonials[currentIndex].author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-white text-lg mb-1">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-white/80 text-sm mb-2">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="flex items-center space-x-4 text-white/70 text-sm">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{testimonials[currentIndex].location}</span>
                    </div>
                    <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                    <span>{testimonials[currentIndex].farmType}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={goToPrevious}
                  className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                
                <button
                  onClick={goToNext}
                  className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors backdrop-blur-sm"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-white scale-110' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image 
                src={testimonials[currentIndex].image}
                alt={`Farm operation - ${testimonials[currentIndex].author}`}
                width={600}
                height={400}
                className="w-full h-96 object-cover transition-all duration-500"
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 max-w-xs">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0ea47a] mb-1">
                  {currentIndex === 0 ? '32%' : 
                   currentIndex === 1 ? '$8K' :
                   currentIndex === 2 ? '40%' :
                   currentIndex === 3 ? '25%' : '18%'}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {currentIndex === 0 ? 'Yield Increase' : 
                   currentIndex === 1 ? 'Cost Savings' :
                   currentIndex === 2 ? 'Water Reduction' :
                   currentIndex === 3 ? 'Better Yields' : 'Cotton Improvement'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Program Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '50+', label: 'Pilot Participants' },
            { value: '15K', label: 'Acres Monitored' },
            { value: '35%', label: 'Avg. Yield Increase' },
            { value: '98%', label: 'Satisfaction Rate' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/80 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to join our success stories?
            </h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Be part of the next generation of farmers using AI to transform agriculture. 
              Start your journey with Cropion today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#0ea47a] hover:bg-gray-100 px-8 py-4 rounded-xl transition-all duration-200 font-medium shadow-lg hover:shadow-xl">
                Join Pilot Program
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#0ea47a] px-8 py-4 rounded-xl transition-all duration-200 font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial