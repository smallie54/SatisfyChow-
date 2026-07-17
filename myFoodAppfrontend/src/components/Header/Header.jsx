import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
import { MdLocationOn } from 'react-icons/md'

const Header = () => {
  return (
    <div className='header'>
      {/* Left side */}
      <div className="header-left">
        <div className="header-tag">
          <span>⭐ Delicious meals, delivered fast</span>
        </div>

        <h1 className="header-title">
          Good Food, <br />
          <span className="header-title-orange">Great</span> Mood
        </h1>

        <p className="header-desc">
          Satisfy Chow brings you the best meals from top restaurants, freshly prepared and delivered to you.
        </p>

        <div className="header-search">
          <MdLocationOn size={20} color="#F97316" />
          <input type="text" placeholder="Enter your delivery address" />
          <button>Find Food</button>
        </div>

        <div className="header-badges">
          <div className="badge">
            <span className="badge-icon">🛵</span>
            <div>
              <p className="badge-title">Fast Delivery</p>
              <p className="badge-sub">Quick & Reliable</p>
            </div>
          </div>
          <div className="badge">
            <span className="badge-icon">🏅</span>
            <div>
              <p className="badge-title">Best Quality</p>
              <p className="badge-sub">Fresh & Tasty</p>
            </div>
          </div>
          <div className="badge">
            <span className="badge-icon">🛡️</span>
            <div>
              <p className="badge-title">Secure Payment</p>
              <p className="badge-sub">100% Protected</p>
            </div>
          </div>
        </div>
      </div>

      <div className="header-right">
        <img src={assets.menuRice} alt="Featured dish" className="header-food-img" />

        <div className="header-rating-card">
          <div className="rating-avatars">
            <div className="avatar">A</div>
            <div className="avatar">B</div>
            <div className="avatar">C</div>
          </div>
          <div>
            <p className="rating-score">4.8 ⭐</p>
            <p className="rating-label">2,560+ Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header