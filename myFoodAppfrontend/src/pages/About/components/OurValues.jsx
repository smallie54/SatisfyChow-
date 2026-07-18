import React from 'react'
import { MdOutlineVerifiedUser, MdOutlineFavoriteBorder, MdOutlineDeliveryDining, MdOutlineGroups } from 'react-icons/md'

const values = [
  {
    id: 1,
    icon: MdOutlineVerifiedUser,
    title: 'Quality First',
    desc: 'We never compromise on the quality of our food and service.',
  },
  {
    id: 2,
    icon: MdOutlineFavoriteBorder,
    title: 'Customer Focused',
    desc: 'Your satisfaction is at the heart of everything we do.',
  },
  {
    id: 3,
    icon: MdOutlineDeliveryDining,
    title: 'Fast & Reliable',
    desc: 'We deliver your favorite meals hot and on time.',
  },
  {
    id: 4,
    icon: MdOutlineGroups,
    title: 'Community Driven',
    desc: 'We support local businesses and give back to our community.',
  },
]

const OurValues = () => {
  return (
    <div className="our-values">
      <h2>Our Values</h2>

      <div className="our-values-grid">
        {values.map(({ id, icon: Icon, title, desc }) => (
          <div className="our-value-card" key={id}>
            <div className="our-value-icon">
              <Icon size={26} color="#F97316" />
            </div>
            <p className="our-value-title">{title}</p>
            <p className="our-value-desc">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurValues