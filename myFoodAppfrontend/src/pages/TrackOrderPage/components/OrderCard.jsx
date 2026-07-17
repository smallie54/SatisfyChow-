import React from 'react'
import { FiPhone, FiMessageSquare } from 'react-icons/fi'

const OrderCard = () => {
  return (
    <div className="order-card">
      <div className="order-card-top">
        <div>
          <h3>Order #SC123456</h3>
          <p className="order-date">Placed on May 25, 2024 at 11:30 AM</p>
          <div className="order-status-badge">
            <span className="status-dot"></span> On the way
          </div>
        </div>
      </div>

      <div className="order-estimated">
        <p className="estimated-label">Estimated Delivery</p>
        <h2 className="estimated-time">12:15 PM – 12:30 PM</h2>
        <p className="estimated-date">May 25, 2024</p>
      </div>

      <div className="order-rider">
        <div className="rider-avatar">🧑🏾</div>
        <div className="rider-info">
          <p className="rider-name">John Rider</p>
          <p className="rider-label">Your Rider</p>
        </div>
        <div className="rider-actions">
          <button className="rider-btn">
            <FiPhone size={16} color="#F97316" />
          </button>
          <button className="rider-btn">
            <FiMessageSquare size={16} color="#F97316" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderCard