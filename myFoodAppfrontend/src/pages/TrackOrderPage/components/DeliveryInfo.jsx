import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import { FiFileText, FiCreditCard } from 'react-icons/fi'

const DeliveryInfo = () => {
  return (
    <div className="delivery-info-card">
      {/* Delivery Address */}
      <div className="delivery-info-section">
        <div className="delivery-info-icon">
          <MdLocationOn size={20} color="#F97316" />
        </div>
        <div>
          <p className="delivery-info-label">Delivery Address</p>
          <p className="delivery-info-title">Lekki Phase 1, Lagos</p>
          <p className="delivery-info-sub">
            15 Admiralty Way, Lekki Phase 1, Lagos, Nigeria.
          </p>
        </div>
      </div>

      <div className="delivery-info-divider"></div>

      {/* Delivery Instructions */}
      <div className="delivery-info-section">
        <div className="delivery-info-icon">
          <FiFileText size={20} color="#F97316" />
        </div>
        <div>
          <p className="delivery-info-label">Delivery Instructions</p>
          <p className="delivery-info-sub">
            Please call when you get here. Gate code: 1234
          </p>
        </div>
      </div>

      <div className="delivery-info-divider"></div>

      {/* Payment Method */}
      <div className="delivery-info-section">
        <div className="delivery-info-icon">
          <FiCreditCard size={20} color="#F97316" />
        </div>
        <div>
          <p className="delivery-info-label">Payment Method</p>
          <p className="delivery-info-title">Paid with Card</p>
          <p className="delivery-info-sub">**** **** **** 4242</p>
        </div>
      </div>
    </div>
  )
}

export default DeliveryInfo