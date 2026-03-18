import React from 'react'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Projects from '../components/home/Projects'
import Services from '../components/home/Services'
import Testimonial from '../components/home/Testimonial'
import Footer from '../ui/Footer'
import Navbar from '../ui/Navbar'


const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Services />
        <Testimonial />
        <Footer />
    </div>
  )
}

export default Home