import React, { useContext } from 'react'
import './foodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../foodItems/foodItem'

const FoodDisplay = ({ category, setCategory }) => {
  const { foodList } = useContext(StoreContext);

  const filteredList = foodList.filter(item =>
    category === 'All' ? true : item.category === category
  );

  return (
    <div className='food-display' id='food-display'>
      <div className="food-display-header">
        <h2>
          {category === 'Special' ? <>Popular Meals 🔥</> : category === 'All' ? 'All Meals' : category}
        </h2>
        <a onClick={() => setCategory('All')} className="view-all-link">View All Meals →</a>
      </div>

      <div className="food-display-list">
        {filteredList.map((item, index) => (
          <FoodItem
            key={index}
            _id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            img={item.img}
            badge={item.badge}
            rating={item.rating}
            reviews={item.reviews}
            deliveryTime={item.deliveryTime}
          />
        ))}
      </div>
    </div>
  )
}

export default FoodDisplay