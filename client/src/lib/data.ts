import classicImg from '@assets/generated_images/classic_amla_chutney_product.png';
import spicyImg from '@assets/generated_images/spicy_amla_chutney_product.png';
import sweetImg from '@assets/generated_images/sweet_amla_chutney_product.png';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  rating: number;
  image: string;
  weight: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Amla Chutney",
    description: "The traditional recipe passed down through generations. Rich, tangy, and antioxidant-rich. Made with organic Banarasi Amla.",
    price: "₹250",
    rating: 4.9,
    image: classicImg,
    weight: "250g"
  },
  {
    id: 2,
    name: "Spicy Amla Chutney",
    description: "A fiery twist on the classic. Infused with Guntur chillies and aromatic spices for those who love a kick.",
    price: "₹270",
    rating: 4.7,
    image: spicyImg,
    weight: "250g"
  },
  {
    id: 3,
    name: "Sweet Amla Murabba",
    description: "Golden, syrup-soaked Amla preserves. A sweet immunity booster that melts in your mouth.",
    price: "₹300",
    rating: 4.8,
    image: sweetImg,
    weight: "300g"
  }
];

export const reviews = [
  {
    id: 1,
    name: "Aditi Sharma",
    text: "The Classic Amla Chutney reminds me of my grandmother's cooking. Absolutely authentic taste!",
    rating: 5
  },
  {
    id: 2,
    name: "Rahul Verma",
    text: "I was skeptical about the Spicy version, but it's now a staple in my kitchen. Perfect balance of heat and sourness.",
    rating: 5
  },
  {
    id: 3,
    name: "Priya Singh",
    text: "High quality ingredients and beautiful packaging. Ordered the gift set for Diwali and everyone loved it.",
    rating: 4
  },
  {
    id: 4,
    name: "Vikram Malhotra",
    text: "The Murabba is so tender and sweet. My kids actually ask for it every morning!",
    rating: 5
  }
];
