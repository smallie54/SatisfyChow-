import React from 'react'

const steps = [
  {
    id: 1,
    title: 'Order Confirmed',
    time: '11:30 AM',
    desc: null,
    status: 'done'
  },
  {
    id: 2,
    title: 'Preparing Food',
    time: '11:35 AM',
    desc: null,
    status: 'done'
  },
  {
    id: 3,
    title: 'On the Way',
    time: '11:50 AM',
    desc: 'Your rider is on the way to deliver your order',
    status: 'active'
  },
  {
    id: 4,
    title: 'Delivered',
    time: 'Pending',
    desc: null,
    status: 'pending'
  },
]

const OrderTimeline = () => {
  return (
    <div className="order-timeline">
      {steps.map((step, index) => (
        <div className="timeline-item" key={step.id}>
          {/* Icon */}
          <div className={`timeline-icon ${step.status}`}>
            {step.status === 'done' && '✓'}
            {step.status === 'active' && '🛵'}
            {step.status === 'pending' && '🏠'}
          </div>

          {/* Connector line */}
          {index < steps.length - 1 && (
            <div className={`timeline-line ${step.status === 'done' ? 'done' : ''}`}></div>
          )}

          {/* Content */}
          <div className="timeline-content">
            <p className={`timeline-title ${step.status}`}>{step.title}</p>
            <p className="timeline-time">{step.time}</p>
            {step.desc && <p className="timeline-desc">{step.desc}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}

export default OrderTimeline