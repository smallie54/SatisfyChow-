import React from 'react'
import './TrackOrder.css'
import { dummyOrder } from './dummyOrder'

import TrackHeader from './components/TrackHeader'
import OrderCard from './components/OrderCard'
import OrderMap from './components/OrderMap'
import OrderTimeline from './components/OrderTimeline'
import OrderDetails from './components/OrderDetails'
import DeliveryInfo from './components/DeliveryInfo'
import OrderSummaryTrack from './components/OrderSummaryTrack'
import HungryAgain from './components/HungryAgain'

const TrackOrder = () => {
  // TODO: once checkout/backend exists, replace this with the real order —
  // e.g. useParams() for an orderId + a fetch/context lookup.
  // Every child below only cares that it receives an `order` prop with this shape,
  // so swapping the source later doesn't require touching any child component.
  const order = dummyOrder

  if (!order) {
    return (
      <div className="track-order">
        <TrackHeader />
        <p>We couldn't find that order.</p>
      </div>
    )
  }

  return (
    <div className="track-order">
      <TrackHeader />

      <div className="track-middle">
        <OrderCard order={order} />
        <OrderMap order={order} />
        <OrderTimeline order={order} />
      </div>

      <div className="track-bottom">
        <OrderDetails order={order} />
        <DeliveryInfo order={order} />
        <OrderSummaryTrack order={order} />
      </div>

      <HungryAgain />
    </div>
  )
}

export default TrackOrder