import React from 'react'
import { FiFileText } from 'react-icons/fi'

const OrderDetails = ({ order }) => {
  return (
    <div className="order-details">
      <h3>Order Details</h3>

      <div className="order-details-list">
        {order.items.map((item) => (
          <div className="order-details-row" key={item._id}>
            {item.img ? (
              <img src={item.img} alt={item.name} className="order-details-img" />
            ) : (
              <div className="order-details-img placeholder"></div>
            )}
            <div className="order-details-info">
              <p className="order-details-name">{item.name}</p>
              <p className="order-details-restaurant">{item.restaurant}</p>
            </div>
            <p className="order-details-qty">x{item.qty}</p>
            <p className="order-details-price">
              ₦{(item.price * item.qty).toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      <button type="button" className="view-receipt-btn">
        <FiFileText size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />
        View Receipt
      </button>
    </div>
  )
}

export default OrderDetails