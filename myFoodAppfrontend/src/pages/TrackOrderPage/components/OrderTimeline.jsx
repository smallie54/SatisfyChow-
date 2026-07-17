import React from 'react'
import { FiCheck } from 'react-icons/fi'
import { MdDeliveryDining } from 'react-icons/md'
import { FaHome } from 'react-icons/fa'

const STEP_ICON = {
  done: <FiCheck size={16} />,
  active: <MdDeliveryDining size={18} />,
  pending: <FaHome size={14} />,
}

const OrderTimeline = ({ order }) => {
  const steps = order.timeline

  return (
    <div className="order-timeline">
      {steps.map((step, index) => (
        <div className="timeline-item" key={step.id}>
          <div className={`timeline-icon ${step.status}`}>
            {STEP_ICON[step.status]}
          </div>

          {index < steps.length - 1 && (
            <div className={`timeline-line ${step.status === 'done' ? 'done' : ''}`}></div>
          )}

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