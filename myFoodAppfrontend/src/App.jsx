import Navbar from './components/Navbar/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home-page/home'
import PlaceOrder from './pages/CheckOutPage/Checkout'
import Cart from './pages/cart-page/cart'
import StoreProvider from './context/StoreProvider'
import TrackOrder from './pages/TrackOrderPage/TrackOrder'
import Checkout from './pages/CheckOutPage/Checkout'


function App() {

  return (
    <StoreProvider>
      < div className="app">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart-page' element={<Cart />} />
          <Route path='/Place-Order-page' element={<PlaceOrder />} />
          <Route path='/track-order' element={<TrackOrder />} />
          <Route path='/Checkout' element={<Checkout />} />
        </Routes>
      </div>
    </StoreProvider>
  )
}

export default App
