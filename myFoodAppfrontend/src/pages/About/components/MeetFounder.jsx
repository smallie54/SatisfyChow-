import React from 'react'
import { assets } from '../../../assets/assets'

const MeetFounder = () => {
  return (
    <div className="meet-founder">
      <p className="meet-founder-label">Meet Our Founder</p>

      <div className="meet-founder-body">
        <img src={assets.satisfyChowFounder} alt="Adeleke Victor" className="meet-founder-img" />

        <div>
          <p className="meet-founder-name">Adeleke Victor</p>
          <p className="meet-founder-role">Founder &amp; Owner, Satisfy Chow</p>
          <p className="meet-founder-bio">
            Adeleke Victor founded Satisfy Chow in 2023 with a passion for
            food and a vision to make quality meals accessible to everyone,
            everywhere.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MeetFounder