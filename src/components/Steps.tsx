import { MapPin, Settings, Cog, BarChart3, ArrowRight, CheckCircle, PhoneCall } from 'lucide-react'

const Steps = () => {
  const steps = [
    {
      icon: MapPin,
      title: "Initial Field Study",
      description: "Exploring real-world conditions and identifying R&D challenges",
      details: [
        "Select test plots with diverse terrain and crop types",
        "Gather environmental and soil data to inform design",
        "Identify logistical and practical deployment issues",
        "Map early risks and edge cases in the field"
      ]
    },
    {
      icon: Settings,
      title: "Prototype Testing",
      description: "Testing early rover builds under real conditions",
      details: [
        "Deploy initial prototypes to test mobility and safety",
        "Evaluate hardware performance in live terrain",
        "Manually log operational issues and breakdowns",
        "Refine mechanics and electronics based on observations"
      ]
    },
    {
      icon: Cog,
      title: "Sensor Integration",
      description: "Experimenting with sensory inputs and data capture logic",
      details: [
        "Test soil, proximity, and visual sensors for responsiveness",
        "Validate data quality and environmental noise resistance",
        "Integrate with onboard processing units",
        "Iterate firmware for stability and accuracy"
      ]
    },
    {
      icon: BarChart3,
      title: "Autonomy Trials",
      description: "Early tests for navigation, task execution, and error handling",
      details: [
        "Implement basic autonomous routines (e.g., straight path driving)",
        "Simulate obstacle detection and avoidance",
        "Manually validate weeding or crop interaction modules",
        "Document AI feedback loops and training needs"
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
            Building the Future, Step by Step
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our R&D journey is focused on iterating, testing, and learning from the field as we develop full autonomy for farming.
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
                              <div className="w-10 h-10 bg-white rounded-full shadow-lg border-2 border-[#0ea47a]/20 flex items-center justify-center mt-[-16px]">
                                <ArrowRight className="w-10 h-5 text-[#0ea47a]" />
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
                        <div className="absolute left-7 top-16 w-0.5 h-80 md:h-8 bg-gradient-to-b from-[#0ea47a] to-[#12d39d] opacity-30"></div>
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
                  <h4 className="font-semibold text-gray-900 mb-1">Join us in shaping the future</h4>
                  <p className="text-sm text-gray-600">
                    We're in active development — collaborate, test, or give feedback on the next generation of agri-autonomy.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-gradient-to-r from-[#0ea47a] to-[#12d39d] hover:from-[#0a7557] hover:to-[#0ea47a] text-white px-6 py-3 rounded-lg transition-all duration-200 font-medium flex items-center space-x-2 shadow-md hover:shadow-lg">
                    <span>Contact us</span>
                    <PhoneCall className="w-4 h-4" />
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
            <span>Currently in field testing – insights evolving every day</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Steps