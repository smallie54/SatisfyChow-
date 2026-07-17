import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import { FiFileText, FiCreditCard } from 'react-icons/fi'

const DeliveryInfo = ({ order }) => {
  return (
    <div className="delivery-info-card">
      <div className="delivery-info-section">
        <div className="delivery-info-icon">
          <MdLocationOn size={20} color="#F97316" />
        </div>
        <div>
          <p className="delivery-info-label">Delivery Address</p>
          <p className="delivery-info-title">{order.deliveryAddress.title}</p>
          <p className="delivery-info-sub">{order.deliveryAddress.sub}</p>
        </div>
      </div>

      <div className="delivery-info-divider"></div>

      <div className="delivery-info-section">
        <div className="delivery-info-icon">
          <FiFileText size={20} color="#F97316" />
        </div>
        <div>
          <p className="delivery-info-label">Delivery Instructions</p>
          <p className="delivery-info-sub">{order.deliveryInstructions}</p>
        </div>
      </div>

      <div className="delivery-info-divider"></div>

      <div className="delivery-info-section">
        <div className="delivery-info-icon">
          <FiCreditCard size={20} color="#F97316" />
        </div>
        <div>
          <p className="delivery-info-label">Payment Method</p>
          <p className="delivery-info-title">{order.paymentMethod.title}</p>
          <p className="delivery-info-sub">{order.paymentMethod.sub}</p>
        </div>
      </div>
    </div>
  )
}

export default DeliveryInfo