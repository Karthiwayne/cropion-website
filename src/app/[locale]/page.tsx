import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Steps from '../../components/Steps'
import Portfolio from '../../components/Portfolio'
import Testimonial from '../../components/Testimonial'
import FAQ from '../../components/FAQ'
import Footer from '../../components/Footer'
import ScrollPopupManager from '../../components/ScrollPopupManager'
import Features from '@/components/product/Features'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features/>
      <Steps />
      <Portfolio />
      <Testimonial />
      <FAQ />
      <Footer />
      <ScrollPopupManager />
    </div>
  )
}