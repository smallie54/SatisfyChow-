import React, {useState} from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/Explore-menu/ExploreMenu'
import FoodDisplay from '../../components/foodDisplay/FoodDisplay'
import DealsBanner from '../../components/dealsBanner/dealsBanner'
import HowItWorks from '../../components/how-it-works/howItWorks'
import GetTheApp from '../../components/getTheApp/GetTheApp'
import Footer from '../../components/footer/Footer'
const Home = () => {
  const [category, setCategory] = useState('Special')
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} setCategory={setCategory}/>
      <DealsBanner/>
      <HowItWorks/>
      <GetTheApp/>
      <Footer/>
    </div>
  )
}

export default Home
