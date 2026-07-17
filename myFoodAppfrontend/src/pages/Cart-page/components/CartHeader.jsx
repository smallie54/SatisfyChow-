import React from 'react'
import { useNavigate } from 'react-router-dom'

const CartHeader = () => {
  const navigate = useNavigate()

  return (
    <div className="cart-page-header">
      <div>
        <h1>Your Cart</h1>
        <div className="cart-underline"></div>
        <p className="cart-breadcrumb">
          <span onClick={() => navigate('/')}>Home</span> &gt;{' '}
          <span className="breadcrumb-active">Cart</span>
        </p>
      </div>
      <div className="cart-secure-badge">
        <div className="secure-icon">✅</div>
        <div>
          <p className="secure-title">100% Secure Payment</p>
          <p className="secure-sub">Your details are safe with us</p>
        </div>
      </div>
    </div>
  )
}

export default CartHeader