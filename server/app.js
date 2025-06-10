const express = require("express")
const cors = require('cors');
const dbConnect = require('./config/db');
const app = express();
const productRoute = require("./routes/productRoute")

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json()); 
dbConnect();


app.get("/", (req, res) => {
  res.send("backend is working");
});

app.use("/api/products", productRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));