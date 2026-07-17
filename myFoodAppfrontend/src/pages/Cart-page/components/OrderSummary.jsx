import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../../context/StoreContext'

const OrderSummary = () => {
  const { cartItems, foodList, getCartTotal } = useContext(StoreContext)
  const [promoOpen, setPromoOpen] = useState(false)
  const [promoCode, setPromoCode] = useState('')
  const navigate = useNavigate()

  const DELIVERY_FEE = 1200
  const SERVICE_FEE = 300
  const SAVINGS = 500

  const subtotal = getCartTotal()
  const total = subtotal + DELIVERY_FEE + SERVICE_FEE
  const cartFoodItems = foodList.filter(item => cartItems[item._id] > 0)

  return (
    <div className="cart-right">
      <h3>Order Summary</h3>

      <div className="summary-row">
        <span>Subtotal ({cartFoodItems.length} items)</span>
        <span>₦{subtotal.toLocaleString()}</span>
      </div>
      <div className="summary-row">
        <span>Delivery Fee ℹ️</span>
        <span>₦{DELIVERY_FEE.toLocaleString()}</span>
      </div>
      <div className="summary-row">
        <span>Service Fee ℹ️</span>
        <span>₦{SERVICE_FEE.toLocaleString()}</span>
      </div>

      <div className="summary-divider"></div>

      <div className="summary-total">
        <span>Total</span>
        <span className="total-amount">₦{total.toLocaleString()}</span>
      </div>

      <div className="summary-savings">
        🏷️ You're saving ₦{SAVINGS.toLocaleString()} on this order!
      </div>

      <div className="promo-section">
        <div className="promo-toggle" onClick={() => setPromoOpen(prev => !prev)}>
          <span>Have a promo code?</span>
          <span>{promoOpen ? '▲' : '▼'}</span>
        </div>
        {promoOpen && (
          <div className="promo-input">
            <input
              type="text"
              placeholder="Enter promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button>Apply</button>
          </div>
        )}
      </div>

      <button className="checkout-btn" onClick={() => navigate('/Place-Order-page')}>
        Proceed to Checkout →
      </button>
      <p className="checkout-or">or</p>
      <button className="paystack-btn">
        <span>💳</span> Checkout with Paystack
      </button>
      <p className="payment-secure">✅ Your payment is secure and encrypted</p>

      <div className="delivery-info">
        <div className="delivery-left">
          <span className="delivery-icon">🛵</span>
          <div>
            <p className="delivering-to">Delivering to</p>
            <p className="delivery-address">Lekki Phase 1, Lagos</p>
          </div>
        </div>
        <span className="change-link">Change</span>
      </div>

      <div className="delivery-time">
        <span>🕐 Estimated Delivery</span>
        <span>25 – 35 mins</span>
      </div>
    </div>
  )
}

export default OrderSummary