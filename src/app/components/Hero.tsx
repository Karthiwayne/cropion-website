'use client'

import { useState } from 'react'
import Image from 'next/image'

const Hero = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Subscribed:', email)
  }

  return (
    <section className="min-h-screen relative overflow-hidden bg-white pt-16">
      {/* Background Image with Rounded Corners */}
      <div className="relative mx-6 lg:mx-8 mt-8 mb-8 h-[calc(100vh-8rem)] rounded-3xl overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/7728020/pexels-photo-7728020.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Smart farming background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end w-full">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Everything you need
                <br />
                to build a smart farm
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-lg">
                Cropion makes it easy to deploy autonomous farming rovers in minutes.
                Monitor, analyze, and optimize your agricultural operations.
              </p>
            </div>

            {/* Right Subscription Form */}
            <div className="lg:flex lg:justify-end">
              <div className="max-w-md w-full">
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      className="w-full px-4 py-3 bg-white/90 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-[#0ea47a] focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#0ea47a] to-[#12d39d] hover:from-[#0a7557] hover:to-[#0ea47a] text-white px-6 py-3 rounded-lg transition-all duration-200 font-medium"
                  >
                    Subscribe
                  </button>
                </form>

                {/* Social proof */}
                <div className="mt-6 flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-[#0ea47a] rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-[#12d39d] rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-[#0a7557] rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm text-white/90 font-medium">25k+ others subscribed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero