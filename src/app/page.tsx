import Header from './components/Header'
import Hero from './components/Hero'
import Steps from './components/Steps'
import Portfolio from './components/Portfolio'
import Testimonial from './components/Testimonial'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Steps />
      <Portfolio />
      <Testimonial />
      <FAQ />
      <Footer />
    </div>
  )
}