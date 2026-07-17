import React from 'react'
import './GetTheApp.css'
import { assets } from '../../assets/assets'

const GetTheApp = () => {
  return (
    <div className='get-the-app' id='get-the-app'>
      <div className="app-left">
        <h2>Get the Satisfy Chow App</h2>
        <p>Faster, easier and better experience right at your fingertips.</p>
        <div className="app-store-btns">
          <a href="#" className="store-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
          </a>
          <a href="#" className="store-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
          </a>
        </div>
      </div>

      <div className="app-middle">
        <div className="phone-mockup">
          <div className="phone-screen">
            <div className="phone-header">
              <p className="phone-brand-top">Satisfy</p>
              <p className="phone-brand-bottom">Chow</p>
            </div>
            <div className="phone-search">🔍 Search for meals...</div>
            <div className="phone-categories">
              <span>🍚</span><span>🥘</span><span>🍹</span><span>🍖</span>
            </div>
            <div className="phone-card"></div>
            <div className="phone-card short"></div>
          </div>
        </div>
      </div>

      <div className="app-right">
        <div className="qr-wrap">
          <div className="qr-placeholder">
            <p>QR</p>
          </div>
        </div>
        <p className="scan-text">Scan to Download</p>
        <div className="app-store-btns">
          <a href="#" className="store-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
          </a>
          <a href="#" className="store-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default GetTheApp