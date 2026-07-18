import React from 'react'
import { MdCalendarToday, MdPersonOutline, MdFormatQuote } from 'react-icons/md'
import { assets } from '../../../assets/assets'

const AboutHero = () => {
  return (
    <div className="about-hero">
      <div className="about-hero-left">
        <p className="about-hero-tag">ABOUT SATISFY CHOW</p>
        <h1 className="about-hero-title">
          Good Food.
          <br />
          Great People. <span className="accent">Happy You.</span>
        </h1>
        <p className="about-hero-desc">
          Satisfy Chow was created to bring people closer to the food they
          love. We partner with the best restaurants and chefs to deliver
          delicious meals, fast and fresh to your door.
        </p>

        <div className="about-hero-meta">
          <div className="about-hero-meta-item">
            <div className="about-hero-meta-icon">
              <MdCalendarToday size={20} color="#F97316" />
            </div>
            <div>
              <p className="about-hero-meta-label">Established</p>
              <p className="about-hero-meta-value">2023</p>
            </div>
          </div>
          <div className="about-hero-meta-item">
            <div className="about-hero-meta-icon">
              <MdPersonOutline size={20} color="#F97316" />
            </div>
            <div>
              <p className="about-hero-meta-label">Owner</p>
              <p className="about-hero-meta-value">Adeleke Victor</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-hero-right">
        <img src={assets.MixedRice} alt="Satisfy Chow signature dish" className="about-hero-img" />

        <div className="about-hero-quote">
          <MdFormatQuote size={28} color="#F97316" />
          <p>
            Our mission is simple: to make every meal a{' '}
            <span className="accent">satisfying</span> experience.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutHero