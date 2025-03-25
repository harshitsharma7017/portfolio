import Head from 'next/head'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallery from './components/Gallery'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Harshit Sharma - Backend Developer</title>
        <meta name="description" content="Junior Backend Developer specializing in MERN stack" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}