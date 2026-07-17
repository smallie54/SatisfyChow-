import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { FiHeart } from 'react-icons/fi'
import { FaHeart, FaStar } from 'react-icons/fa'
import { StoreContext } from '../../context/StoreContext'

const badgeColors = {
  'Best Seller': { bg: '#FEF3E9', color: '#F97316', icon: '🔥' },
  "Chef's Pick":  { bg: '#FFFBE6', color: '#F59E0B', icon: '⭐' },
  'Spicy':        { bg: '#FEE2E2', color: '#EF4444', icon: '🌶️' },
  'New Today':    { bg: '#E0F2FE', color: '#0284C7', icon: '🆕' },
  'Limited':      { bg: '#FEE2E2', color: '#DC2626', icon: '⏰' },
}

const FoodItem = ({ _id, name, price, description, img, badge, rating = 4.5, reviews = 120, deliveryTime = '25-35 mins' }) => {
  const [liked, setLiked] = useState(false)
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)  // ✅ from context

  const quantity = cartItems[_id] || 0  // ✅ read quantity from context

  const badgeStyle = badge ? badgeColors[badge] : null

  return (
    <div className='food-item'>
      <div className="food-item-img-cont">
        <img src={img} alt={name} className='food-item-img' />

        {badge && badgeStyle && (
          <div className="food-item-badge" style={{ background: badgeStyle.bg, color: badgeStyle.color }}>
            <span>{badgeStyle.icon}</span> {badge}
          </div>
        )}

        <button className="food-item-heart" onClick={() => setLiked(prev => !prev)}>
          {liked
            ? <FaHeart size={16} color="#F97316" />
            : <FiHeart size={16} color="#888" />
          }
        </button>
      </div>

      <div className="food-item-info">
        <div className="food-item-top">
          <p className="food-item-name">{name}</p>
          <p className="food-item-price">₦{price.toLocaleString()}</p>
        </div>

        <p className="food-item-desc">{description}</p>

        <div className="food-item-meta">
          <span className="food-item-rating">
            <FaStar size={12} color="#F97316" /> {rating} ({reviews})
          </span>
          <span className="food-item-time">🕐 {deliveryTime}</span>
        </div>

        {quantity === 0 ? (
          <button className="food-item-cart-btn" onClick={() => addToCart(_id)}>  {/* ✅ */}
            Add to Cart <span>+</span>
          </button>
        ) : (
          <div className="food-item-counter">
            <button className="counter-btn" onClick={() => removeFromCart(_id)}>−</button>  {/* ✅ */}
            <span className="counter-value">{quantity}</span>
            <button className="counter-btn" onClick={() => addToCart(_id)}>+</button>  {/* ✅ */}
          </div>
        )}
      </div>
    </div>
  )
}

export default FoodItem