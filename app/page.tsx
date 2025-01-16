import { Metadata } from 'next'
import Header from './components/Header'
import Introduction from './components/Introduction'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Miguel Martinez - QA Professional',
  description: 'Portfolio of Miguel Martinez, an experienced QA professional specializing in software testing and quality assurance.',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Introduction />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

