import Navbar       from '../components/Navbar'
import Hero         from '../components/Hero'
import About        from '../components/About'
import Skills       from '../components/Skills'
import Experience   from '../components/Experience'
import Education    from '../components/Education'
import Certificates from '../components/Certificates'
import Projects     from '../components/Projects'
import Contact      from '../components/Contact'
import Footer       from '../components/Footer'

function Home() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home
