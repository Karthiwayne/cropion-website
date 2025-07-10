'use client'

import { useState } from 'react'
import { User, Mail, Phone, Calendar, Tractor, BarChart3, Send, ArrowRight} from 'lucide-react'

export default function LeadFormPage() {
  // Use same form state and logic as LeadPopup, but as a full page form
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    farmSize: '',
    location: '',
    cropType: '',
    currentChallenges: '',
    budget: '',
    timeline: '',
    hearAboutUs: '',
    farmingExperience: '',
    primaryGoal: '',
    interestedServices: [] as string[],
    communicationPreferences: [] as string[],
    currentYield: 50,
    desiredImprovement: 25,
    hasExistingEquipment: false,
    wantsNewsletter: true,
    farmPhoto: null as File | null,
    brandColor: '#0ea47a',
    preferredCallDate: '',
    harvestSeason: '',
    acreage: '',
    yearsInBusiness: '',
    challenges: [] as string[],
    currentSatisfaction: 3,
    additionalNotes: '',
    specificRequirements: ''
  })
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Lead form submitted:', formData)
    // Do NOT close, instead maybe show success message or navigate away.
    // router.push('/') or show toast, etc.
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      if (name === 'interestedServices' || name === 'communicationPreferences' || name === 'challenges') {
        setFormData(prev => ({
          ...prev,
          [name]: checked 
            ? [...(prev[name as keyof typeof prev] as string[]), value]
            : (prev[name as keyof typeof prev] as string[]).filter(item => item !== value)
        }))
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: checked
        }))
      }
    } else if (type === 'range' || type === 'number') {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'range' ? parseInt(value) : value
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({
      ...prev,
      farmPhoto: file
    }))
  }
  // const handleRatingChange = (rating: number) => {
  //   setFormData(prev => ({
  //     ...prev,
  //     currentSatisfaction: rating
  //   }))
  // }
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="flex flex-col w-full bg-gradient-to-b from-[#f3f7f4] to-[#e6f3ed]">
      <main className="flex-1 flex flex-col items-center justify-center w-full">
        <div className="w-full bg-white/95 shadow-none border border-gray-100 sm:mt-14 sm:mb-20 min-h-[80vh] flex flex-col">
          {/* Header with gradient, more page-style */}
          <div className="bg-gradient-to-r from-[#0ea47a] to-[#12d39d] px-8 py-10 border-b border-[#ffffff22] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-14 h-14 bg-white/40 rounded-xl flex items-center justify-center">
              <Tractor className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-white drop-shadow mb-1">Transform Your Farm Today</h3>
              <p className="text-white/90 text-lg">Get personalized recommendations for your agricultural needs</p>
            </div>
          </div>
          {/* Progress bar styled to page */}
          <div className="flex flex-col items-end w-full md:w-72 mt-6 md:mt-0">
            <div className="flex-1 bg-white/30 rounded-full h-3 w-full mb-2">
              <div 
                className="bg-white h-3 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
            <span className="text-white/90 text-base font-semibold tracking-wide">Step {currentStep} of {totalSteps}</span>
          </div>
        </div>
          
        
        <form onSubmit={handleSubmit} className="p-8 max-h-[70vh] overflow-y-auto">
        {/* Step 1: Basic Information with Text Inputs */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Basic Information</h4>
              <p className="text-gray-600">Standard text inputs and basic fields</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  First Name * (Text Input)
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea47a] focus:border-transparent transition-all"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name * (Text Input)
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea47a] focus:border-transparent transition-all"
                  placeholder="Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address * (Email Input)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea47a] focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number (Tel Input)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea47a] focus:border-transparent transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="acreage" className="block text-sm font-medium text-gray-700 mb-2">
                  <BarChart3 className="w-4 h-4 inline mr-2" />
                  Farm Acreage (Number Input)
                </label>
                <input
                  type="number"
                  id="acreage"
                  name="acreage"
                  value={formData.acreage}
                  onChange={handleChange}
                  min="1"
                  max="10000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea47a] focus:border-transparent transition-all"
                  placeholder="100"
                />
              </div>
              <div>
                <label htmlFor="yearsInBusiness" className="block text-sm font-medium text-gray-700 mb-2">
                  Years in Business (Number Input)
                </label>
                <input
                  type="number"
                  id="yearsInBusiness"
                  name="yearsInBusiness"
                  value={formData.yearsInBusiness}
                  onChange={handleChange}
                  min="0"
                  max="100"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea47a] focus:border-transparent transition-all"
                  placeholder="5"
                />
              </div>
              <div>
                <label htmlFor="preferredCallDate" className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Preferred Call Date (Date Input)
                </label>
                <input
                  type="date"
                  id="preferredCallDate"
                  name="preferredCallDate"
                  value={formData.preferredCallDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea47a] focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="harvestSeason" className="block text-sm font-medium text-gray-700 mb-2">
                  Harvest Season (Month Input)
                </label>
                <input
                  type="month"
                  id="harvestSeason"
                  name="harvestSeason"
                  value={formData.harvestSeason}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea47a] focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="brandColor" className="block text-sm font-medium text-gray-700 mb-2">
                  Brand Color (Color Picker)
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="color"
                    id="brandColor"
                    name="brandColor"
                    value={formData.brandColor}
                    onChange={handleChange}
                    className="w-12 h-12 border border-gray-300 rounded-lg cursor-pointer"
                  />
                  <span className="text-sm text-gray-600">{formData.brandColor}</span>
                </div>
              </div>
              <div>
                <label htmlFor="farmPhoto" className="block text-sm font-medium text-gray-700 mb-2">
                  Farm Photo (File Upload)
                </label>
                <input
                  type="file"
                  id="farmPhoto"
                  name="farmPhoto"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea47a] focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-[#0ea47a] file:text-white hover:file:bg-[#0a7557]"
                />
              </div>
            </div>
          </div>
        )}
        {/* Step 2: Radio Buttons and Select Dropdowns */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Selection Options</h4>
              <p className="text-gray-600">Radio buttons, dropdowns, and single selections</p>
            </div>
            <div>
              {/* Copy radio buttons and selects from popup component here, e.g., farmingExperience, primaryGoal, farmSize, cropType, budget, timeline  */}
              {/* ... Fill with the full popup component fields as in original LeadPopup/step2 ... */}
              <div className="text-gray-500 text-center text-sm">[Step 2 fields go here]</div>
            </div>
          </div>
        )}
        {/* Step 3: Checkboxes, Toggles, and Range Sliders */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Interactive Elements</h4>
              <p className="text-gray-600">Checkboxes, toggles, sliders, and multi-selections</p>
            </div>
            <div>
              {/* Copy checkboxes, sliders, toggles from popup component here, e.g., interestedServices, communicationPreferences, hasExistingEquipment, wantsNewsletter, currentYield, desiredImprovement, currentSatisfaction  */}
              {/* ... Fill with the full popup component fields as in original LeadPopup/step3 ... */}
              <div className="text-gray-500 text-center text-sm">[Step 3 fields go here]</div>
            </div>
          </div>
        )}
        {/* Step 4: Text areas, drop-downs, and benefits summary */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Final Details</h4>
              <p className="text-gray-600">Text areas and additional information</p>
            </div>
            <div>
              {/* Copy textarea, final dropdown, and summary fields here as in popup component  */}
              {/* ... Fill with the full popup component fields as in original LeadPopup/step4 ... */}
              <div className="text-gray-500 text-center text-sm">[Step 4 fields go here]</div>
            </div>
          </div>
        )}

        {/* Stepper Navigation as before */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
          <div className="flex space-x-3">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Previous
              </button>
            )}
          </div>
          <div className="flex space-x-3">
            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-gradient-to-r from-[#0ea47a] to-[#12d39d] hover:from-[#0a7557] hover:to-[#0ea47a] text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium flex items-center space-x-2"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                className="bg-gradient-to-r from-[#0ea47a] to-[#12d39d] hover:from-[#0a7557] hover:to-[#0ea47a] text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium flex items-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Get My Assessment</span>
              </button>
            )}
          </div>
        </div>
        </form>
        </div>
      </main>
    </div>
  )
}

