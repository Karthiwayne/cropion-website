import { Lightbulb, Palette, Code, Rocket } from 'lucide-react';

const STEPS = [
  {
    icon: Lightbulb,
    title: 'Ideate',
    description: 'Turn your idea from concept to MVP',
    color: 'bg-[#12d39d] text-white',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Sketch out the product to align the user needs',
    color: 'bg-[#12d39d] text-white',
  },
  {
    icon: Code,
    title: 'Develop',
    description: 'Convert the designs into a live application',
    color: 'bg-[#12d39d] text-white',
  },
  {
    icon: Rocket,
    title: 'Deploy',
    description: 'Launching the application to the market',
    color: 'bg-[#12d39d] text-white',
  },
];

export default function Steps() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm text-[#0ea47a] font-medium mb-4 uppercase tracking-wide">
            HOW IT WORKS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get started in few simple steps
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Horizontal connecting line for desktop */}
          <div className="hidden lg:block absolute top-16 left-1/4 right-1/4 h-px bg-[#12d39d] z-0"></div>
          {STEPS.map(({ icon: Icon, title, description, color }, idx) => (
            <div key={title} className="text-center relative z-10">
              <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
