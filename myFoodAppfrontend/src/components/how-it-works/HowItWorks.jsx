import React from 'react'
import './HowItWorks.css'
import { MdLocationOn } from 'react-icons/md'
import { FiShoppingBag, FiCreditCard } from 'react-icons/fi'
import { MdDeliveryDining } from 'react-icons/md'

const steps = [
  {
    icon: <MdLocationOn size={28} color="#F97316" />,
    title: 'Enter Your Address',
    desc: 'Tell us where you are so we can deliver to you.'
  },
  {
    icon: <FiShoppingBag size={28} color="#F97316" />,
    title: 'Choose Your Meal',
    desc: 'Browse our menu and add your favorites to cart.'
  },
  {
    icon: <FiCreditCard size={28} color="#F97316" />,
    title: 'Make Payment',
    desc: 'Pay securely using your preferred payment method.'
  },
  {
    icon: <MdDeliveryDining size={28} color="#F97316" />,
    title: 'Enjoy Fast Delivery',
    desc: 'Sit back and enjoy your hot, delicious meal.'
  },
]

const HowItWorks = () => {
  return (
    <div className='how-it-works'>
      <div className="how-it-works-header">
        <h2>How Satisfy Chow Works</h2>
        <div className="how-it-works-underline"></div>
      </div>

      <div className="how-it-works-steps">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="step">
              <div className="step-icon-wrap">
                {step.icon}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>

            
            {index < steps.length - 1 && (
              <div className="step-connector"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default HowItWorks