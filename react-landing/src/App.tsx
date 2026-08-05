import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Background from './components/Background'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import Loader from './components/Loader'
import ProcessSection from './components/ProcessSection'
import TechnologiesSection from './components/TechnologiesSection'
import ContactSection from './components/ContactSection'

export default function App() {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const timeout = window.setTimeout(() => setShowLoader(false), 1600)
    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <div className="relative min-h-screen bg-navy text-white overflow-x-hidden">
      <Background />
      <Navbar />
      {showLoader && <Loader />}
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
<ProcessSection />
        <TechnologiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}