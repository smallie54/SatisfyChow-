import React from 'react'
import { MdVerifiedUser } from 'react-icons/md'

const OrderSummaryTrack = ({ order }) => {
  const subtotal = order.items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const { deliveryFee, serviceFee } = order.fees
  const total = subtotal + deliveryFee + serviceFee
  const itemCount = order.items.reduce((sum, item) => sum + item.qty, 0)

  return (
    <div className="order-summary-track">
      <h3>Order Summary</h3>

      <div className="summary-row">
        <span className="summary-label">Subtotal ({itemCount} items)</span>
        <span className="summary-value">₦{subtotal.toLocaleString()}</span>
      </div>
      <div className="summary-row">
        <span className="summary-label">Delivery Fee</span>
        <span className="summary-value">₦{deliveryFee.toLocaleString()}</span>
      </div>
      <div className="summary-row">
        <span className="summary-label">Service Fee</span>
        <span className="summary-value">₦{serviceFee.toLocaleString()}</span>
      </div>

      <div className="summary-divider"></div>

      <div className="summary-row summary-total">
        <span className="summary-label">Total</span>
        <span className="summary-value">₦{total.toLocaleString()}</span>
      </div>

      <div className="summary-secure">
        <div className="summary-secure-icon">
          <MdVerifiedUser size={20} color="#F97316" />
        </div>
        <div>
          <p className="summary-secure-title">Your payment is secure</p>
          <p className="summary-secure-sub">
            We use industry-standard encryption to keep your data safe.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OrderSummaryTrack