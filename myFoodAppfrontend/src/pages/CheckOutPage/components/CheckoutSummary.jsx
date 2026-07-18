import React, { useContext } from 'react'
import { StoreContext } from '../../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const CheckoutSummary = () => {
  const { foodList, cartItems, getCartTotal } = useContext(StoreContext)
  const navigate = useNavigate()

  const DELIVERY_FEE = 1200
  const SERVICE_FEE = 300
  const SAVINGS = 500
  const subtotal = getCartTotal()
  const total = subtotal + DELIVERY_FEE + SERVICE_FEE
  const cartFoodItems = foodList.filter(item => cartItems[item._id] > 0)

  return (
    <div className="checkout-summary">
      <h3>Order Summary</h3>

      {/* Items */}
      <div className="checkout-summary-items">
        {cartFoodItems.map((item) => {
          const qty = cartItems[item._id]
          return (
            <div className="checkout-summary-row" key={item._id}>
              <img src={item.img} alt={item.name} className="checkout-summary-img" />
              <div className="checkout-summary-info">
                <p className="checkout-summary-name">{item.name}</p>
                <p className="checkout-summary-restaurant">Satisfy Chow</p>
              </div>
              <span className="checkout-summary-qty">{qty}</span>
              <p className="checkout-summary-price">₦{(item.price * qty).toLocaleString()}</p>
            </div>
          )
        })}
      </div>

      <div className="checkout-summary-divider"></div>

      {/* Totals */}
      <div className="checkout-total-row">
        <span>Subtotal ({cartFoodItems.length} items)</span>
        <span>₦{subtotal.toLocaleString()}</span>
      </div>
      <div className="checkout-total-row">
        <span>Delivery Fee ℹ️</span>
        <span>₦{DELIVERY_FEE.toLocaleString()}</span>
      </div>
      <div className="checkout-total-row">
        <span>Service Fee ℹ️</span>
        <span>₦{SERVICE_FEE.toLocaleString()}</span>
      </div>

      <div className="checkout-summary-divider"></div>

      <div className="checkout-grand-total">
        <span>Total</span>
        <span className="grand-total-amount">₦{total.toLocaleString()}</span>
      </div>

      <div className="checkout-savings">
        🏷️ You're saving ₦{SAVINGS.toLocaleString()} on this order!
      </div>

      <button className="place-order-btn" onClick={() => navigate('/track-order')}>
        🔒 Place Order →
      </button>

      <p className="terms-note">
        By placing this order, you agree to our{' '}
        <span className="terms-link">Terms & Conditions</span>
      </p>

      {/* Mini trust badges */}
      <div className="checkout-mini-badges">
        <div className="mini-badge">
          <span>🛵</span>
          <div>
            <p>Fast Delivery</p>
            <p>25-35 mins</p>
          </div>
        </div>
        <div className="mini-badge">
          <span>🏅</span>
          <div>
            <p>Best Quality</p>
            <p>Fresh & Tasty</p>
          </div>
        </div>
        <div className="mini-badge">
          <span>🎧</span>
          <div>
            <p>24/7 Support</p>
            <p>We're here to help</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutSummary