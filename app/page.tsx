
import Header from './component/header'
import Hero from './component/hero'
import About from './component/about'
import Skills from './component/skills'
import Projects from './component/project'
import Contact from './component/contact'
import Footer from './component/footer'

export default function Home() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
