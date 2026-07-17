import React from 'react'

const OrderMap = () => {
  return (
    <div className="order-map">
      {/* Map background */}
      <div className="map-bg">

        {/* Road lines */}
        <div className="map-road horizontal" style={{ top: '40%', left: '0', width: '100%' }}></div>
        <div className="map-road horizontal" style={{ top: '60%', left: '0', width: '100%' }}></div>
        <div className="map-road vertical" style={{ left: '30%', top: '0', height: '100%' }}></div>
        <div className="map-road vertical" style={{ left: '60%', top: '0', height: '100%' }}></div>
        <div className="map-road vertical" style={{ left: '80%', top: '0', height: '100%' }}></div>

        {/* Map blocks */}
        <div className="map-block" style={{ top: '10%', left: '5%', width: '20%', height: '25%' }}></div>
        <div className="map-block" style={{ top: '10%', left: '32%', width: '25%', height: '25%' }}></div>
        <div className="map-block" style={{ top: '10%', left: '62%', width: '15%', height: '25%' }}></div>
        <div className="map-block blue" style={{ top: '65%', left: '5%', width: '22%', height: '28%' }}></div>
        <div className="map-block" style={{ top: '65%', left: '32%', width: '25%', height: '28%' }}></div>
        <div className="map-block" style={{ top: '65%', left: '62%', width: '15%', height: '28%' }}></div>

        {/* Dotted route line */}
        <svg className="map-route" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 80 150 Q 200 100 280 150 Q 350 200 420 150"
            stroke="#F97316"
            strokeWidth="3"
            strokeDasharray="8 6"
            fill="none"
          />
        </svg>

        {/* Restaurant pin */}
        <div className="map-pin restaurant-pin" style={{ top: '35%', left: '10%' }}>
          <div className="pin-icon">🍽️</div>
          <div className="pin-label">
            <p className="pin-title">Satisfy Chow Restaurant</p>
            <p className="pin-sub">Preparing your order</p>
          </div>
        </div>

        {/* Rider icon */}
        <div className="map-rider" style={{ top: '38%', left: '48%' }}>
          🛵
        </div>

        {/* Destination pin */}
        <div className="map-pin destination-pin" style={{ top: '30%', left: '72%' }}>
          <div className="pin-icon green">🏠</div>
          <div className="pin-label right">
            <p className="pin-title">Your Location</p>
            <p className="pin-sub">Lekki Phase 1, Lagos</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OrderMap