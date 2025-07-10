import { MapPin, Settings, Cog, BarChart3, ArrowRight, CheckCircle } from 'lucide-react'

const Steps = () => {
  const steps = [
    {
      icon: MapPin,
      title: "Field Trial",
      description: "Comprehensive field assessment and baseline establishment",
      details: [
        "Assess soil conditions and terrain characteristics",
        "Document existing vegetation patterns",
        "Record baseline measurements and GPS coordinates",
        "Identify optimal deployment zones"
      ]
    },
    {
      icon: Settings,
      title: "Machine Deployment",
      description: "Strategic equipment positioning and system preparation",
      details: [
        "Position autonomous rovers strategically",
        "Calibrate all sensors and navigation systems",
        "Verify wireless connectivity and data transmission",
        "Test operational readiness and safety protocols"
      ]
    },
    {
      icon: Cog,
      title: "Setup Configuration",
      description: "Advanced sensor installation and system synchronization",
      details: [
        "Install precision monitoring sensors",
        "Configure crop-specific parameters",
        "Establish automated data collection protocols",
        "Sync with central management dashboard"
      ]
    },
    {
      icon: BarChart3,
      title: "Crop Monitoring",
      description: "Continuous monitoring and real-time analytics",
      details: [
        "Deploy soil moisture and nutrient sensors",
        "Set up automated alert systems",
        "Schedule regular data collection intervals",
        "Implement predictive analytics dashboard"
      ]
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm text-[#0ea47a] font-medium mb-4 uppercase tracking-wide">
            HOW IT WORKS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get started in four simple steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our streamlined deployment process ensures your autonomous farming system is operational quickly and efficiently.
          </p>
        </div>

        {/* Single Card Container */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-[#0ea47a] to-[#12d39d] px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Deployment Process</h3>
                  <p className="text-white/90">Complete setup in 4 comprehensive steps</p>
                </div>
                <div className="hidden md:flex items-center space-x-2 text-white/80">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Proven Process</span>
                </div>
              </div>
            </div>

            {/* Steps Content */}
            <div className="p-8">
              {/* Desktop Layout - Horizontal */}
              <div className="hidden lg:block">
                <div className="relative">
                  {/* Progress Line */}
                  <div className="absolute top-12 left-12 right-12 h-1 bg-gradient-to-r from-[#0ea47a] via-[#12d39d] to-[#0ea47a] rounded-full opacity-20"></div>
                  
                  <div className="grid grid-cols-4 gap-8">
                    {steps.map((step, index) => {
                      const Icon = step.icon
                      return (
                        <div key={index} className="relative">
                          {/* Step Content */}
                          <div className="text-center">
                            {/* Step Number and Icon */}
                            <div className="relative mb-6">
                              <div className="w-24 h-24 bg-gradient-to-br from-[#0ea47a] to-[#12d39d] rounded-2xl flex items-center justify-center mx-auto shadow-lg relative z-10">
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-white mb-1">{index + 1}</div>
                                  <Icon className="w-6 h-6 text-white mx-auto" />
                                </div>
                              </div>
                            </div>

                            {/* Title and Description */}
                            <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed">{step.description}</p>

                            {/* Details */}
                            <div className="space-y-3 text-left">
                              {step.details.map((detail, detailIndex) => (
                                <div key={detailIndex} className="flex items-start space-x-3">
                                  <div className="w-2 h-2 bg-[#0ea47a] rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-sm text-gray-700 leading-relaxed">{detail}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Connection Arrow */}
                          {index < steps.length - 1 && (
                            <div className="absolute left-full top-12 transform -translate-x-1/2 w-8 flex items-center justify-center z-20">
                              <div className="w-10 h-10 bg-white rounded-full shadow-lg border-2 border-[#0ea47a]/20 flex items-center justify-center">
                                <ArrowRight className="w-5 h-5 text-[#0ea47a]" />
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Tablet Layout - 2x2 Grid */}
              <div className="hidden md:block lg:hidden">
                <div className="grid grid-cols-2 gap-8">
                  {steps.map((step, index) => {
                    const Icon = step.icon
                    return (
                      <div key={index} className="relative">
                        <div className="flex items-start space-x-4">
                          {/* Step Number and Icon */}
                          <div className="w-16 h-16 bg-gradient-to-br from-[#0ea47a] to-[#12d39d] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                            <div className="text-center">
                              <div className="text-lg font-bold text-white">{index + 1}</div>
                              <Icon className="w-4 h-4 text-white mx-auto" />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                            <p className="text-sm text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                            
                            <div className="space-y-2">
                              {step.details.map((detail, detailIndex) => (
                                <div key={detailIndex} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-[#0ea47a] rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-xs text-gray-700 leading-relaxed">{detail}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Mobile Layout - Vertical Stack */}
              <div className="md:hidden space-y-8">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <div key={index} className="relative">
                      <div className="flex items-start space-x-4">
                        {/* Step Number and Icon */}
                        <div className="w-14 h-14 bg-gradient-to-br from-[#0ea47a] to-[#12d39d] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                          <div className="text-center">
                            <div className="text-sm font-bold text-white">{index + 1}</div>
                            <Icon className="w-4 h-4 text-white mx-auto" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                          <p className="text-sm text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                          
                          <div className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-[#0ea47a] rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-gray-700 leading-relaxed">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Vertical Connection Line */}
                      {index < steps.length - 1 && (
                        <div className="absolute left-7 top-16 w-0.5 h-8 bg-gradient-to-b from-[#0ea47a] to-[#12d39d] opacity-30"></div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Card Footer */}
            <div className="bg-gradient-to-r from-[#0ea47a]/5 to-[#12d39d]/5 px-8 py-6 border-t border-gray-100">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h4 className="font-semibold text-gray-900 mb-1">Ready to get started?</h4>
                  <p className="text-sm text-gray-600">Our team will guide you through each step of the process.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-gradient-to-r from-[#0ea47a] to-[#12d39d] hover:from-[#0a7557] hover:to-[#0ea47a] text-white px-6 py-3 rounded-lg transition-all duration-200 font-medium flex items-center space-x-2 shadow-md hover:shadow-lg">
                    <span>Start Deployment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="bg-white border border-[#0ea47a] text-[#0ea47a] hover:bg-[#0ea47a] hover:text-white px-6 py-3 rounded-lg transition-all duration-200 font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-600 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">
            <CheckCircle className="w-4 h-4 text-[#0ea47a]" />
            <span>Typical deployment completed in 2-3 days</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps