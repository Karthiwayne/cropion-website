'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Plus, Minus, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const FAQPage = () => {
  const t = useTranslations('faq')
  const [openIndex, setOpenIndex] = useState(0)

  const faqSections = t.raw('sections')

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
              <span>{t('backToHome')}</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Content */}
            <div>
              <div className="text-sm text-[#0ea47a] font-medium mb-4 uppercase tracking-wide">
                {t('pageTitle').toUpperCase()}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('headline')}
              </h1>
              <p className="text-gray-600 leading-relaxed">
                {t('intro')}
              </p>
            </div>
            
            {/* Right FAQ Content */}
            <div className="space-y-8">
              {faqSections.map((section: any, sectionIndex: number) => (
                <div key={sectionIndex}>
                  <h3 className="text-sm font-medium text-[#0ea47a] mb-4 uppercase tracking-wide">
                    {section.title}
                  </h3>
                  <div className="space-y-4">
                    {section.faqs.map((faq: any, faqIndex: number) => {
                      const globalIndex = faqSections.slice(0, sectionIndex).reduce((acc: number, sec: any) => acc + sec.faqs.length, 0) + faqIndex
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
                <h4 className="font-semibold text-gray-900 mb-2">{t('contactSupport')}</h4>
                <p className="text-gray-600 mb-4">
                  {t('contactSupportDesc')}
                </p>
                <button className="bg-gradient-to-r from-[#0ea47a] to-[#12d39d] hover:from-[#0a7557] hover:to-[#0ea47a] text-white px-6 py-2 rounded-lg transition-all duration-200 font-medium">
                  {t('contactSupportBtn')}
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