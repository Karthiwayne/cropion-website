'use client'

import { useState } from 'react'
import { Plus, Minus, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqSections = [
    {
      title: "GENERAL",
      faqs: [
        {
          question: "What is Cropion?",
          answer: "Cropion is an AI-powered agricultural platform that provides autonomous farming rovers and smart monitoring systems to help farmers optimize their operations and increase yields through advanced computer vision and machine learning technologies."
        },
        {
          question: "How does Cropion work?",
          answer: "Our system uses advanced computer vision and machine learning to detect weeds, monitor crop health, and provide real-time insights about your farm operations. The autonomous rovers navigate through fields, collecting data and performing targeted interventions."
        },
        {
          question: "What are components?",
          answer: "Components are modular parts of our system including rovers, sensors, monitoring stations, and software modules that work together to create a complete farming solution. Each component is designed to integrate seamlessly with others."
        },
        {
          question: "How often are new components added?",
          answer: "We regularly update our platform with new features and components based on user feedback and technological advances in agriculture. Major updates are released quarterly, with minor improvements deployed monthly."
        },
        {
          question: "Do I need to know how to use Figma?",
          answer: "No technical knowledge is required to operate Cropion systems. Our intuitive dashboard and mobile app make it easy for farmers of all technical backgrounds to monitor and control their agricultural operations."
        }
      ]
    },
    {
      title: "LICENSE",
      faqs: [
        {
          question: "Can I use it for commercial projects?",
          answer: "Yes, Cropion is designed for commercial agricultural operations of all sizes, from small farms to large-scale enterprises. Our licensing model scales with your operation size and needs."
        },
        {
          question: "What does 'Lifetime Access' mean?",
          answer: "Lifetime Access means you get permanent access to the Cropion platform and all future updates without recurring subscription fees. This includes hardware maintenance, software updates, and customer support."
        },
        {
          question: "Can I upgrade to a team license?",
          answer: "Yes, you can upgrade to a team license at any time. Team licenses allow multiple users to access and manage the same farming operation, with role-based permissions and collaborative features."
        }
      ]
    },
    {
      title: "LICENSE",
      faqs: [
        {
          question: "Can I get an invoice?",
          answer: "Yes, we provide detailed invoices for all purchases. Invoices are automatically generated and sent to your registered email address. You can also download invoices from your account dashboard."
        },
        {
          question: "Is it a one-time payment?",
          answer: "Our Lifetime Access plan is a one-time payment with no recurring fees. However, we also offer flexible subscription plans for different business needs, including monthly and annual options."
        }
      ]
    },
    {
      title: "SUPPORT",
      faqs: [
        {
          question: "Do you offer technical support?",
          answer: "Yes, we provide comprehensive technical support including 24/7 chat support, phone support during business hours, on-site installation assistance, and extensive documentation and video tutorials."
        },
        {
          question: "What is your refund policy?",
          answer: "We offer a 30-day money-back guarantee for all purchases. If you're not satisfied with Cropion within the first 30 days, we'll provide a full refund. Hardware returns must be in original condition."
        }
      ]
    }
  ]

  // const allFaqs = faqSections.flatMap(section => section.faqs)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/"
              className="inline-flex items-center space-x-2 text-[#0ea47a] hover:text-[#0a7557] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Content */}
            <div>
              <div className="text-sm text-[#0ea47a] font-medium mb-4 uppercase tracking-wide">
                FREQUENTLY ASKED QUESTIONS
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Everything you need to know
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Find answers to common questions about Cropion&apos;s AI-powered farming solutions, 
                licensing, support, and more. Can&apos;t find what you&apos;re looking for? Contact our support team.
              </p>
            </div>
            
            {/* Right FAQ Content */}
            <div className="space-y-8">
              {faqSections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h3 className="text-sm font-medium text-[#0ea47a] mb-4 uppercase tracking-wide">
                    {section.title}
                  </h3>
                  <div className="space-y-4">
                    {section.faqs.map((faq, faqIndex) => {
                      const globalIndex = faqSections.slice(0, sectionIndex).reduce((acc, sec) => acc + sec.faqs.length, 0) + faqIndex
                      return (
                        <div key={faqIndex} className="bg-white rounded-lg border border-gray-200">
                          <button
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                            onClick={() => setOpenIndex(openIndex === globalIndex ? -1 : globalIndex)}
                          >
                            <span className="font-medium text-gray-900">{faq.question}</span>
                            {openIndex === globalIndex ? (
                              <Minus className="w-5 h-5 text-[#0ea47a] flex-shrink-0" />
                            ) : (
                              <Plus className="w-5 h-5 text-[#0ea47a] flex-shrink-0" />
                            )}
                          </button>
                          {openIndex === globalIndex && (
                            <div className="px-6 pb-4">
                              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
              
              {/* Contact Support */}
              <div className="bg-[#e6e6e6] rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Still have questions?</h4>
                <p className="text-gray-600 mb-4">
                  Our support team is here to help you get the most out of Cropion.
                </p>
                <button className="bg-gradient-to-r from-[#0ea47a] to-[#12d39d] hover:from-[#0a7557] hover:to-[#0ea47a] text-white px-6 py-2 rounded-lg transition-all duration-200 font-medium">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default FAQPage