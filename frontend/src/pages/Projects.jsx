import React from 'react'
import Body from '../components/projects/Body'
import Footer from '../ui/Footer'
import Navbar from '../ui/Navbar'
import LocationsServed from "../components/projects/LocationsServed"
import Hero from '../components/projects/Hero'

const Projects = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <LocationsServed />
        <Body />
        <Footer />
    </ div>
  )
}

export default Projects