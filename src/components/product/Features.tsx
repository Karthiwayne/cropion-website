import {
    ArrowRight,
    Shield, 
    BarChart3,
    Tractor,
    Leaf,
    TrendingUp,
    Bot
  } from 'lucide-react'


const Features = () => {
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
    return <section className="py-24 bg-white">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
  Building for every farm — from fields of today to farms of the future
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
    </div>
  </section>
}

export default Features