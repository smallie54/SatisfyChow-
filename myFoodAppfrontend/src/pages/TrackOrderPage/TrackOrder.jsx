import React from 'react'
import './TrackOrder.css'
import TrackHeader from './components/TrackHeader'
import OrderCard from './components/OrderCard'
import OrderMap from './components/OrderMap'
import OrderTimeline from './components/OrderTimeline'
import OrderDetails from './components/OrderDetails'
import DeliveryInfo from './components/DeliveryInfo'
import OrderSummaryTrack from './components/OrderSummaryTrack'
import HungryAgain from './components/HungryAgain'
import Footer from '../../components/Footer/Footer'

const TrackOrder = () => {
  return (
    <div className="track-order">
      <TrackHeader />

    
      <div className="track-middle">
        <OrderCard />
        <OrderMap />
        <OrderTimeline />
      </div>

      <div className="track-bottom">
        <OrderDetails />
        <DeliveryInfo />
        <OrderSummaryTrack />
      </div>

      <HungryAgain />
      <Footer />
    </div>
  )
}

export default TrackOrder