import React from 'react'
import './About.css'
import Footer from '../../components/footer/Footer'

import AboutHero from './components/AboutHero'
import JourneyStats from './components/JourneyStats'
import MissionVision from './components/MissionVison'
import OurValues from './components/OurValues'
import MeetFounder from './components/MeetFounder'

const About = () => {
  return (
    <div className="about-page">
      <AboutHero />

      <div className="about-middle">
        <JourneyStats />
        <MissionVision />
      </div>

      <div className="about-bottom">
        <OurValues />
        <MeetFounder />
      </div>

      <Footer />
    </div>
  )
}

export default About