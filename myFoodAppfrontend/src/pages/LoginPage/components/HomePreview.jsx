import React from 'react'
import { foodList } from '../../../assets/assets'

// Still a placeholder for your real Home page component overall,
// but now pulls real images/names from foodList instead of empty color blocks.
const previewItems = foodList.slice(0, 2)

const HomePreview = () => {
  return (
    <div className="home-preview">
      <div className="home-preview-badge">Welcome back 👋</div>
      <h2>Your favorites are waiting</h2>
      <p>Continue exploring restaurants, deals, and your recent orders.</p>

      <div className="home-preview-cards">
        {previewItems.map((item) => (
          <div className="home-preview-card" key={item._id}>
            <img src={item.img} alt={item.name} className="home-preview-card-img" />
            <p className="home-preview-card-title">{item.name}</p>
            <p className="home-preview-card-sub">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePreview