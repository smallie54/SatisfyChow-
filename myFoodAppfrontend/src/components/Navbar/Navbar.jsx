import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { FiShoppingCart } from 'react-icons/fi'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home')
  const { getCartCount } = useContext(StoreContext)
  const navigate = useNavigate()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/#explore-menu' },
    { name: 'Get The App', path: '/#get-the-app' },
    { name: 'Deals', path: '/#deals' },
    { name: 'Track Order', path: '/track-order' },
    { name: 'About Us', path: '/about' },
  ]

  const handleNavClick = (link) => {
    setActiveLink(link.name)
    if (link.path.startsWith('/#')) {
      // Scroll to section on home page
      navigate('/')
      setTimeout(() => {
        const id = link.path.replace('/#', '')
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      navigate(link.path)
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate('/')}>
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
            className={activeLink === link.name ? 'active' : ''}
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