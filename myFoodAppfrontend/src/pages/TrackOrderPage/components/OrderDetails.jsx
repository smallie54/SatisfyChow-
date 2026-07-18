import React, { useContext } from 'react'
import { StoreContext } from '../../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const OrderDetails = () => {
  const { foodList, cartItems } = useContext(StoreContext)
  const navigate = useNavigate()

  const cartFoodItems = foodList.filter(item => cartItems[item._id] > 0)

  return (
    <div className="order-details">
      <h3>Order Details</h3>

      <div className="order-details-list">
        {cartFoodItems.length > 0 ? cartFoodItems.map((item) => {
          const qty = cartItems[item._id]
          return (
            <div className="order-details-row" key={item._id}>
              <img src={item.img} alt={item.name} className="order-details-img" />
              <div className="order-details-info">
                <p className="order-details-name">{item.name}</p>
                <p className="order-details-restaurant">Satisfy Chow</p>
              </div>
              <p className="order-details-qty">x{qty}</p>
              <p className="order-details-price">₦{(item.price * qty).toLocaleString()}</p>
            </div>
          )
        }) : (
          <div className="order-details-empty">
            <p>No items in your order yet.</p>
            <button onClick={() => navigate('/')}>Browse Menu</button>
          </div>
        )}
      </div>

      {cartFoodItems.length > 0 && (
        <button className="view-receipt-btn">🧾 View Receipt</button>
      )}
    </div>
  )
}

export default OrderDetails