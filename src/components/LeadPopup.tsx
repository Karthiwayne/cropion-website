'use client'

import { useState } from 'react'
import { X, User, Mail, Phone, Calendar, Tractor, Leaf, BarChart3, Send, ArrowRight, Star, Gift, CheckCircle } from 'lucide-react'

interface LeadPopupProps {
  isOpen: boolean
  onClose: () => void
}

const LeadPopup = ({ isOpen, onClose }: LeadPopupProps) => {
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
    // Radio button fields
    farmingExperience: '',
    primaryGoal: '',
    // Checkbox fields
    interestedServices: [] as string[],
    communicationPreferences: [] as string[],
    // Range/slider fields
    currentYield: 50,
    desiredImprovement: 25,
    // Toggle/switch fields
    hasExistingEquipment: false,
    wantsNewsletter: true,
    // File upload
    farmPhoto: null as File | null,
    // Color picker (for branding)
    brandColor: '#0ea47a',
    // Date fields
    preferredCallDate: '',
    harvestSeason: '',
    // Number fields
    acreage: '',
    yearsInBusiness: '',
    // Multi-select
    challenges: [] as string[],
    // Rating/stars
    currentSatisfaction: 3,
    // Text area variations
    additionalNotes: '',
    specificRequirements: ''
  })

  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Lead form submitted:', formData)
    // Handle form submission here
    onClose()
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

  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      currentSatisfaction: rating
    }))
  }

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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 transition-opacity bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={onClose}
        ></div>

        {/* Modal */}
        <div className="inline-block w-full max-w-5xl p-0 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-3xl">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-[#0ea47a] to-[#12d39d] px-8 py-6 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Tractor className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Transform Your Farm Today</h3>
                <p className="text-white/90">Get personalized recommendations for your agricultural needs</p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-white/20 rounded-full h-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
              <span className="text-white/90 text-sm font-medium">{currentStep}/{totalSteps}</span>
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
                  {/* Text Input */}
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

                  {/* Email Input */}
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

                  {/* Tel Input */}
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

                  {/* Number Inputs */}
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

                  {/* Date Inputs */}
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

                  {/* Color Input */}
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

                  {/* File Input */}
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

                {/* Radio Buttons */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Farming Experience (Radio Buttons)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { value: 'beginner', label: 'Beginner (0-2 years)' },
                      { value: 'intermediate', label: 'Intermediate (3-10 years)' },
                      { value: 'experienced', label: 'Experienced (10+ years)' },
                      { value: 'expert', label: 'Expert (20+ years)' }
                    ].map((option) => (
                      <label key={option.value} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name="farmingExperience"
                          value={option.value}
                          checked={formData.farmingExperience === option.value}
                          onChange={handleChange}
                          className="w-4 h-4 text-[#0ea47a] focus:ring-[#0ea47a] border-gray-300"
                        />
                        <span className="text-sm text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Another Radio Button Group */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Primary Goal (Radio Buttons)
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'increase-yield', label: 'Increase Crop Yield', icon: '📈' },
                      { value: 'reduce-costs', label: 'Reduce Operating Costs', icon: '💰' },
                      { value: 'automate-processes', label: 'Automate Farm Processes', icon: '🤖' },
                      { value: 'improve-sustainability', label: 'Improve Sustainability', icon: '🌱' },
                      { value: 'better-monitoring', label: 'Better Crop Monitoring', icon: '👁️' }
                    ].map((option) => (
                      <label key={option.value} className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name="primaryGoal"
                          value={option.value}
                          checked={formData.primaryGoal === option.value}
                          onChange={handleChange}
                          className="w-4 h-4 text-[#0ea47a] focus:ring-[#0ea47a] border-gray-300"
                        />
                        <span className="text-2xl">{option.icon}</span>
                        <span className="text-sm text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Select Dropdowns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="farmSize" className="block text-sm font-medium text-gray-700 mb-2">
                      <BarChart3 className="w-4 h-4 inline mr-2" />
                      Farm Size (Select Dropdown)
                    </label>
                    <select
                      id="farmSize"
                      name="farmSize"
                      value={formData.farmSize}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea47a] focus:border-transparent transition-all"
                    >
                      <option value="">Select farm size</option>
                      <option value="small">Small (1-50 acres)</option>
                      <option value="medium">Medium (51-200 acres)</option>
                      <option value="large">Large (201-1000 acres)</option>
                      <option value="enterprise">Enterprise (1000+ acres)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="cropType" className="block text-sm font-medium text-gray-700 mb-2">
                      <Leaf className="w-4 h-4 inline mr-2" />
                      Primary Crop Type (Select Dropdown)
                    </label>
                    <select
                      id="cropType"
                      name="cropType"
                      value={formData.cropType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea47a] focus:border-transparent transition-all"
                    >
                      <option value="">Select crop type</option>
                      <option value="corn">🌽 Corn</option>
                      <option value="soybeans">🫘 Soybeans</option>
                      <option value="wheat">🌾 Wheat</option>
                      <option value="vegetables">🥕 Vegetables</option>
                      <option value="fruits">🍎 Fruits</option>
                      <option value="cotton">☁️ Cotton</option>
                      <option value="other">🌿 Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range (Select Dropdown)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea47a] focus:border-transparent transition-all"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="over-500k">Over $500,000</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Implementation Timeline (Select Dropdown)
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea47a] focus:border-transparent transition-all"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">🚀 Immediate (within 1 month)</option>
                      <option value="short">⚡ Short term (1-3 months)</option>
                      <option value="medium">📅 Medium term (3-6 months)</option>
                      <option value="long">🗓️ Long term (6+ months)</option>
                      <option value="exploring">🔍 Just exploring options</option>
                    </select>
                  </div>
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

                {/* Checkboxes - Multiple Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Interested Services (Checkboxes - Multiple Selection)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { value: 'weed-detection', label: 'Autonomous Weed Detection', icon: '🌿' },
                      { value: 'crop-monitoring', label: 'Crop Health Monitoring', icon: '📊' },
                      { value: 'yield-prediction', label: 'Yield Prediction', icon: '📈' },
                      { value: 'soil-analysis', label: 'Soil Analysis', icon: '🌍' },
                      { value: 'irrigation-management', label: 'Smart Irrigation', icon: '💧' },
                      { value: 'pest-control', label: 'Pest Control Solutions', icon: '🐛' }
                    ].map((service) => (
                      <label key={service.value} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="interestedServices"
                          value={service.value}
                          checked={formData.interestedServices.includes(service.value)}
                          onChange={handleChange}
                          className="w-4 h-4 text-[#0ea47a] focus:ring-[#0ea47a] border-gray-300 rounded"
                        />
                        <span className="text-xl">{service.icon}</span>
                        <span className="text-sm text-gray-700">{service.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Communication Preferences - Checkboxes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Communication Preferences (Checkboxes)
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { value: 'email', label: 'Email Updates', icon: '📧' },
                      { value: 'phone', label: 'Phone Calls', icon: '📞' },
                      { value: 'sms', label: 'SMS Notifications', icon: '💬' },
                      { value: 'newsletter', label: 'Monthly Newsletter', icon: '📰' }
                    ].map((pref) => (
                      <label key={pref.value} className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          name="communicationPreferences"
                          value={pref.value}
                          checked={formData.communicationPreferences.includes(pref.value)}
                          onChange={handleChange}
                          className="w-4 h-4 text-[#0ea47a] focus:ring-[#0ea47a] border-gray-300 rounded"
                        />
                        <span>{pref.icon}</span>
                        <span className="text-sm text-gray-700">{pref.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Toggle Switches */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <span className="text-sm font-medium text-gray-700">Has Existing Equipment</span>
                        <p className="text-xs text-gray-500">Toggle Switch</p>
                      </div>
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="hasExistingEquipment"
                          checked={formData.hasExistingEquipment}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div 
                          className={`w-12 h-6 rounded-full transition-colors cursor-pointer ${
                            formData.hasExistingEquipment ? 'bg-[#0ea47a]' : 'bg-gray-300'
                          }`}
                          onClick={() => setFormData(prev => ({ ...prev, hasExistingEquipment: !prev.hasExistingEquipment }))}
                        >
                          <div 
                            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                              formData.hasExistingEquipment ? 'translate-x-6' : 'translate-x-0.5'
                            } mt-0.5`}
                          ></div>
                        </div>
                      </div>
                    </label>
                  </div>

                  <div>
                    <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <span className="text-sm font-medium text-gray-700">Subscribe to Newsletter</span>
                        <p className="text-xs text-gray-500">Toggle Switch</p>
                      </div>
                      <div className="relative">
                        <input
                          type="checkbox"
                          name="wantsNewsletter"
                          checked={formData.wantsNewsletter}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div 
                          className={`w-12 h-6 rounded-full transition-colors cursor-pointer ${
                            formData.wantsNewsletter ? 'bg-[#0ea47a]' : 'bg-gray-300'
                          }`}
                          onClick={() => setFormData(prev => ({ ...prev, wantsNewsletter: !prev.wantsNewsletter }))}
                        >
                          <div 
                            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                              formData.wantsNewsletter ? 'translate-x-6' : 'translate-x-0.5'
                            } mt-0.5`}
                          ></div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Range Sliders */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Yield Satisfaction (Range Slider)
                    </label>
                    <div className="px-3">
                      <input
                        type="range"
                        name="currentYield"
                        min="0"
                        max="100"
                        value={formData.currentYield}
                        onChange={handleChange}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        style={{
                          background: `linear-gradient(to right, #0ea47a 0%, #0ea47a ${formData.currentYield}%, #e5e7eb ${formData.currentYield}%, #e5e7eb 100%)`
                        }}
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Poor</span>
                        <span className="font-medium text-[#0ea47a]">{formData.currentYield}%</span>
                        <span>Excellent</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Desired Improvement (Range Slider)
                    </label>
                    <div className="px-3">
                      <input
                        type="range"
                        name="desiredImprovement"
                        min="0"
                        max="100"
                        value={formData.desiredImprovement}
                        onChange={handleChange}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #12d39d 0%, #12d39d ${formData.desiredImprovement}%, #e5e7eb ${formData.desiredImprovement}%, #e5e7eb 100%)`
                        }}
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span className="font-medium text-[#12d39d]">{formData.desiredImprovement}%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Star Rating */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Current Farming Satisfaction (Star Rating)
                  </label>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingChange(star)}
                        className={`w-8 h-8 ${
                          star <= formData.currentSatisfaction 
                            ? 'text-yellow-400' 
                            : 'text-gray-300'
                        } hover:text-yellow-400 transition-colors`}
                      >
                        <Star className="w-full h-full fill-current" />
                      </button>
                    ))}
                    <span className="ml-3 text-sm text-gray-600">
                      {formData.currentSatisfaction} out of 5 stars
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Text Areas and Final Details */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Final Details</h4>
                  <p className="text-gray-600">Text areas and additional information</p>
                </div>

                {/* Multi-select with custom styling */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Current Challenges (Multi-select Checkboxes)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {[
                      'Weed Control', 'Labor Shortage', 'Pest Management', 'Irrigation Issues',
                      'Soil Quality', 'Weather Monitoring', 'Equipment Maintenance', 'Cost Management',
                      'Yield Optimization', 'Data Analysis', 'Compliance', 'Market Access'
                    ].map((challenge) => (
                      <label key={challenge} className="flex items-center space-x-2 p-2 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer text-sm">
                        <input
                          type="checkbox"
                          name="challenges"
                          value={challenge}
                          checked={formData.challenges.includes(challenge)}
                          onChange={handleChange}
                          className="w-3 h-3 text-[#0ea47a] focus:ring-[#0ea47a] border-gray-300 rounded"
                        />
                        <span className="text-gray-700">{challenge}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Text Areas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="currentChallenges" className="block text-sm font-medium text-gray-700 mb-2">
                      Detailed Challenges (Textarea)
                    </label>
                    <textarea
                      id="currentChallenges"
                      name="currentChallenges"
                      value={formData.currentChallenges}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea47a] focus:border-transparent transition-all resize-none"
                      placeholder="Describe your main farming challenges in detail..."
                    />
                  </div>

                  <div>
                    <label htmlFor="specificRequirements" className="block text-sm font-medium text-gray-700 mb-2">
                      Specific Requirements (Textarea)
                    </label>
                    <textarea
                      id="specificRequirements"
                      name="specificRequirements"
                      value={formData.specificRequirements}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea47a] focus:border-transparent transition-all resize-none"
                      placeholder="Any specific requirements or features you need..."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes (Large Textarea)
                  </label>
                  <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea47a] focus:border-transparent transition-all resize-none"
                    placeholder="Any additional information you'd like to share about your farming operation, goals, or questions..."
                  />
                </div>

                {/* Final dropdown */}
                <div>
                  <label htmlFor="hearAboutUs" className="block text-sm font-medium text-gray-700 mb-2">
                    How did you hear about Cropion? (Select Dropdown)
                  </label>
                  <select
                    id="hearAboutUs"
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ea47a] focus:border-transparent transition-all"
                  >
                    <option value="">Select source</option>
                    <option value="google">🔍 Google Search</option>
                    <option value="social">📱 Social Media</option>
                    <option value="referral">👥 Referral from friend/colleague</option>
                    <option value="trade-show">🏢 Trade Show/Conference</option>
                    <option value="advertisement">📺 Advertisement</option>
                    <option value="other">❓ Other</option>
                  </select>
                </div>

                {/* Benefits Summary */}
                <div className="bg-[#e6e6e6] rounded-lg p-6">
                  <h5 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Gift className="w-5 h-5 mr-2 text-[#0ea47a]" />
                    What you&apos;ll get:
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Personalized farm assessment',
                      'Custom ROI calculation',
                      'Free consultation call',
                      'Implementation roadmap',
                      'Priority support access',
                      'Exclusive pricing options'
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#0ea47a]" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
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
                  <div className="flex flex-wrap gap-3">
                    {/* PRIMARY BUTTON - Currently Active */}
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-[#0ea47a] to-[#12d39d] hover:from-[#0a7557] hover:to-[#0ea47a] text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium flex items-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Get My Assessment</span>
                    </button>

                    {/* ALTERNATIVE BUTTON STYLES - Uncomment to use */}
                    {/* 
                    // OUTLINE BUTTON
                    <button
                      type="submit"
                      className="bg-white border-2 border-[#0ea47a] text-[#0ea47a] hover:bg-[#0ea47a] hover:text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium flex items-center space-x-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Report</span>
                    </button>

                    // WARNING/URGENT BUTTON
                    <button
                      type="submit"
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium flex items-center space-x-2"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>Claim Offer</span>
                    </button>

                    // LIMITED TIME BUTTON
                    <button
                      type="submit"
                      className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium flex items-center space-x-2"
                    >
                      <Clock className="w-4 h-4" />
                      <span>Limited Time</span>
                    </button>

                    // PREMIUM BUTTON
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium flex items-center space-x-2"
                    >
                      <Star className="w-4 h-4" />
                      <span>Start Free Trial</span>
                    </button>

                    // SUCCESS BUTTON
                    <button
                      type="submit"
                      className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium flex items-center space-x-2"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span>Get Started</span>
                    </button>

                    // ELECTRIC BUTTON
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium flex items-center space-x-2"
                    >
                      <Zap className="w-4 h-4" />
                      <span>Instant Access</span>
                    </button>

                    // DARK BUTTON
                    <button
                      type="submit"
                      className="bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-lg transition-all duration-200 font-medium flex items-center space-x-2"
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span>Continue</span>
                    </button>

                    // GHOST BUTTON
                    <button
                      type="submit"
                      className="bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg transition-all duration-200 font-medium flex items-center space-x-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Contact Us</span>
                    </button>
                    */}
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LeadPopup