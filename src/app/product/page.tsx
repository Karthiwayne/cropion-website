'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Lock,
  Smartphone,
  CreditCard,
  UserCheck,
  FileText,
  AlertTriangle,
  Eye,
  Play,
  Star,
  Download,
  Globe,
  Layers,
  Tractor,
  Leaf,
  Camera,
  MapPin,
  TrendingUp,
  Bot
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const ProductPage = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const features = [
    {
      icon: Bot,
      title: "AI Weed Detection",
      description: "Advanced computer vision technology identifies and targets weeds with 99.5% accuracy, reducing herbicide usage by up to 70% while protecting your crops.",
      color: "text-[#0ea47a]",
      bgColor: "bg-[#0ea47a]/10"
    },
    {
      icon: BarChart3,
      title: "Crop Monitoring",
      description: "Real-time health monitoring tracks growth patterns, nutrient levels, and disease indicators to optimize yield and prevent crop loss.",
      color: "text-[#12d39d]",
      bgColor: "bg-[#12d39d]/10"
    },
    {
      icon: Tractor,
      title: "Autonomous Rovers",
      description: "Self-navigating rovers work 24/7 across your fields, performing precise interventions and data collection without human supervision.",
      color: "text-[#0ea47a]",
      bgColor: "bg-[#0ea47a]/10"
    },
    {
      icon: TrendingUp,
      title: "Yield Analytics",
      description: "Predictive analytics forecast harvest yields, optimize planting schedules, and identify opportunities for productivity improvements.",
      color: "text-[#12d39d]",
      bgColor: "bg-[#12d39d]/10"
    },
    {
      icon: Leaf,
      title: "Sustainability Tracking",
      description: "Monitor environmental impact, track carbon footprint, and optimize resource usage for sustainable farming practices.",
      color: "text-[#0ea47a]",
      bgColor: "bg-[#0ea47a]/10"
    },
    {
      icon: Shield,
      title: "Precision Agriculture",
      description: "GPS-guided precision application of fertilizers and treatments ensures optimal resource utilization and minimal environmental impact.",
      color: "text-[#12d39d]",
      bgColor: "bg-[#12d39d]/10"
    }
  ]

  const finalFeatures = [
    {
      icon: Zap,
      title: "Deploy with ease",
      description: "Get your autonomous farming system operational in hours, not weeks. Our plug-and-play rovers integrate seamlessly with existing farm infrastructure."
    },
    {
      icon: Users,
      title: "Scale together",
      description: "From small family farms to large agricultural enterprises, Cropion grows with your operation. Collaborative tools for farm teams and consultants."
    },
    {
      icon: Layers,
      title: "Harvest instantly",
      description: "See immediate results with real-time crop insights, automated interventions, and data-driven recommendations that boost yields from day one."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section - Based on Reference 1 */}
        <section className="py-24 bg-gradient-to-br from-[#e6e6e6] to-[#0ea47a]/5">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <div className="mb-6">
                  <Link 
                    href="/"
                    className="inline-flex items-center space-x-2 text-[#0ea47a] hover:text-[#0a7557] transition-colors mb-6"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Home</span>
                  </Link>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                  Built for the modern farm
                </h1>
                
                <div className="space-y-6 mb-8">
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Cropion revolutionizes agriculture with AI-powered autonomous rovers that detect weeds, 
                    monitor crop health, and optimize farming operations. Experience the future of sustainable 
                    farming with precision agriculture technology that increases yields while reducing costs.
                  </p>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our advanced computer vision and machine learning systems work around the clock to 
                    protect your crops, analyze soil conditions, and provide actionable insights that 
                    transform traditional farming into smart, data-driven agriculture.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-[#0ea47a] to-[#12d39d] hover:from-[#0a7557] hover:to-[#0ea47a] text-white px-8 py-4 rounded-lg transition-all duration-200 font-medium flex items-center justify-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>Watch Demo</span>
                  </button>
                  
                  <button className="border-2 border-[#0ea47a] hover:bg-[#0ea47a] text-[#0ea47a] hover:text-white px-8 py-4 rounded-lg transition-all duration-200 font-medium">
                    Request Quote
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
                  <div>
                    <div className="text-3xl font-bold text-[#0ea47a]">40%</div>
                    <div className="text-sm text-gray-600">Yield Increase</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#0ea47a]">70%</div>
                    <div className="text-sm text-gray-600">Less Herbicide</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#0ea47a]">24/7</div>
                    <div className="text-sm text-gray-600">Monitoring</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Mobile Mockup */}
              <div className="relative">
                <div className="relative mx-auto w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 py-2 bg-white">
                      <span className="text-sm font-medium">9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-black rounded-full"></div>
                          <div className="w-1 h-1 bg-black rounded-full"></div>
                          <div className="w-1 h-1 bg-black rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                        </div>
                        <div className="w-6 h-3 border border-black rounded-sm">
                          <div className="w-4 h-2 bg-black rounded-sm m-0.5"></div>
                        </div>
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="px-6 py-4">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#0ea47a] to-[#12d39d] rounded-lg flex items-center justify-center">
                          <Tractor className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-medium">Cropion Dashboard</span>
                      </div>

                      <div className="mb-6">
                        <div className="text-sm text-gray-600 mb-1">Active Rovers</div>
                        <div className="text-3xl font-bold text-[#0ea47a]">12 Online</div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <div className="text-sm text-gray-600">Weeds Detected</div>
                          <div className="font-semibold">2,847</div>
                          <div className="text-xs text-[#0ea47a]">↓ 23.5%</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Crop Health</div>
                          <div className="font-semibold">94.2%</div>
                          <div className="text-xs text-[#0ea47a]">↑ 5.8%</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm text-gray-600 mb-2">Field Coverage</div>
                        <div className="text-2xl font-bold mb-1 text-[#0ea47a]">85% <span className="text-sm font-normal text-gray-600">complete</span></div>
                        <div className="text-xs text-gray-600">North field sector</div>
                        <div className="text-xs text-[#12d39d]">ETA: 2.5 hours</div>
                      </div>

                      {/* Chart Area */}
                      <div className="h-20 bg-gray-50 rounded-lg mb-4 relative overflow-hidden">
                        <div className="absolute bottom-0 right-8 w-8 h-12 bg-[#0ea47a] rounded-t"></div>
                        <div className="absolute bottom-0 right-16 w-8 h-8 bg-[#12d39d] rounded-t"></div>
                        <div className="absolute bottom-0 right-24 w-8 h-16 bg-[#0ea47a]/70 rounded-t"></div>
                      </div>

                      <div className="text-sm text-gray-600 mb-2">Efficiency Rate</div>
                      <div className="text-xl font-bold text-[#0ea47a]">96.8%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid Section - Based on Reference 2 */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Built for the modern farm
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive AI-powered farming solutions that transform traditional agriculture 
                into smart, sustainable, and profitable operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-[#0ea47a]/20 transition-all duration-300 group">
                    <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    
                    <button className={`${feature.color} hover:underline font-medium flex items-center space-x-2 transition-colors`}>
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )
              })}
            </div>

            {/* Additional Info Section */}
            <div className="mt-20 bg-gradient-to-r from-[#e6e6e6] to-[#0ea47a]/10 rounded-3xl p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Everything you need to scale your farm
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    From small family farms to large agricultural enterprises, Cropion's AI platform 
                    grows with your operation. Get access to advanced analytics, custom integrations, 
                    and dedicated agricultural support specialists.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      'Real-time crop health analytics',
                      'Custom field mapping integration',
                      '24/7 agricultural support team',
                      'Enterprise-grade data security'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#0ea47a]" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#0ea47a]/10">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="font-semibold text-gray-900">Farm Performance</h4>
                      <div className="flex space-x-1">
                        {[1,2,3,4,5].map((star) => (
                          <Star key={star} className="w-4 h-4 text-[#0ea47a] fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Weed Detection Accuracy</span>
                        <span className="font-medium text-[#0ea47a]">99.5%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">System Uptime</span>
                        <span className="font-medium text-[#0ea47a]">99.9%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Coverage Speed</span>
                        <span className="font-medium text-[#0ea47a]">5 acres/hour</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Battery Life</span>
                        <span className="font-medium text-[#0ea47a]">12+ hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section - Based on Reference 3 */}
        <section className="py-24 bg-gradient-to-r from-[#0ea47a] to-[#12d39d] relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
            <div className="absolute top-32 right-20 w-16 h-16 border border-white rounded-full"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white rounded-full"></div>
            <div className="absolute bottom-32 right-1/3 w-24 h-24 border border-white rounded-full"></div>
          </div>

          <div className="container mx-auto px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Built for the modern farm
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {finalFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4">
                      {feature.title}
                    </h3>
                    
                    <p className="text-white/90 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* CTA Buttons */}
            <div className="text-center mt-16">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-[#0ea47a] hover:bg-gray-100 px-8 py-4 rounded-lg transition-all duration-200 font-medium flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Start Free Trial</span>
                </button>
                
                <button className="border-2 border-white text-white hover:bg-white hover:text-[#0ea47a] px-8 py-4 rounded-lg transition-all duration-200 font-medium">
                  Schedule Demo
                </button>
              </div>
              
              <p className="text-white/80 mt-6">
                No setup fees • 30-day money-back guarantee • Cancel anytime
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-[#e6e6e6]">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Trusted by farmers worldwide
              </h2>
              <p className="text-xl text-gray-600">
                See how Cropion is transforming agriculture across the globe
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Cropion increased our corn yield by 35% while reducing herbicide costs by 60%. The ROI was evident within the first season.",
                  author: "Sarah Mitchell",
                  role: "Farm Owner, Mitchell Farms (500 acres)",
                  rating: 5
                },
                {
                  quote: "The autonomous rovers work flawlessly day and night. We've eliminated manual weed scouting and reduced labor costs significantly.",
                  author: "Carlos Rodriguez",
                  role: "Agricultural Manager, Verde Valley Co-op",
                  rating: 5
                },
                {
                  quote: "The real-time crop monitoring helped us prevent a potential disease outbreak that could have cost us $200,000 in losses.",
                  author: "Emily Chen",
                  role: "Precision Agriculture Specialist",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-[#0ea47a]/10">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#0ea47a] fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ProductPage