import React from 'react'
import { FiPhone, FiMessageSquare } from 'react-icons/fi'

const STATUS_LABELS = {
  confirmed: 'Order Confirmed',
  preparing: 'Preparing',
  'on-the-way': 'On the way',
  delivered: 'Delivered',
}

const formatPlacedAt = (isoString) => {
  const date = new Date(isoString)
  return date.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
}

const OrderCard = ({ order }) => {
  const statusLabel = STATUS_LABELS[order.status] ?? order.status

  return (
    <div className="order-card">
      <div className="order-card-top">
        <div>
          <h3>Order #{order.id}</h3>
          <p className="order-date">Placed on {formatPlacedAt(order.placedAt)}</p>
          <div className="order-status-badge">
            <span className="status-dot"></span> {statusLabel}
          </div>
        </div>
      </div>

      <div className="order-estimated">
        <p className="estimated-label">Estimated Delivery</p>
        <h2 className="estimated-time">
          {order.estimatedDelivery.windowStart} – {order.estimatedDelivery.windowEnd}
        </h2>
        <p className="estimated-date">{order.estimatedDelivery.date}</p>
      </div>

      <div className="order-rider">
        <div className="rider-avatar">🧑🏾</div>
        <div className="rider-info">
          <p className="rider-name">{order.rider.name}</p>
          <p className="rider-label">Your Rider</p>
        </div>
        <div className="rider-actions">
          <a href={`tel:${order.rider.phone}`} className="rider-btn">
            <FiPhone size={16} color="#F97316" />
          </a>
          <button type="button" className="rider-btn">
            <FiMessageSquare size={16} color="#F97316" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderCard