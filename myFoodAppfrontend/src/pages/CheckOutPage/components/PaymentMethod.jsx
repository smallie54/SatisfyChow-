import React, { useState } from 'react'
import { FiLock } from 'react-icons/fi'

const paymentOptions = [
  { id: 'paystack', label: 'Paystack', sub: 'Pay securely with your card', icon: '💳' },
  { id: 'card', label: 'Card', sub: 'Visa, Mastercard & Verve', icon: '💳' },
  { id: 'bank', label: 'Bank Transfer', sub: 'Transfer directly from your bank', icon: '🏦' },
  { id: 'cash', label: 'Cash on Delivery', sub: 'Pay in cash when you receive', icon: '💵' },
]

const PaymentMethod = () => {
  const [selected, setSelected] = useState('paystack')

  return (
    <div className="checkout-section">
      <div className="section-number-title">
        <div className="section-number">2</div>
        <h3>Payment Method</h3>
      </div>

      <div className="payment-grid">
        {/* Left — options */}
        <div className="payment-options">
          {paymentOptions.map((option) => (
            <div
              key={option.id}
              className={`payment-option ${selected === option.id ? 'selected' : ''}`}
              onClick={() => setSelected(option.id)}
            >
              <input
                type="radio"
                checked={selected === option.id}
                onChange={() => setSelected(option.id)}
              />
              <span className="payment-icon">{option.icon}</span>
              <div>
                <p className="payment-label">{option.label}</p>
                <p className="payment-sub">{option.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right — card details */}
        <div className="card-details">
          <div className="card-details-header">
            <span className="card-chip">💳</span>
            <span className="paystack-label">≡ paystack</span>
          </div>
          <p className="card-number">1234&nbsp;&nbsp;&nbsp;5678&nbsp;&nbsp;&nbsp;9012&nbsp;&nbsp;&nbsp;3456</p>
          <div className="card-bottom">
            <div>
              <p className="card-field-label">CARD HOLDER</p>
              <p className="card-field-value">PRAISE OKENWA</p>
            </div>
            <div>
              <p className="card-field-label">EXPIRY</p>
              <p className="card-field-value">MM / YY</p>
            </div>
          </div>

          <div className="payment-security-note">
            <FiLock size={14} color="#F97316" />
            <div>
              <p className="security-note-title">Your payment is secure and encrypted</p>
              <p className="security-note-sub">We use industry-standard encryption to keep your data safe.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethod