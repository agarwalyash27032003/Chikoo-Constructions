import { div } from 'framer-motion/client'
import React from 'react'
import Navbar from '../ui/Navbar'
import Hero from '../components/about/Hero'
import MissionVision from '../components/about/MissionVision'
import Team from '../components/about/Team'
import ProcessTimeline from '../components/about/ProcessTimeline'
import Footer from '../ui/Footer'

const About = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <MissionVision />
        <ProcessTimeline />
        <Team />
        <Footer />
    </div>
  )
}

export default About