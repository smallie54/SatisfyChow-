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
import basmatiRice from './images/basmatiRice.png'
import fufuAndEgusi from './images/fufuAndEgusi.png'
import NativeRice from './images/NativeRice.png'
import RiceAndStew from './images/RiceAndStew.png'
import SpaghettiAndChicken from './images/SpaghettiAndChicken.png'
import FreshSalad from './images/FreshSalad.png'
import BangaSoup from './images/BangaSoup.png'
import StirFriedNoodles from './images/StirFriedNoodles.png'
import ChickenSuya from './images/ChickenSuya.png'
import MixedRice from './images/MixedRice.png'
import poundedYamAndEgusi from './images/poundedYamEgusiDish.png'
import MoiMoi from './images/MoiMoi.png'
import ColeSlaw from './images/ColeSlaw.png'
import MacAndCheese from './images/MacAndCheese.png'
import semoAndEgusi from './images/semoAndEgusi.png'
import EbaAndEgusi from './images/EbaAndEgusi.png'
import satisfyChowFounder from './images/satisfyChowFounder.jpeg'

export const assets = {
    amalaDish,
    sugercanejuice,
    suya,
    satisfyChow,
    menuRice,
     menuSwallow,
    menuSalad,
    menuYamAndEgg,
    menuDrinks,
    breadAndEgg,
    beansAndPlantain,
    shawarma,
    basmatiRice,
    fufuAndEgusi,
    NativeRice,
    RiceAndStew,
    SpaghettiAndChicken,
    FreshSalad,
    BangaSoup,
    StirFriedNoodles,
    ChickenSuya,
    MixedRice,
    poundedYamAndEgusi,
    MoiMoi,
    ColeSlaw,
    MacAndCheese,
    semoAndEgusi,
    EbaAndEgusi,
    satisfyChowFounder
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
       menuName: 'breakfast',
       menuImage: breadAndEgg
    }
    ,
    {
        menuName: 'soup',
        menuImage: BangaSoup
    }
    ,
    {
        menuName: 'pasta',
        menuImage: SpaghettiAndChicken
    }
    ,
    {
        menuName: 'sides' ,
        menuImage: ColeSlaw
    }
    ,
    {
        menuName: 'salads',
        menuImage: FreshSalad
    }
    ,
    {
        menuName: 'Special',
        menuImage: satisfyChow
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
        category: 'salads',
        img: FreshSalad,
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
        img: poundedYamAndEgusi,
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
        img: NativeRice,
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
        img: semoAndEgusi,
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
        img: SpaghettiAndChicken,
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
    },
    {
        _id: '14',
        name: 'Basmati Rice',
        price: 7000, 
        description: 'A plate of Basmati Rice',
        category: 'Rice',
        img: basmatiRice, 
        badge: 'New Today',
        rating: 4.5,
        reviews: 90,
        deliveryTime: '25-35 mins'
    },
    {
        _id: '15',
        name: 'Fufu and Egusi', 
        price: 7000,
        description: 'A plate of Fufu and Egusi',
        category: 'Swallow',
        img: fufuAndEgusi,  
        badge: "Chef's Pick",
        rating: 4.8,
        reviews: 165,
        deliveryTime: '20-25 mins'
    },
    {
        _id: '16',
        name: 'Native Rice',
        price: 7000,
        description: 'A plate of Native Rice',
        category: 'Rice',
        img: NativeRice,
        badge: 'New Today',
        rating: 4.5,
        reviews: 90,
        deliveryTime: '25-35 mins'
    },
    {
        _id: '17',
        name: 'Rice and Stew',
        price: 7000,
        description: 'A plate of Rice and Stew',
        category: 'Rice',
        img: RiceAndStew,
        badge: 'Best Seller',
        rating: 4.7,
        reviews: 200,
        deliveryTime: '25-35 mins'
    },
    {
        _id: '18',
        name: 'Spaghetti and Chicken',
        price: 3000,
        description: 'A plate of Spaghetti and Chicken',
        category: 'pasta',
        img: SpaghettiAndChicken,
        badge: 'New Today',
        rating: 4.2,
        reviews: 45,
        deliveryTime: '20-25 mins'
    },
    {
        _id: '19',
        name: 'Fresh Salad',
        price: 5000,
        description: 'A fresh and healthy salad',
        category: 'salads',
        img: FreshSalad,
        badge: 'New Today',
        rating: 4.5,
        reviews: 80,
        deliveryTime: '10-15 mins'
    },
    {
        _id: '20',  
        name: 'Banga Soup',
        price: 4000,
        description: 'A bowl of delicious Banga Soup',
        category: 'Soup',
        img: BangaSoup,
        badge: 'New Today',
        rating: 4.3,
        reviews: 65,
        deliveryTime: '15-20 mins'
    },
    {
        _id: '21',
        name: 'Stir-Fried Noodles',
        price: 5000,
        description: 'A plate of delicious Stir-Fried Noodles',
        category: 'Noodles',
        img: StirFriedNoodles,
        badge: 'New Today',
        rating: 4.5,
        reviews: 80,
        deliveryTime: '15-20 mins'
    },
    {
        _id: '22',
        name: 'Mac and Cheese',
        price: 5000,
        description: 'A plate of delicious Mac and Cheese',
        category: 'Pasta',
        img: MacAndCheese,
        badge: 'New Today',
        rating: 4.5,
        reviews: 80,
        deliveryTime: '15-20 mins'
    },
    {
        _id: '23',
        name: 'Eba and Egusi',
        price: 7000,
        description: 'A plate of Eba and Egusi',
        category: 'Swallow',
        img: EbaAndEgusi,
        badge: 'New Today',
        rating: 4.8,
        reviews: 165,
        deliveryTime: '20-25 mins'
    }

]