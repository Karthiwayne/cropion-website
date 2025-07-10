'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import Link from 'next/link'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "What is Cropion?",
      answer: "Cropion is an AI-powered agricultural platform that provides autonomous farming rovers and smart monitoring systems to help farmers optimize their operations and increase yields."
    },
    {
      question: "How does Cropion work?",
      answer: "Our system uses advanced computer vision and machine learning to detect weeds, monitor crop health, and provide real-time insights about your farm operations."
    },
    {
      question: "Can I use it for commercial projects?",
      answer: "Yes, Cropion is designed for commercial agricultural operations of all sizes, from small farms to large-scale enterprises."
    },
    {
      question: "What are components?",
      answer: "Components are modular parts of our system including rovers, sensors, monitoring stations, and software modules that work together to create a complete farming solution."
    },
    {
      question: "How often are new components added?",
      answer: "We regularly update our platform with new features and components based on user feedback and technological advances in agriculture."
    }
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="text-sm text-[#0ea47a] font-medium mb-4 uppercase tracking-wide">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything you need to know
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[#0ea47a]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#0ea47a]" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-6">
              <Link 
                href="/faq"
                className="flex items-center space-x-2 text-[#0ea47a] hover:text-[#0a7557] font-medium transition-colors"
              >
                <span>See more FAQs</span>
                <Plus className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ