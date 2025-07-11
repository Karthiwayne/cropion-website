import {
  Leaf,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Sprout,
  Shield,
  Clock,
  Droplets,
  Recycle,
  Heart,
  BookOpen,
  TrendingUp,
  Zap,
  FlaskConical,
  BrainCircuit,
  Coins,
  Tractor,
  UsersRound
} from 'lucide-react'
import {
  // for Open Collaboration
} from 'lucide-react'

const Portfolio = () => {


  const benefits = [
    {
      icon: FlaskConical,
      title: "Research-Driven Autonomy",
      description: "We're pioneering next-gen autonomous farming through rigorous field experimentation.",
      features: [
        "Actively prototyping AI-powered navigation and control",
        "Designed for diverse Indian field conditions",
        "Built hand-in-hand with farmers and experts"
      ],
      color: "from-[#0ea47a] to-[#12d39d]",
      bgColor: "bg-[#0ea47a]/10",
      iconColor: "text-[#0ea47a]"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Innovation",
      description: "Our R&D is focused on minimizing ecological impact through smarter farming systems.",
      features: [
        "Testing chemical-free weed removal solutions",
        "Experimenting with low-water precision systems",
        "Prioritizing renewable energy compatibility",
        "Sustainable tilling and planting prototypes"
      ],
      color: "from-[#12d39d] to-[#0ea47a]",
      bgColor: "bg-[#12d39d]/10",
      iconColor: "text-[#12d39d]"
    },
    {
      icon: BrainCircuit,
      title: "Crop-Specific Learning",
      description: "We're gathering insights across multiple crops to tune AI behavior and decision-making.",
      features: [
        "Field trials for rice, millets, pulses, and vegetables",
        "Tailored sensor calibrations for Indian soils",
        "Predictive models under development",
        "Real-world feedback shaping iterations"
      ],
      color: "from-[#0ea47a] to-[#12d39d]",
      bgColor: "bg-[#0ea47a]/10",
      iconColor: "text-[#0ea47a]"
    },
    {
      icon: Coins,
      title: "Making Autonomy Affordable",
      description: "We're testing ways to reduce cost without compromising performance.",
      features: [
        "Low-cost components under real stress testing",
        "Open-source firmware where feasible",
        "Iterative design to reduce maintenance",
        "Local supply chain research for scaling"
      ],
      color: "from-[#12d39d] to-[#0ea47a]",
      bgColor: "bg-[#12d39d]/10",
      iconColor: "text-[#12d39d]"
    },
    {
      icon: Tractor,
      title: "Built for Indian Agriculture",
      description: "Designed with Indian climate, land types, and labor realities in mind.",
      features: [
        "Handling uneven, rugged terrain through dynamic path planning",
        "Compact form factor for smallholder farms",
        "Collaborating with regional agri bodies",
        "Language support and simple UI in progress"
      ],
      color: "from-[#0ea47a] to-[#12d39d]",
      bgColor: "bg-[#0ea47a]/10",
      iconColor: "text-[#0ea47a]"
    },
    {
      icon: UsersRound,
      title: "Open Collaboration",
      description: "We're inviting farmers, engineers, and agri-innovators to co-build the future.",
      features: [
        "Early adopter program for pilot users",
        "Monthly feedback loops shaping dev direction",
        "Workshops, interviews, and test runs",
        "Transparent documentation and updates"
      ],
      color: "from-[#12d39d] to-[#0ea47a]",
      bgColor: "bg-[#12d39d]/10",
      iconColor: "text-[#12d39d]"
    }
  ]



  const stats = [
    {
      icon: TrendingUp,
      value: "Exploring Yield Boosts",
      label: "Initial tests show promising crop responses",
      color: "text-[#0ea47a]"
    },
    {
      icon: DollarSign,
      value: "Optimizing Costs",
      label: "Focusing on reducing input and labor expenses",
      color: "text-[#12d39d]"
    },
    {
      icon: Droplets,
      value: "Water-Smart Prototypes",
      label: "Low-water systems in early validation phase",
      color: "text-[#0ea47a]"
    },
    {
      icon: Clock,
      value: "Real-Time Monitoring",
      label: "24/7 sensing & logging under field conditions",
      color: "text-[#12d39d]"
    }
  ]


  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="text-sm text-[#0ea47a] font-medium mb-4 uppercase tracking-wide">
            WHY CROPION, EVEN IN R&D?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Building Smarter Farms — Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cropion is in active research and development. We're prototyping, testing, and evolving
            intelligent farm robotics to meet the unique needs of Indian agriculture.
          </p>

        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon; <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="flex items-center bg-white shadow-md border border-gray-100 rounded-2xl p-6"
                >
                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-gray-50 border border-gray-100 mr-5 flex-shrink-0">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
          
                  {/* Stat Content */}
                  <div>
                    {/* <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div> */}
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
          
            </div>
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg border border-gray-100 p-6 h-full min-h-[220px] justify-between"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 border border-gray-100 bg-gray-50">
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className={`text-xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            );
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
                  Early Learnings From the FieldWant to shape the future of farming with us?
                </h3>

                <p className="text-white/90 mb-8 leading-relaxed">
                  Our prototypes are currently undergoing testing across multiple plots and conditions. Here's
                  what we're discovering so far as we co-create the future of farming with early users.
                </p>

                <div className="space-y-4 mb-8">
                  {
                    [
                      "Improved weed removal effectiveness over manual trials",
                      "Reduction in labor costs during early-stage weeding",
                      "Increased crop visibility through real-time rover imaging",
                      "Great enthusiasm from early farmer collaborators"
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
              Want to shape the future of farming with us?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Join the agricultural revolution and start your journey towards smarter,
              more sustainable, and profitable farming today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#0ea47a] to-[#12d39d] hover:from-[#0a7557] hover:to-[#0ea47a] text-white px-8 py-4 rounded-xl transition-all duration-200 font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                <Sprout className="w-5 h-5" />
                <span>Join Our Pilot Program</span>
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