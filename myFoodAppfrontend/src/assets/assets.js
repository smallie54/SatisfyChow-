import amalaDish from './images/amalaEwedudish.png'
import sugercanejuice from './images/sugercanejuice.png'
import suya from './images/suya.png';
import satisfyChow from './images/Satisfychwlogo.png'
import menuRice from './images/Menu-rice-img.png'
import menuSwallow from './images/Menu-swallow-img.png'
import menuSalad from './images/Menu-salad-img.png'
import menuYamAndEgg from './images/Menu-yam-img.png'
import menuDrinks from './images/Menu-drinks-img.png'
import breadAndEgg from './images/breakfast special.png'
import beansAndPlantain from './images/beans and plantain.png'
import shawarma from './images/shawarma.png'

export const assets = {
    amalaDish,
    sugercanejuice,
    suya,
    satisfyChow,
    menuRice
}
export const menuList = [
    {
        menuName: 'Rice',
        menuImage: menuRice,
    },
    {
        menuName: 'Swallow',
        menuImage: menuSwallow,
    },
    {
        menuName: 'Salad',
        menuImage: menuSalad,
    },
    {
        menuName: 'Yam',
        menuImage: menuYamAndEgg,
    },
    {
        menuName: 'Drinks',
        menuImage: menuDrinks,
    },
    {
        menuName: 'grills',
        menuImage: suya
    },
    {
        menuName: 'pasta',
        menuImage: menuRice
    }
    ,
    {
        menuName: 'pasta',
        menuImage: menuRice
    }
    ,
    {
        menuName: 'pasta',
        menuImage: menuRice
    }
    ,
    {
        menuName: 'pasta',
        menuImage: menuRice
    }
    ,
    {
        menuName: 'pasta',
        menuImage: menuRice
    }
    ,
    {
        menuName: 'pasta',
        menuImage: menuRice
    }
]

export const foodList = [
    {
        _id: '1',
        name: 'Jollof Rice and Chicken',
        price: 3000,
        description: 'Steaming hot Jollof with Chicken',
        category: 'Rice',
        img: menuRice,
        badge: 'Best Seller',
        rating: 4.8,
        reviews: 320,
        deliveryTime: '25-35 mins'
    },
    {
        _id: '2',
        name: 'Amala and Egusi',
        price: 3000,
        description: 'Amala and Egusi',
        category: 'Swallow',
        img: menuSwallow,
        badge: "Chef's Pick",
        rating: 4.7,
        reviews: 210,
        deliveryTime: '20-30 mins'
    },
    {
        _id: '3',
        name: 'Cream Salad',
        price: 3000,
        description: 'Cream Salad',
        category: 'salad',
        img: menuSalad,
        badge: null,
        rating: 4.3,
        reviews: 95,
        deliveryTime: '10-15 mins'
    },
    {
        _id: '4',
        name: 'Yam and Egg',
        price: 3000,
        description: 'Yam and Egg',
        category: 'Yam',
        img: menuYamAndEgg,
        badge: 'New Today',
        rating: 4.5,
        reviews: 60,
        deliveryTime: '15-20 mins'
    },
    {
        _id: '5',
        name: 'Sugercane Juice',
        price: 3000,
        description: 'Sugercane Juice',
        category: 'Drinks',
        img: menuDrinks,
        badge: null,
        rating: 4.6,
        reviews: 140,
        deliveryTime: '5-10 mins'
    },
    {
        _id: '6',
        name: 'Poundedyam and Egusi',
        price: 3000,
        description: 'A plate of Poundedyam and Egusi',
        category: 'Swallow',
        img: menuSwallow,
        badge: 'Spicy',
        rating: 4.9,
        reviews: 180,
        deliveryTime: '20-30 mins'
    },
    {
        _id: '7',
        name: 'Suya',
        price: 3000,
        description: 'Grilled Suya',
        category: 'Suya',
        img: suya,
        badge: 'Spicy',
        rating: 4.9,
        reviews: 275,
        deliveryTime: '15-25 mins'
    },
    {
        _id: '8',
        name: 'Ofada Rice',
        price: 3000,
        description: 'A plate of Ofada Rice',
        category: 'Rice',
        img: menuRice,
        badge: null,
        rating: 4.4,
        reviews: 110,
        deliveryTime: '25-35 mins'
    },
    {
        _id: '9',
        name: 'Semo and Egusi',
        price: 3000,
        description: 'A plate of Semo and Egusi',
        category: 'Swallow',
        img: menuSwallow,
        badge: null,
        rating: 4.3,
        reviews: 88,
        deliveryTime: '20-30 mins'
    },
    {
        _id: '10',
        name: 'Spaghetti',
        price: 3000,
        description: 'A plate of Spaghetti',
        category: 'pasta',
        img: menuRice,
        badge: 'New Today',
        rating: 4.2,
        reviews: 45,
        deliveryTime: '20-25 mins'
    },
    {
        _id: '11',
        name: 'Bread and Egg',
        price: 7000,
        description: 'Bread and Egg',
        category: 'Special',
        img: breadAndEgg,
        badge: 'Best Seller',
        rating: 4.7,
        reviews: 200,
        deliveryTime: '10-15 mins'
    },
    {
        _id: '12',
        name: 'Beans and Plantain',
        price: 7000,
        description: 'Beans and Plantain',
        category: 'Special',
        img: beansAndPlantain,
        badge: "Chef's Pick",
        rating: 4.8,
        reviews: 165,
        deliveryTime: '20-25 mins'
    },
    {
        _id: '13',
        name: 'Shawarma',
        price: 7000,
        description: 'Freshly made Shawarma',
        category: 'Special',
        img: shawarma,
        badge: 'Limited',
        rating: 4.6,
        reviews: 130,
        deliveryTime: '15-20 mins'
    }
]