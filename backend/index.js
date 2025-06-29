const port = 3000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");
const { error } = require("console");
require("dotenv").config();

app.use(express.json());
app.use(cors());

//Database connection with mongodbatlas
mongoose.connect(process.env.MONGODB_URI);

app.get("/", (req, res) => {
  res.send("express app is running");
});

//image storage engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({ storage: storage });

//creating upload endpoint for images
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

const Product = mongoose.model("Product", {
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
  available: { type: Boolean, default: true },
});

app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  await product.save();
  res.json({
    success: true,
    name: req.body.name,
  });
});

app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  res.json({
    success: true,
    name: req.body.name,
  });
});

app.get("/allProducts", async (req, res) => {
  let products = await Product.find({});
  res.send(products);
});

//user schema
const Users = mongoose.model("Users", {
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cartData: { type: Object },
  date: {
    type: Date,
    default: Date.now,
  },
});

app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res
      .status(400)
      .json({ success: false, errors: "email alreayd exists" });
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new Users({
    name: req.body.username,

    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });
  await user.save();
  const data = {
    user: {
      id: user.id,
    },
  };
  const token = jwt.sign(data, "secret_ecom");
  res.json({ success: true, token });
});

app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passcompare = req.body.password === user.password;
    if (passcompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_ecom");
      res.json({ success: true, token });
    } else {
      res.json({ success: false, errors: "Wrong password" });
    }
  } else {
    res.json({ success: false, errors: "Wrong emailid" });
  }
});

app.get("/newcollections", async (req, res) => {
  let products = await Product.find({});
  let newcollection = products.slice(1).slice(-8);
  res.send(newcollection);
});

app.get("/popularinwomen", async (req, res) => {
  let products = await Product.find({ category: "women" });
  let popularinwoman = products.slice(0, 4);
  res.send(popularinwoman);
});
const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ errors: "please authetnicate using valid token" });
  } else {
    try {
      const data = jwt.verify(token, "secret_ecom");
      req.user = data.user;
      next();
    } catch (error) {
      res.status(401).send({ errors: "please authetnicate using valid token" });
    }
  }
};
app.post("/addtocart", fetchUser, async (req, res) => {
  const userId = req.user?.id;

  if (!userId) {
    return res.status(400).json({ success: false, message: "Invalid user ID" });
  }

  let userdata = await Users.findOne({ _id: userId });

  if (!userdata) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  const itemId = req.body.itemId;

  if (!userdata.cartData.hasOwnProperty(itemId)) {
    userdata.cartData[itemId] = 0; // optional safety
  }

  userdata.cartData[itemId] += 1;

  await Users.findByIdAndUpdate(userId, { cartData: userdata.cartData });

  res.json({ success: true, message: "Item added to cart" });
});

app.post("/removefromcart", fetchUser, async (req, res) => {
  const userId = req.user.id;
  let userdata = await Users.findOne({ _id: userId });

  if (!userdata) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  const itemId = req.body.itemId;

  if (userdata.cartData[itemId] > 0) {
    userdata.cartData[itemId] -= 1;
  }

  await Users.findByIdAndUpdate(userId, { cartData: userdata.cartData });

  res.json({ success: true, message: "Removed" });
});

app.post("/getcart", fetchUser, async (req, res) => {
  // console.log("Incoming getcart request. User ID:", req.user.id);

  const userdata = await Users.findOne({ _id: req.user.id });

  if (!userdata) {
    // console.log("User not found in DB.");
    return res.status(404).json({ success: false, message: "User not found" });
  }

  // console.log("Returning cartData:", userdata.cartData);
  res.json(userdata.cartData);
});

// const bulkProducts = require("./Assets/data"); // You’ll create this file next

// app.post("/upload-products", async (req, res) => {
//   try {
//     let products = await Product.find({});
//     let id = products.length;

//     const insertedProducts = await Promise.all(
//       bulkProducts.map(async (product, index) => {
//         const imageName = product.image.split("/").pop(); // extract image file name
//         const newProduct = new Product({
//           id: id + index + 1,
//           name: product.name,
//           category: product.category,
//           image: `http://localhost:${port}/images/${imageName}`,
//           new_price: product.new_price,
//           old_price: product.old_price,
//         });
//         return await newProduct.save();
//       })
//     );

//     res.status(200).json({ success: true, data: insertedProducts });
//   } catch (err) {
//     console.error("Error inserting products:", err);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// });

app.listen(port, (error) => {
  if (!error) {
    console.log("Server running on Port " + port);
  } else {
    console.log("Error: " + error);
  }
});
