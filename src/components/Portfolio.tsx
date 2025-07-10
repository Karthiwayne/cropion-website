import { 
  Users, 
  Leaf, 
  Target, 
  DollarSign, 
  Globe, 
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Sprout,
  Shield,
  BarChart3,
  Clock,
  Droplets,
  Recycle,
  Heart,
  BookOpen,
  TrendingUp,
  Zap
} from 'lucide-react'

const Portfolio = () => {
  const benefits = [
    {
      icon: Users,
      title: "Accessible Farming for Everyone",
      description: "Turn your agricultural dreams into reality with step-by-step AI guidance",
      features: [
        "Turn your agricultural dreams into reality with step-by-step AI guidance",
        "Perfect for beginners with no prior farming experience",
        "Get expert-level advice 24/7 through our intelligent system"
      ],
      color: "from-[#0ea47a] to-[#12d39d]",
      bgColor: "bg-[#0ea47a]/10",
      iconColor: "text-[#0ea47a]"
    },
    {
      icon: Leaf,
      title: "Smart Organic Farming Support",
      description: "Comprehensive organic farming practices and eco-friendly solutions",
      features: [
        "Detailed organic farming practices and recommendations",
        "Chemical-free pest management solutions",
        "Natural soil enrichment techniques",
        "Crop rotation planning for sustainable agriculture"
      ],
      color: "from-[#12d39d] to-[#0ea47a]",
      bgColor: "bg-[#12d39d]/10",
      iconColor: "text-[#12d39d]"
    },
    {
      icon: Target,
      title: "Personalized Crop Management",
      description: "Custom growing schedules and real-time monitoring for optimal results",
      features: [
        "Custom growing schedules based on your location and climate",
        "Real-time plant health monitoring",
        "Early disease detection and prevention",
        "Precise irrigation and fertilization schedules"
      ],
      color: "from-[#0ea47a] to-[#12d39d]",
      bgColor: "bg-[#0ea47a]/10",
      iconColor: "text-[#0ea47a]"
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Agriculture",
      description: "Maximize profits while minimizing costs through AI optimization",
      features: [
        "Reduce resource wastage through AI-optimized planning",
        "Lower labor costs with automated monitoring",
        "Maximize yield while minimizing inputs",
        "Smart inventory management suggestions"
      ],
      color: "from-[#12d39d] to-[#0ea47a]",
      bgColor: "bg-[#12d39d]/10",
      iconColor: "text-[#12d39d]"
    },
    {
      icon: Globe,
      title: "Environmental Sustainability",
      description: "Eco-friendly practices that protect our planet for future generations",
      features: [
        "Eco-friendly farming practices",
        "Reduced water consumption through smart irrigation",
        "Minimal carbon footprint",
        "Biodiversity preservation techniques"
      ],
      color: "from-[#0ea47a] to-[#12d39d]",
      bgColor: "bg-[#0ea47a]/10",
      iconColor: "text-[#0ea47a]"
    },
    {
      icon: MessageCircle,
      title: "Community Support",
      description: "Connect with fellow farmers and share knowledge for collective growth",
      features: [
        "Connect with other Cropion users",
        "Share experiences and best practices",
        "Access to farming success stories",
        "Regular system updates based on user feedback"
      ],
      color: "from-[#12d39d] to-[#0ea47a]",
      bgColor: "bg-[#12d39d]/10",
      iconColor: "text-[#12d39d]"
    }
  ]

  const stats = [
    { icon: TrendingUp, value: "40%", label: "Average Yield Increase", color: "text-[#0ea47a]" },
    { icon: DollarSign, value: "60%", label: "Cost Reduction", color: "text-[#12d39d]" },
    { icon: Droplets, value: "35%", label: "Water Savings", color: "text-[#0ea47a]" },
    { icon: Clock, value: "24/7", label: "AI Monitoring", color: "text-[#12d39d]" }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="text-sm text-[#0ea47a] font-medium mb-4 uppercase tracking-wide">
            BENEFITS OF USING CROPION
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your AI-Powered Farming Companion
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your agricultural operations with intelligent automation, sustainable practices, 
            and expert guidance that makes farming accessible to everyone.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 border border-gray-100">
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#0ea47a]/20 transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${benefit.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0ea47a] transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {benefit.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#0ea47a] to-[#12d39d] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <button className={`text-[#0ea47a] hover:text-[#0a7557] font-medium flex items-center space-x-2 transition-colors group-hover:translate-x-1 duration-300`}>
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Success Stories Section */}
        <div className="bg-gradient-to-r from-[#0ea47a] to-[#12d39d] rounded-3xl p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-8 right-8 w-32 h-32 border border-white rounded-full"></div>
            <div className="absolute bottom-8 left-8 w-24 h-24 border border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
          </div>

          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-semibold">Success Stories</span>
                </div>
                
                <h3 className="text-3xl font-bold mb-6">
                  Join thousands of farmers already transforming their operations
                </h3>
                
                <p className="text-white/90 mb-8 leading-relaxed">
                  From small family farms to large agricultural enterprises, Cropion users are seeing 
                  remarkable results in yield improvement, cost reduction, and sustainable practices.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "95% of users report increased crop yields within first season",
                    "Average 40% reduction in resource waste and operational costs",
                    "100% satisfaction rate with our AI guidance system",
                    "Active community of 10,000+ farmers sharing knowledge"
                  ].map((stat, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                      <span className="text-white/90">{stat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-[#0ea47a] hover:bg-gray-100 px-8 py-4 rounded-xl transition-all duration-200 font-medium flex items-center justify-center space-x-2 shadow-lg">
                    <BookOpen className="w-5 h-5" />
                    <span>Read Success Stories</span>
                  </button>
                  
                  <button className="border-2 border-white text-white hover:bg-white hover:text-[#0ea47a] px-8 py-4 rounded-xl transition-all duration-200 font-medium">
                    Join Community
                  </button>
                </div>
              </div>

              {/* Right Content - Feature Highlights */}
              <div className="space-y-6">
                {[
                  {
                    icon: Zap,
                    title: "Instant Setup",
                    description: "Get started in minutes with our intuitive onboarding process"
                  },
                  {
                    icon: Shield,
                    title: "Proven Results",
                    description: "Backed by agricultural science and real-world success stories"
                  },
                  {
                    icon: Recycle,
                    title: "Sustainable Future",
                    description: "Contributing to a more sustainable and profitable agriculture"
                  }
                ].map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div key={index} className="flex items-start space-x-4 bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                        <p className="text-white/80 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to revolutionize your farming?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Join the agricultural revolution and start your journey towards smarter, 
              more sustainable, and profitable farming today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#0ea47a] to-[#12d39d] hover:from-[#0a7557] hover:to-[#0ea47a] text-white px-8 py-4 rounded-xl transition-all duration-200 font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                <Sprout className="w-5 h-5" />
                <span>Start Free Trial</span>
              </button>
              <button className="border-2 border-[#0ea47a] text-[#0ea47a] hover:bg-[#0ea47a] hover:text-white px-8 py-4 rounded-xl transition-all duration-200 font-medium">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio