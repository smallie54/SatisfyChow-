import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
import CartHeader from './components/CartHeader'
import CartItems from './components/CartItems'
import OrderSummary from './components/OrderSummary'
import TrustBadges from './components/TrustBadges'

const Cart = () => {
  const { foodList, cartItems } = useContext(StoreContext)
  const navigate = useNavigate()

  const cartFoodItems = foodList.filter(item => cartItems[item._id] > 0)

  if (cartFoodItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything yet.</p>
        <button onClick={() => {
          navigate('/')
          setTimeout(() => {
            const el = document.getElementById('explore-menu')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }, 100)
        }}>Browse Menu</button>
      </div>
    )
  }

  return (
    <div className='cart'>
      <CartHeader />
      <div className="cart-body">
        <CartItems />
        <OrderSummary />
      </div>
      <TrustBadges />
    </div>
  )
}

export default Cart