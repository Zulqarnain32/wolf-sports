const dbConnect = require("./config/db");
const ProductModel = require("./models/ProductModel");

const products = [
  {
    id: 1,
    name: "Star 1000 crystal shine handmade Football",
    price: 1800,
    image: "/assets/images/football1.jpg",
    oldPrice: 2000,
    reviews: 7,
    off: 5,
    rating: 5,
  },
  {
    id: 2,
    name: "UEFA champions League 2025 handmade football",
    price: 1800,
    image: "/assets/images/football2.jpg",
    oldPrice: 2000,
    reviews: 7,
    off: 5,
    rating: 5,
  },
  {
    id: 3,
    name: "Adidas new model 2025 hybrid football",
    price: 1600,
    image: "/assets/images/football3.jpg",
    oldPrice: 2000,
    reviews: 7,
    off: 5,
    rating: 5,
  },
  {
    id: 4,
    name: "Puma new model football hybrid quality",
    price: 1600,
    image: "/assets/images/football4.jpg",
    oldPrice: 2000,
    reviews: 7,
    off: 5,
    rating: 5,
  },
  {
    id: 5,
    name: "Star 1000 crystal shine handmade Football",
    price: 1750,
    image: "/assets/images/football5.jpg",
    oldPrice: 2000,
    reviews: 7,
    off: 5,
    rating: 5,
  },
  {
    id: 6,
    name: "EURO2024 Adidas thermal football",
    price: 2300,
    image: "/assets/images/football6.jpg",
    oldPrice: 2000,
    reviews: 7,
    off: 5,
    rating: 5,
  },

  {
    id: 7,
    name: "Brilliant hybrid footbal",
    price: 1500,
    image: "/assets/images/football1.jpg",
    oldPrice: 2000,
    reviews: 7,
    off: 5,
    rating: 5,
  },
  
  {
    id: 8,
    name: "Professional keeper gloves latex",
    price: 3750,
    image: "/assets/images/gloves1.jpg",
    oldPrice: 4000,
    reviews: 7,
    off: 5,
    rating: 5,
  },
  
  {
    id: 9,
    name: "Pump football volleyball",
    price: 960,
    image: "/assets/images/pump1.jpg",
    oldPrice: 1200,
    reviews: 7,
    off: 5,
    rating: 5,
  },
   {
    id: 10,
    name: "Pump football volleyball",
    price: 960,
    image: "/assets/images/football10.jpg",
    oldPrice: 1200,
    reviews: 7,
    off: 5,
    rating: 5,
  },
     {
    id: 10,
    name: "Pump football volleyball",
    price: 960,
    image: "/assets/images/football11.jpg",
    oldPrice: 1200,
    reviews: 7,
    off: 5,
    rating: 5,
  },
     {
    id: 11,
    name: "Pump football volleyball",
    price: 1600,
    image: "/assets/images/football11.jpg",
    oldPrice: 1800,
    reviews: 7,
    off: 5,
    rating: 5,
  },
       {
    id: 12,
    name: "Pump football volleyball",
    price: 1600,
    image: "/assets/images/football12.jpg",
    oldPrice: 1800,
    reviews: 7,
    off: 5,
    rating: 5,
  },
       {
    id: 13,
    name: "Pump football volleyball",
    price: 1600,
    image: "/assets/images/football13.jpg",
    oldPrice: 1800,
    reviews: 7,
    off: 5,
    rating: 5,
  },
       {
    id: 14,
    name: "Pump football volleyball",
    price: 1600,
    image: "/assets/images/football14.jpg",
    oldPrice: 1800,
    reviews: 7,
    off: 5,
    rating: 5,
  },
       {
    id: 15,
    name: "Pump football volleyball",
    price: 1600,
    image: "/assets/images/football15.jpg",
    oldPrice: 1800,
    reviews: 7,
    off: 5,
    rating: 5,
  },
       {
    id: 16,
    name: "Pump football volleyball",
    price: 1600,
    image: "/assets/images/football16.jpg",
    oldPrice: 1800,
    reviews: 7,
    off: 5,
    rating: 5,
  },
       {
    id: 17,
    name: "Pump football volleyball",
    price: 1600,
    image: "/assets/images/football17.jpg",
    oldPrice: 1800,
    reviews: 7,
    off: 5,
    rating: 5,
  },
       {
    id: 18,
    name: "Pump football volleyball",
    price: 1600,
    image: "/assets/images/football18.jpg",
    oldPrice: 1800,
    reviews: 7,
    off: 5,
    rating: 5,
  },
       {
    id: 19,
    name: "Pump football volleyball",
    price: 1600,
    image: "/assets/images/football19.jpg",
    oldPrice: 1800,
    reviews: 7,
    off: 5,
    rating: 5,
  },
       {
    id: 20,
    name: "Pump football volleyball",
    price: 1600,
    image: "/assets/images/football20.jpg",
    oldPrice: 1800,
    reviews: 7,
    off: 5,
    rating: 5,
  },
       {
    id: 21,
    name: "Pump football volleyball",
    price: 1600,
    image: "/assets/images/football21.jpg",
    oldPrice: 1800,
    reviews: 7,
    off: 5,
    rating: 5,
  },
       {
    id: 22,
    name: "Pump football volleyball",
    price: 1600,
    image: "/assets/images/football22.jpg",
    oldPrice: 1800,
    reviews: 7,
    off: 5,
    rating: 5,
  },
       {
    id: 23,
    name: "Pump football volleyball",
    price: 1600,
    image: "/assets/images/football23.jpg",
    oldPrice: 1800,
    reviews: 7,
    off: 5,
    rating: 5,
  },
       {
    id: 24,
    name: "Pump football volleyball",
    price: 1600,
    image: "/assets/images/football24.jpg",
    oldPrice: 1800,
    reviews: 7,
    off: 5,
    rating: 5,
  },
       {
    id: 25,
    name: "Pump football volleyball",
    price: 1600,
    image: "/assets/images/football25.jpg",
    oldPrice: 1800,
    reviews: 7,
    off: 5,
    rating: 5,
  },
       {
    id: 26,
    name: "Pump football volleyball",
    price: 1600,
    image: "/assets/images/football26.jpg",
    oldPrice: 1800,
    reviews: 7,
    off: 5,
    rating: 5,
  },
       {
    id: 27,
    name: "Pump football volleyball",
    price: 1600,
    image: "/assets/images/football27.jpg",
    oldPrice: 1800,
    reviews: 7,
    off: 5,
    rating: 5,
  },
     {
    id: 28,
    name: "Pump football volleyball",
    price: 1600,
    image: "/assets/images/football28.jpg",
    oldPrice: 1800,
    reviews: 7,
    off: 5,
    rating: 5,
  },
       {
    id: 29,
    name: "Pump football volleyball",
    price: 1600,
    image: "/assets/images/football29.jpg",
    oldPrice: 1800,
    reviews: 7,
    off: 5,
    rating: 5,
  },
       {
    id: 30,
    name: "Pump football volleyball",
    price: 1600,
    image: "/assets/images/football30.jpg",
    oldPrice: 1800,
    reviews: 7,
    off: 5,
    rating: 5,
  },
       {
    id: 31,
    name: "Pump football volleyball",
    price: 1600,
    image: "/assets/images/football31.jpg",
    oldPrice: 1800,
    reviews: 7,
    off: 5,
    rating: 5,
  },
       {
    id: 32,
    name: "Pump football volleyball",
    price: 1600,
    image: "/assets/images/football32.jpg",
    oldPrice: 1800,
    reviews: 7,
    off: 5,
    rating: 5,
  },
       {
    id: 33,
    name: "Pump football volleyball",
    price: 1600,
    image: "/assets/images/football33.jpg",
    oldPrice: 1800,
    reviews: 7,
    off: 5,
    rating: 5,
  },
     {
    id: 34,
    name: "Pump football volleyball",
    price: 1600,
    image: "/assets/images/football34.jpg",
    oldPrice: 1800,
    reviews: 7,
    off: 5,
    rating: 5,
  },
];

const seedProduct = async () => {
  await dbConnect();

  try {
    await ProductModel.deleteMany(); // Optional: Clear previous data
    await ProductModel.insertMany(products);
    console.log("✅ Product inserted successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Error inserting Product:", error);
    process.exit(1);
  }
};

seedProduct();
