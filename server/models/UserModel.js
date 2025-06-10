const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
  whatsApp:{ type:Number },
  role: { type: String, default: "user", enum: ["admin", "manager", "user"] },
  cart: {
    type: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        name: { type: String },
        price: { type: Number },
        rating: { type: String },
        category: { type: String },
        image: { type: String },
        oldPrice: { type: Number },
        reviews: { type: Number },
        off: { type: Number },
        quantity: { type: Number, default:1 }
      },
    ],
    default: [],
  },
 
  
});

const UserModel = mongoose.model("UserModel", userSchema);
module.exports = UserModel;