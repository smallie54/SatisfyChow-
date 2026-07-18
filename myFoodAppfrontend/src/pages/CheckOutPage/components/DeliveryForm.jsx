import React, { useState } from 'react'
import { FiEdit2, FiTrash2, FiCalendar, FiClock } from 'react-icons/fi'

const DeliveryForm = () => {
  const [instructions, setInstructions] = useState('')
  const maxChars = 120

  return (
    <div className="checkout-section">
      <div className="section-number-title">
        <div className="section-number">1</div>
        <h3>Delivery Information</h3>
      </div>

      <div className="delivery-form-grid">
        {/* Left */}
        <div className="delivery-form-left">
          <p className="form-label">Delivery Address</p>
          <div className="address-card">
            <div className="address-radio">
              <input type="radio" defaultChecked />
            </div>
            <div className="address-details">
              <div className="address-name-row">
                <p className="address-name">Lekki Phase 1, Lagos</p>
                <span className="address-default-tag">Default</span>
              </div>
              <p className="address-full">15 Admiralty Way, Lekki Phase 1, Lagos, Nigeria.</p>
            </div>
            <div className="address-actions">
              <button className="address-action-btn"><FiEdit2 size={14} /></button>
              <button className="address-action-btn"><FiTrash2 size={14} /></button>
            </div>
          </div>
          <button className="add-address-btn">+ Add New Address</button>

          <div className="form-row">
            <div className="form-group">
              <p className="form-label">Delivery Date</p>
              <div className="form-select-wrap">
                <FiCalendar size={16} color="#888" />
                <select className="form-select">
                  <option>Today, May 25, 2024</option>
                  <option>Tomorrow, May 26, 2024</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <p className="form-label">Delivery Time</p>
              <div className="form-select-wrap">
                <FiClock size={16} color="#888" />
                <select className="form-select">
                  <option>12:15 PM – 12:30 PM</option>
                  <option>12:30 PM – 1:00 PM</option>
                  <option>1:00 PM – 1:30 PM</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="delivery-form-right">
          <p className="form-label">Delivery Instructions <span className="optional">(Optional)</span></p>
          <textarea
            className="delivery-instructions"
            placeholder="E.g. Gate code, floor number, landmark..."
            value={instructions}
            maxLength={maxChars}
            onChange={(e) => setInstructions(e.target.value)}
          />
          <p className="char-count">{instructions.length}/{maxChars}</p>
        </div>
      </div>
    </div>
  )
}

export default DeliveryForm