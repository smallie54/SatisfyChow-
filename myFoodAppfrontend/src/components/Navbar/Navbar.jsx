import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { FiShoppingCart } from 'react-icons/fi'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
  const { getCartCount } = useContext(StoreContext)
  const navigate = useNavigate()
  const location = useLocation()
  const [activeScroll, setActiveScroll] = useState('Home')  // ✅ only for scroll links

  const navLinks = [
    { name: 'Home', path: '/', type: 'scroll' },
    { name: 'Menu', path: '/#explore-menu', type: 'scroll' },
    { name: 'Get The App', path: '/#get-the-app', type: 'scroll' },
    { name: 'Deals', path: '/#deals', type: 'scroll' },
    { name: 'Track Order', path: '/track-order', type: 'page' },
    { name: 'About Us', path: '/about', type: 'page' },
  ]

  const isActive = (link) => {
    if (link.type === 'page') {
      // ✅ page links — use URL
      return location.pathname === link.path
    } else {
      // ✅ scroll links — use activeScroll state
      // but only when we're actually on the home page
      return location.pathname === '/' && activeScroll === link.name
    }
  }

  const handleNavClick = (link) => {
    if (link.type === 'scroll') {
      setActiveScroll(link.name)  // ✅ update scroll active state
      navigate('/')
      setTimeout(() => {
        const id = link.path.replace('/#', '')
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      setActiveScroll('')  // ✅ clear scroll active when going to a page
      navigate(link.path)
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => {
        navigate('/')
        setActiveScroll('Home')
      }}>
        <img src={assets.satisfyChow} alt="Satisfy Chow" className="logo-img" />
        <div className="logo-text">
          <span className="logo-top">Satisfy</span>
          <span className="logo-bottom">Chow</span>
        </div>
      </div>

      <ul className="navbar-links">
        {navLinks.map((link) => (
          <li
            key={link.name}
            className={isActive(link) ? 'active' : ''}
            onClick={() => handleNavClick(link)}
          >
            <a href="#">{link.name}</a>
          </li>
        ))}
      </ul>

      <div className="navbar-actions">
        <div className="cart-icon" onClick={() => navigate('/Cart-page')}>
          <FiShoppingCart size={24} />
          {getCartCount() > 0 && (
            <span className="cart-badge">{getCartCount()}</span>
          )}
        </div>
        <button className="signin-btn">Sign In / Sign Up</button>
      </div>
    </nav>
  )
}

export default Navbar