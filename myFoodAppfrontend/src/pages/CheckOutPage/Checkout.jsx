import React from 'react'
import './Checkout.css'
import CheckoutHeader from './components/CheckoutHeader'
import DeliveryForm from './components/DeliveryForm'
import PaymentMethod from './components/PaymentMethod'
import ReviewOrder from './components/ReviewOrder'
import CheckoutSummary from './components/CheckoutSummary'
import Footer from '../../components/Footer/Footer'

const Checkout = () => {
  return (
    <div className="checkout">
      <CheckoutHeader />
      <div className="checkout-body">
        <div className="checkout-left">
          <DeliveryForm />
          <PaymentMethod />
          <ReviewOrder />
        </div>
        <CheckoutSummary />
      </div>
      <Footer />
    </div>
  )
}

export default Checkout