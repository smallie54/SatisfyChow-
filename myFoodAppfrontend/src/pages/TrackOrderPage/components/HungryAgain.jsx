import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

const HungryAgain = () => {
  const navigate = useNavigate()

  return (
    <div className="hungry-again">
      <img
        src="/images/hungry-food.png"
        alt=""
        className="hungry-again-food-img"
      />

      <div className="hungry-again-text">
        <h3>Hungry again?</h3>
        <p>Explore our menu and order your favorites delivered fast to your door.</p>
      </div>

      <button
        type="button"
        className="hungry-again-btn"
        onClick={() => navigate('/menu')}
      >
        Order More Food <FiArrowRight size={16} />
      </button>

      <img
        src="/images/rider-illustration.png"
        alt=""
        className="hungry-again-rider-img"
      />
    </div>
  )
}

export default HungryAgain