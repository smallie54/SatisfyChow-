import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={assets.satisfyChow} alt="Satisfy Chow" />
            <div>
              <span className="footer-logo-top">Satisfy</span>
              <span className="footer-logo-bottom">Chow</span>
            </div>
          </div>
          <p className="footer-brand-desc">
            Delicious meals from the best restaurants, freshly prepared and delivered fast to your doorstep.
          </p>
          <div className="footer-socials">
            <a href="#"><FaFacebookF size={14} /></a>
            <a href="#"><FaInstagram size={14} /></a>
            <a href="#"><FaTwitter size={14} /></a>
            <a href="#"><FaTiktok size={14} /></a>
          </div>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-col">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Delivery Information</a></li>
            <li><a href="#">Returns & Refunds</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Popular Categories */}
        <div className="footer-col">
          <h4>Popular Categories</h4>
          <ul>
            <li><a href="#">Local Meals</a></li>
            <li><a href="#">Soups</a></li>
            <li><a href="#">Grills</a></li>
            <li><a href="#">Drinks</a></li>
            <li><a href="#">Desserts</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col">
          <h4>Subscribe to our Newsletter</h4>
          <p className="newsletter-desc">Get updates on offers and new restaurants.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Satisfy Chow. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer