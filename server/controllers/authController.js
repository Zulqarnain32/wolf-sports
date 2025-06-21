const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Usermodel = require("../models/UserModel");

const register = async (req, res) => {
  try {
    console.log("req body ", req.body);
    
    const { username,email, password, whatsApp} = req.body;
    console.log("user data ", username,email,password);
    
    if(!username || !email || !password ||whatsApp ){
      return res.json({message:"Please fill all the fields"})
    }
    const user = await Usermodel.findOne({ email });
    if(user){
      return res.json({message:"Email already exists"})
    }

    
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new Usermodel({ username,email,whatsApp,password:hashPassword });
    await newUser.save();
    console.log("Registered Successfully");
    
    res.json({ message: `Registered Successfully` });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

const login = async (req, res) => {
  console.log("req body ", req.body);
  const { email, password } = req.body;
  if(!email || !password ){
    return res.json({message:"please fill all the fields"})
  }
  const user = await Usermodel.findOne({ email });
  if(!user){
    return res.json({message:"invalid email"})
  }
  const isMatch = await bcrypt.compare(password,user.password);
  if(!isMatch){
    return res.json({message:"incorrect password"})
  }
  const token = jwt.sign({id:user._id,role:user.role,username:user.username,email:user.email},"My-Secret-Key")
  return res.json({message:"sucessfully login",token,role:user.role,whatsApp:user.whatsApp,username:user.username,email:user.email,id:user._id})
};






module.exports = { register, login };