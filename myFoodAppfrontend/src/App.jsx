import Navbar from './components/Navbar/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home-page/home'
import PlaceOrder from './pages/CheckOutPage/Checkout'
import Cart from './pages/cart-page/cart'
import StoreProvider from './context/StoreProvider'
import TrackOrder from './pages/TrackOrderPage/TrackOrder'
import Checkout from './pages/CheckOutPage/Checkout'
import LoginModal from './pages/LoginPage/LoginModal'
import About from './pages/About/About'


function App() {

  return (
    <StoreProvider>
      < div className="app">
        <Navbar />
        <LoginModal />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart-page' element={<Cart />} />
          <Route path='/Place-Order-page' element={<PlaceOrder />} />
          <Route path='/track-order' element={<TrackOrder />} />
          <Route path='/Checkout' element={<Checkout />} />
          <Route path='/About' element={<About/>} />
        </Routes>
      </div>
    </StoreProvider>
  )
}

export default App
