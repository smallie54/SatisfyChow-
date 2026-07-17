import React from 'react'

const badges = [
  { icon: '🛵', title: 'Fast Delivery', sub: 'Quick & Reliable' },
  { icon: '🏅', title: 'Best Quality', sub: 'Fresh & Tasty' },
  { icon: '🛡️', title: 'Secure Payment', sub: '100% Protected' },
  { icon: '🎧', title: '24/7 Support', sub: "We're here to help" },
]

const TrustBadges = () => {
  return (
    <div className="cart-trust-badges">
      {badges.map((badge, index) => (
        <div className="trust-badge" key={index}>
          <span>{badge.icon}</span>
          <div>
            <p>{badge.title}</p>
            <p>{badge.sub}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TrustBadges