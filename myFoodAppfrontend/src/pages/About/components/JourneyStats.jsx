import React from 'react'
import { MdPeopleOutline, MdStorefront, MdDeliveryDining, MdLocationOn } from 'react-icons/md'

const stats = [
  { id: 1, icon: MdPeopleOutline, value: '10K+', label: 'Happy Customers' },
  { id: 2, icon: MdStorefront, value: '250+', label: 'Partner Restaurants' },
  { id: 3, icon: MdDeliveryDining, value: '50K+', label: 'Orders Delivered' },
  { id: 4, icon: MdLocationOn, value: '20+', label: 'Cities Covered' },
]

const JourneyStats = () => {
  return (
    <div className="journey-stats">
      <h2>Our Journey So Far</h2>

      <div className="journey-stats-grid">
        {stats.map(({ id, icon: Icon, value, label }, index) => (
          <React.Fragment key={id}>
            <div className="journey-stat">
              <div className="journey-stat-icon">
                <Icon size={24} color="#F97316" />
              </div>
              <p className="journey-stat-value">{value}</p>
              <p className="journey-stat-label">{label}</p>
            </div>
            {index < stats.length - 1 && <div className="journey-stat-divider" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default JourneyStats