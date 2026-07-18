import React, { useContext } from 'react'
import { StoreContext } from '../../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const OrderSummaryTrack = () => {
  const { getCartTotal, cartItems, foodList } = useContext(StoreContext)
  const navigate = useNavigate()

  const DELIVERY_FEE = 1200
  const SERVICE_FEE = 300
  const subtotal = getCartTotal()
  const total = subtotal + DELIVERY_FEE + SERVICE_FEE
  const cartFoodItems = foodList.filter(item => cartItems[item._id] > 0)

  if (cartFoodItems.length === 0) {
    return (
      <div className="order-summary-track">
        <h3>Order Summary</h3>
        <div className="order-summary-empty">
          <p>No order to summarize yet.</p>
          <button onClick={() => navigate('/')}>Start Ordering</button>
        </div>
      </div>
    )
  }

  return (
    <div className="order-summary-track">
      <h3>Order Summary</h3>

      <div className="track-summary-row">
        <span>Subtotal ({cartFoodItems.length} items)</span>
        <span>₦{subtotal.toLocaleString()}</span>
      </div>
      <div className="track-summary-row">
        <span>Delivery Fee</span>
        <span>₦{DELIVERY_FEE.toLocaleString()}</span>
      </div>
      <div className="track-summary-row">
        <span>Service Fee</span>
        <span>₦{SERVICE_FEE.toLocaleString()}</span>
      </div>

      <div className="track-summary-divider"></div>

      <div className="track-summary-total">
        <span>Total</span>
        <span className="track-total-amount">₦{total.toLocaleString()}</span>
      </div>

      <div className="track-security-badge">
        <div className="track-security-icon">✅</div>
        <div>
          <p className="track-security-title">Your payment is secure</p>
          <p className="track-security-sub">
            We use industry-standard encryption to keep your data safe.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OrderSummaryTrack