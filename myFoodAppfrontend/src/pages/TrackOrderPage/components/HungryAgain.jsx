import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../../assets/assets'

const HungryAgain = () => {
  const navigate = useNavigate()

  return (
    <div className="hungry-again">
      <div className="hungry-left">
        <img src={assets.amalaDish} alt="Food" className="hungry-food-img" />
      </div>

      <div className="hungry-center">
        <h2>Hungry again?</h2>
        <p>Explore our menu and order your favorites delivered fast to your door.</p>
        <button className="hungry-btn" onClick={() => {
          navigate('/')
          setTimeout(() => {
            const el = document.getElementById('food-display')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }, 100)
        }}>
          Order More Food →
        </button>
      </div>

      <div className="hungry-right">
        <span className="hungry-rider">🛵</span>
        <span className="hungry-pin">📍</span>
      </div>
    </div>
  )
}

export default HungryAgain