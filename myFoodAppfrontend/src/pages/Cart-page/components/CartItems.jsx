import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../../context/StoreContext'
import { FiTrash2 } from 'react-icons/fi'

const badgeColors = {
  'Best Seller': { bg: '#FEF3E9', color: '#F97316', icon: '🔥' },
  "Chef's Pick": { bg: '#FFFBE6', color: '#F59E0B', icon: '⭐' },
  'Spicy':       { bg: '#FEE2E2', color: '#EF4444', icon: '🌶️' },
  'New Today':   { bg: '#E0F2FE', color: '#0284C7', icon: '🆕' },
  'Limited':     { bg: '#FEE2E2', color: '#DC2626', icon: '⏰' },
}

const CartItems = () => {
  const { foodList, cartItems, addToCart, removeFromCart, deleteFromCart, clearCart } = useContext(StoreContext)
  const navigate = useNavigate()

  const cartFoodItems = foodList.filter(item => cartItems[item._id] > 0)

  return (
    <div className="cart-left">
      <h3>Cart Items ({cartFoodItems.length})</h3>

      <div className="cart-table-header">
        <span>Item</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Total</span>
        <span></span>
      </div>

      <div className="cart-items-list">
        {cartFoodItems.map((item) => {
          const qty = cartItems[item._id]
          const badgeStyle = item.badge ? badgeColors[item.badge] : null

          return (
            <div className="cart-row" key={item._id}>
              <div className="cart-item-info">
                <img src={item.img} alt={item.name} className="cart-item-img" />
                <div>
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-restaurant">Satisfy Chow</p>
                  {item.badge && badgeStyle && (
                    <div className="cart-item-badge" style={{ background: badgeStyle.bg, color: badgeStyle.color }}>
                      {badgeStyle.icon} {item.badge}
                    </div>
                  )}
                </div>
              </div>

              <p className="cart-item-price">₦{item.price.toLocaleString()}</p>

              <div className="cart-counter">
                <button onClick={() => removeFromCart(item._id)}>−</button>
                <span>{qty}</span>
                <button onClick={() => addToCart(item._id)}>+</button>
              </div>

              <p className="cart-item-total">₦{(item.price * qty).toLocaleString()}</p>

              <button className="cart-delete-btn" onClick={() => deleteFromCart(item._id)}>
                <FiTrash2 size={18} color="#F97316" />
              </button>
            </div>
          )
        })}
      </div>

      <div className="cart-actions">
        <button className="continue-btn" onClick={() => navigate('/')}>← Continue Shopping</button>
        <button className="clear-btn" onClick={clearCart}>Clear Cart 🗑️</button>
      </div>
    </div>
  )
}

export default CartItems