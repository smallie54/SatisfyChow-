import React from 'react'
import { useNavigate } from 'react-router-dom'

const TrackHeader = () => {
  const navigate = useNavigate()

  return (
    <div className="track-header">
      <div>
        <h1>Track Your Order</h1>
        <p className="track-breadcrumb">
          <span onClick={() => navigate('/')}>Home</span> &gt;{' '}
          <span className="track-breadcrumb-active">Track Order</span>
        </p>
      </div>

      <div className="track-support">
        <span className="support-icon">🎧</span>
        <div>
          <p className="support-title">Need help?</p>
          <p className="support-link">Contact Support</p>
        </div>
      </div>
    </div>
  )
}

export default TrackHeader