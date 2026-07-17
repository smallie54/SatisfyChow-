import Navbar from './components/Navbar/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home-page/home'
import PlaceOrder from './pages/Place-Order-page/PlaceOrder'
import Cart from './pages/cart-page/cart'
import StoreProvider from './context/StoreProvider'  
import TrackOrder from './pages/TrackOrderPage/TrackOrder'

function App() {

  return (
    <StoreProvider>
      < div className="app">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart-page' element={<Cart />} />
          <Route path='/Place-Order-page' element={<PlaceOrder />} />
          <Route path='/TrackOrderPage' element={<TrackOrder />} />
        </Routes>
      </div>
    </StoreProvider>
  )
}

export default App
