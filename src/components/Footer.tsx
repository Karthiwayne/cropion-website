import { Layers, Twitter, Linkedin, Mail, Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-[#0ea47a] to-[#12d39d] rounded-lg flex items-center justify-center">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Cropion
              </span>
            </div>
            <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
              Revolutionizing agriculture through autonomous AI systems. 
              Building the future of sustainable farming, one field at a time.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
                { icon: Mail, href: "#" }
              ].map((social, index) => {
                const Icon = social.icon
                return (
                  <a 
                    key={index}
                    href={social.href} 
                    className="w-10 h-10 bg-[#e6e6e6] rounded-lg flex items-center justify-center hover:bg-[#12d39d] hover:text-white transition-all"
                  >
                    <Icon className="w-5 h-5 text-gray-600 hover:text-white transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Product</h3>
            <ul className="space-y-3">
              {['Features', 'Specifications', 'Pricing', 'Demo', 'API Documentation'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-[#0ea47a] transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Press Kit', 'Partners', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-[#0ea47a] transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2024 Cropion Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service', 'Security'].map((item) => (
              <a key={item} href="#" className="text-gray-500 hover:text-[#0ea47a] transition-colors text-sm">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer