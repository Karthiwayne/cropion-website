import { Tractor, User, Globe2, Lightbulb } from 'lucide-react';

const TEAM = [
  {
    name: 'Ram Kumar',
    role: 'Founder & CEO',
    img: '',
    description: 'Serial entrepreneur & agritech enthusiast with 10+ years helping farmers adopt tech-driven solutions.',
  },
  {
    name: 'Priya Sharma',
    role: 'Chief Technology Officer',
    img: '',
    description: 'Data engineer and software architect focusing on scalable, transparent farm analytics.',
  },
  {
    name: 'Amit Patel',
    role: 'Lead Agronomist',
    img: '',
    description: 'Expert in crop science and on-ground implementation, connecting tech to real field progress.',
  },
  {
    name: 'Harini Iyer',
    role: 'Customer Success',
    img: '',
    description: 'Champion of farmer support and education, ensuring every grower wins with Cropion.',
  },
];

import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#f3f7f4] to-[#e6f3ed] text-gray-800">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-8 pt-20 pb-36">
        {/* HEADER */}
        <section className="text-center mb-14 mt-10">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="bg-[#0ea47a] text-white rounded-lg px-4 py-2 uppercase text-xs font-bold tracking-wider">About</span>
            <Tractor className="w-7 h-7 text-[#0ea47a]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight drop-shadow">
            The Future of Farming is Autonomous
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-[#163e33] font-medium">
            At Cropion, we’re pioneering agricultural autonomy to empower farmers with intelligent, self-driven solutions that scale.
          </p>
        </section>

        {/* MISSION */}
        <section className="rounded-xl bg-white/90 border border-[#def5ed] p-8 mb-12 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-[#12d39d] rounded-xl mb-4 md:mb-0 shadow-lg">
            <Lightbulb className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="font-extrabold text-2xl text-[#0ea47a] mb-2">Our Mission</h2>
            <p className="text-gray-700 text-lg">
              To revolutionize farming through autonomous, AI-driven technology — helping farmers increase productivity, reduce manual labor, and achieve long-term sustainability.
            </p>
          </div>
        </section>

        {/* STORY */}
        <section className="md:grid md:grid-cols-2 md:gap-10 mb-20 items-center flex flex-col">
          <div>
            <h2 className="font-extrabold text-2xl text-[#0ea47a] mb-2">How We Started</h2>
            <p className="text-gray-700 text-lg mb-4">
              Cropion began with a bold vision — to bring full autonomy to Indian farms. Witnessing the urgent need for scalable, intelligent tools amidst labor shortages and climate challenges, we set out to bridge the gap between cutting-edge robotics and grassroots agriculture. What started as a prototype in the fields has grown into a full-stack agri-autonomy platform.
            </p>
            <ul className="list-disc ml-5 text-[#0ea47a] text-base space-y-1">
              <li>Headquartered in India, built for the world</li>
              <li>Interdisciplinary team of engineers, agronomists, and innovators</li>
              <li>Driven by purpose, powered by technology</li>
            </ul>
          </div>
          <div className="flex md:justify-end md:-mt-10 mt-8 justify-center">
            <Globe2 className="w-32 h-32 text-[#12d39d]" />
          </div>
        </section>

        {/* VALUES */}
        <section className="mb-20">
          <div className="mb-6">
            <h2 className="font-extrabold text-2xl text-[#0ea47a] mb-2">What We Stand For</h2>
            <div className="h-1 w-10 bg-[#12d39d] rounded-lg mb-4" />
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-base">
            <li><span className="font-medium text-[#0ea47a]">Farmer-first:</span> We innovate for and with our users</li>
            <li><span className="font-medium text-[#0ea47a]">Transparency:</span> Open, reliable solutions every step</li>
            <li><span className="font-medium text-[#0ea47a]">Sustainability:</span> Leave land and communities stronger</li>
            <li><span className="font-medium text-[#0ea47a]">Autonomy:</span> Redefining what&apos;s possible with self-operating machines</li>
          </ul>
        </section>

        {/* TEAM */}
        <section className="mb-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center gap-3 mb-3">
              <span className="bg-[#0ea47a] text-white rounded-lg px-4 py-2 uppercase text-xs font-bold tracking-wider">Team</span>
              <User className="w-6 h-6 text-[#0ea47a]" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">Meet the People Behind Cropion</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {TEAM.map((member, idx) => (
              <div key={idx} className="bg-white border border-[#def5ed] p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-[#0ea47a]">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                <p className="text-gray-700">{member.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
