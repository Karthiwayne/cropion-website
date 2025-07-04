import Image from 'next/image'

const Testimonial = () => {
  return (
    <section className="py-24 bg-[#0ea47a]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-[#0ea47a] font-bold text-sm">C</span>
              </div>
              <span className="text-white font-medium">Cropion</span>
            </div>
            
            <blockquote className="text-xl leading-relaxed mb-8">
              &quot;Thanks to Cropion, we built our smart farming system in just a couple of hours and went live! Their extensive library of 500+ components makes it a breeze to create any type of agricultural solution. It&apos;s a true time-saver for modern farmers!&quot;
            </blockquote>
            
            <div className="text-white/80">
              <div className="font-medium">David Williamson</div>
              <div className="text-sm">Product Manager at Cropion</div>
            </div>
          </div>
          
          <div className="relative">
            <Image 
              src="https://images.pexels.com/photos/7551728/pexels-photo-7551728.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Testimonial"
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

export default Testimonial