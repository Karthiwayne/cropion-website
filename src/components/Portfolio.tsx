import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm text-[#0ea47a] font-medium mb-4 uppercase tracking-wide">
            FEATURED PROJECTS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A collection of what we&apos;ve crafted
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Helping to deliver greater impact
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Digital health and wellness media of the future.
              Nisi consectetur sint labore occaecat occaecat occaecat enim culpa irure qui nostrud laboris proident laboris. Amet veniam in culpa id Lorem velit in adipisicing nulla reprehenderit anim aliqua sint. Irure velit deserunt cupidatat eu. Nulla ullamco exercitation reprehenderit laboris consectetur veniam et laborum elit dolore.
            </p>
            <button className="flex items-center space-x-2 text-[#0ea47a] hover:text-[#0a7557] font-medium transition-colors">
              <span>View Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="relative">
            <Image 
              src="https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Project showcase"
              width={600}
              height={400}
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio