// Temporary stand-in for order data.
// Shape matches what a real checkout flow / API would eventually produce,
// so components below never need to change when that's wired up —
// they just receive an `order` prop.

export const dummyOrder = {
  id: 'SC123456',
  placedAt: '2024-05-25T11:30:00',
  status: 'on-the-way', // 'confirmed' | 'preparing' | 'on-the-way' | 'delivered'

  estimatedDelivery: {
    windowStart: '12:15 PM',
    windowEnd: '12:30 PM',
    date: 'May 25, 2024',
  },

  rider: {
    name: 'John Rider',
    phone: '+2348012345678',
  },

  restaurant: {
    name: 'Satisfy Chow Restaurant',
    note: 'Preparing your order',
  },

  items: [
    {
      _id: '1',
      name: 'Native Jollof Rice',
      restaurant: "Mama's Kitchen",
      price: 4500,
      qty: 1,
      img: '/images/jollof.jpg',
    },
    {
      _id: '2',
      name: 'Chicken Shawarma',
      restaurant: 'Wraps & More',
      price: 3500,
      qty: 1,
      img: '/images/shawarma.jpg',
    },
    {
      _id: '3',
      name: 'Beans & Plantain',
      restaurant: 'Comfort Bites',
      price: 3000,
      qty: 1,
      img: '/images/beans.jpg',
    },
  ],

  deliveryAddress: {
    title: 'Lekki Phase 1, Lagos',
    sub: '15 Admiralty Way, Lekki Phase 1, Lagos, Nigeria.',
  },

  deliveryInstructions: 'Please call when you get here. Gate code: 1234',

  paymentMethod: {
    title: 'Paid with Card',
    sub: '**** **** **** 4242',
  },

  fees: {
    deliveryFee: 1200,
    serviceFee: 300,
  },

  timeline: [
    {
      id: 1,
      title: 'Order Confirmed',
      time: '11:30 AM',
      desc: null,
      status: 'done',
    },
    {
      id: 2,
      title: 'Preparing Food',
      time: '11:35 AM',
      desc: null,
      status: 'done',
    },
    {
      id: 3,
      title: 'On the Way',
      time: '11:50 AM',
      desc: 'Your rider is on the way to deliver your order',
      status: 'active',
    },
    {
      id: 4,
      title: 'Delivered',
      time: 'Pending',
      desc: null,
      status: 'pending',
    },
  ],
}