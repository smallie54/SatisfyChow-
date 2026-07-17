import React from 'react'
import './DealsBanner.css'
import { assets } from '../../assets/assets'

const DealsBanner = () => {
  return (
    <div className='deals-banner' id='deals'>
      <div className="deals-banner-left">
        <p className="deals-tag">Limited Time Offer</p>
        <h2>Enjoy exclusive deals <br /> on your favorite meals</h2>
        <p className="deals-desc">Save big with our daily deals and special offers just for you.</p>
        <button className="deals-btn">Explore Deals →</button>
      </div>

      <div className="deals-banner-right">
        <img src={assets.amalaDish} alt="Deal meal" className="deals-img" />
        <div className="deals-discount-badge">
          <p>Up to</p>
          <h3>30%</h3>
          <p>OFF</p>
        </div>
      </div>
    </div>
  )
}

export default DealsBanner