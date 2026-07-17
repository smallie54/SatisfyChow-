import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { HiOutlineHeadphones } from 'react-icons/hi2'

const TrackHeader = () => {
  const navigate = useNavigate()

  return (
    <div className="track-header">
      <div>
        <h1>Track Your Order</h1>
        <p className="track-breadcrumb">
          <span onClick={() => navigate('/TrackOrderPage')}>Home</span> &gt;{' '}
          <span className="track-breadcrumb-active">Track Order</span>
        </p>
      </div>

      <div className="track-support">
        <span className="support-icon">
          <HiOutlineHeadphones size={28} color="#1a1a1a" />
        </span>
        <div>
          <p className="support-title">Need help?</p>
          <p className="support-link">Contact Support</p>
        </div>
      </div>
    </div>
  )
}

export default TrackHeader