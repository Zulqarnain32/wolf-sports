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
    name: "Wolf sports hybrid football",
    price: 4000,
    image: "/assets/images/football7.jpg",
    oldPrice: 2000,
    reviews: 7,
    off: 5,
    rating: 5,
  },
  {
    id: 8,
    name: "Brilliant hybrid footbal",
    price: 1500,
    image: "/assets/images/football1.jpg",
    oldPrice: 2000,
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
