import React from 'react'
import { MdGpsFixed } from 'react-icons/md'

const MissionVision = () => {
  return (
    <div className="mission-vision">
      <div className="mission-vision-col">
        <h3>Our Mission</h3>
        <p>
          To deliver freshly prepared, high-quality meals with speed, care,
          and excellence while supporting local restaurants and creating
          meaningful experiences.
        </p>
      </div>

      <div className="mission-vision-icon-wrap">
        <div className="mission-vision-icon-ring">
          <div className="mission-vision-icon-circle">
            <MdGpsFixed size={32} color="#F97316" />
          </div>
        </div>
      </div>

      <div className="mission-vision-col">
        <h3>Our Vision</h3>
        <p>
          To be Africa's most loved food delivery platform—where good food,
          great service, and happy communities come together.
        </p>
      </div>
    </div>
  )
}

export default MissionVision