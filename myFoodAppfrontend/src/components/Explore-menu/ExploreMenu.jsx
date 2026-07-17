import React from 'react'
import './ExploreMenu.css'
import { menuList } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <div className="explore-menu-header">
        <div>
          <h1>Explore Our Menu</h1>
          <p className='explore-menu-desc'>Fresh ingredients. Bold flavours. Made to order. Find your next favourite meal.</p>
        </div>
        <button className="view-all-btn">View All →</button>
      </div>

      <div className="menu-list">
        {menuList.map((item, index) => (
          <div
            onClick={() => setCategory(prev => prev === item.menuName ? 'Special' : item.menuName)}
            className={`menu-item ${category === item.menuName ? 'active' : ''}`}
            key={index}
          >
            <div className="menu-item-img-wrap">
              <img src={item.menuImage} alt={item.menuName} />
            </div>
            <p className="menu-item-name">{item.menuName}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExploreMenu