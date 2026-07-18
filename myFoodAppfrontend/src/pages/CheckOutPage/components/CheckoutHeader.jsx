import React from 'react'
import { useNavigate } from 'react-router-dom'

const CheckoutHeader = () => {
  const navigate = useNavigate()

  return (
    <div className="checkout-header">
      <div>
        <h1>Checkout</h1>
        <p className="checkout-breadcrumb">
          <span onClick={() => navigate('/Cart-page')}>Cart</span> &gt;{' '}
          <span className="breadcrumb-active">Checkout</span> &gt;{' '}
          <span>Confirm</span>
        </p>
      </div>
      <div className="checkout-secure-badge">
        <span className="secure-shield">🛡️</span>
        <div>
          <p className="secure-title">100% Secure Checkout</p>
          <p className="secure-sub">Your payment and details are safe with us.</p>
        </div>
      </div>
    </div>
  )
}

export default CheckoutHeader