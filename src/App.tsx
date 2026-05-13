import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import EngineeringFocus from './sections/EngineeringFocus'
import Projects from './sections/Projects'
import Certifications from './sections/Certifications'
import CurrentlyLearning from './sections/CurrentlyLearning'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <EngineeringFocus />
        <Projects />
        <Certifications />
        <CurrentlyLearning />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
