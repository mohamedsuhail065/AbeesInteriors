const express = require("express");
const cors = require("cors");
const multer = require("multer"); // Add multer for file uploads
const { userModel, supplierModel,adminModel,logModel, categoryM,cartModel,orderModel } = require("./dataconfig");
const { pdtModel } = require("./dataconfig"); // Assuming you have a pdtModel imported
const bcrypt = require("bcrypt");
const saltRounds = 10;
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./uploads/"));

// Configure multer to specify where to store uploaded files and other options
const { upload } = require("./multicoder"); // Change 'uploads/' to your desired upload directory

//user-register
app.post("/uregister", async (request, res) => {
  const { fname, lname, mob, email, password, city, zip } = request.body;
  const result = await userModel.find({ email: email });
  if (result.length > 0) {
    res.json({ status: 0, msg: "email already existing" });
  } else {
    bcrypt.hash(password, saltRounds, function (err, password) {
      // Store hash in your password DB.
      logModel.create({
        email:email,
        password:password,
        type:'User'
    })

      userModel.create({
        fname,
        lname,
        mob,
        email,
        password,
        city,
        zip,
      });
    });

    res.json({ status: 1, msg: "thank you for registering! " });
  }
});
//register-supplier
app.post("/sregister", async (request, res) => {
  const { fname, lname, mob, email, password, city, zip } = request.body;
  const result = await supplierModel.find({ email: email });
  if (result.length > 0) {
    res.json({ status: 0, msg: "email already existing" });
  } else {
    bcrypt.hash(password, saltRounds, function (err, password) {
      // Store hash in your password DB.
      logModel.create({
        email:email,
        password:password,
        type:'Supplier'
    })

      supplierModel.create({
        fname,
        lname,
        mob,
        email,
        password,
        city,
        zip,
      });
    });

    res.json({ status: 1, msg: "thank you for registering! " });
  }
});
//admin-Register
app.post("/aregister", async (request, res) => {
  const { name, mob, email, password, } = request.body;
  const result = await adminModel.find({ email: email });
  if (result.length > 0) {
    res.json({ status: 0, msg: "email already existing" });
  } else {
    bcrypt.hash(password, saltRounds, function (err, password) {
      // Store hash in your password DB.
      logModel.create({
        email:email,
        password:password,
        type:'Admin'
    })

      adminModel.create({
        name,
        mob,
        email,
        password,
      });
    });

    res.json({ status: 1, msg: "thank you for registering! " });
  }
});

//signin
// app.post("/login", async (req, res) => {
//   const { email, pass } = req.body;
//   const result = await logModel.find({ email: email });
//   console.table(result);
//   if (result.length > 0) {
//     const pwd = result[0].password;
//     const idn = result[0]._id;
//     bcrypt.compare(pass, pwd).then(function (result) {
//       // result == true
//       if (result == true) {
//         res.json({ status: 1, msg: "Login Successfull", userid: idn });
//       } else {
//         res.json({ status: 0, msg: "Incorrect password" });
//       }
//     });
//   } else {
//     res.json({ status: 0, msg: "Incorrect email" });
//   }
// });

// Login
app.post("/login", async (req, res) => {
  
  const { email, pass} = req.body;
      let user;
      try {
  
           // Email exists, proceed with login
           const log = await logModel.findOne({ "email": email });
           if (!log) {
               res.json({ 'status': 0, 'msg': "User not found in login records" });
               return;
           }
           const type=log.type;
           console.log(type)
           if(type=="User"){
              console.log(type,"type")
              user = await userModel.findOne({ "email": email });
          if (!user) {
              res.json({ 'status': 0, 'msg': "Email does not exist" });
              return;
          }
           }
          // Check if the email exists in userModel
          if(type==="Supplier"){
              console.log(type,"type")
           user = await supplierModel.findOne({ "email": email });
          if (!user) {
              res.json({'status':0,'msg':"Email does not exist"});
              return;
          }
  
      }
      if(type==="Admin"){
          console.log(type,"type")
       user = await adminModel.findOne({ "email": email });
      if (!user) {
          
  res.json({'status':0,'msg':"Email does not exist"});
          return;
      }
  
  }
  
          const pwd = log.password;
       
          bcrypt.compare(pass, pwd).then(function (result) {
              if (result == true) {
                  const uid = user._id;
                  const type = log.type;
                  res.json({ 'status': 1, 'msg': "successfully login", 'userid': uid, 'type': type });
              } else {
                  res.json({ 'status': 0, 'msg': "Incorrect password" });
              }
          });
      } catch (error) {
          console.error("Error during login:", error);
          res.status(500).json({ 'status': 0, 'msg': "An error occurred during login" });
      }
  });
  



app.get("/fetchAllemp", async (req, res) => {
  const result = await userModel.find();
  if (result.length > 0) {
    res.json(result);
  } else {
    res.json([]);
  }
});

app.get("/fetchAllsup", async (req, res) => {
  const result = await supplierModel.find();
  if (result.length > 0) {
    res.json(result);
  } else {
    res.json([]);
  }
});

app.post("/addproduct", upload.single("image"), (req, res) => {
  const { productname, title, description, price, category } = req.body;
  console.log(productname, title, description, price, category);
  const image = " http://localhost:9000/" + req.file.filename;
  console.log(image); //to  see the uploaded file name in the console
  pdtModel.create({
    productname,
    image,
    title,
    description,
    price,
    category,
  });
  res.json({ status: 1, msg: "Product added successfully" });
});

app.post("/addcategory",async(req,res)=>{
  const {catname}=req.body
  categoryM.create({
    catname
  });
  res.json("Category created")
})

app.get("/getcategory",async(req,res)=>{
  const record=await categoryM.find();
    res.json({"record":record})
})

app.put("/updateProduct/:productId", async (req, res) => {
  const { productId } = req.params;
  const { title, description, price, category } = req.body;
  try {
    await pdtModel.findByIdAndUpdate(productId, {
      title,
      description,
      price,
      category,
    });
    res.json("Product updated successfully");
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/addcart/:productid/:userid", async (req, res) => {
  const { qty, totalprice } = req.body;
  const { productid, userid } = req.params;

  try {
    let cartItem = await cartModel.findOne({ productid, userid ,'status':'nil'});

    if (cartItem) {
      // If the product already exists in the cart, update the quantity
      cartItem.qty = parseInt(cartItem.qty) + parseInt(qty);
      cartItem.totalprice = parseFloat(cartItem.totalprice) + parseFloat(totalprice);
      await cartItem.save();
    } else {
      // If the product doesn't exist in the cart, create a new entry
      await cartModel.create({
        productid,
        userid,
        qty,
        totalprice,
      });
    }

    res.json("Added to cart");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.get("/deletefcart/:id", async (req, res) => {
  await cartModel.deleteOne({ _id: req.params.id });
  res.json("Product removed from cart sucessfully");
});

app.put('/updateCartItem/:itemId', async (req, res) => {
  const { itemId } = req.params;
  const { qty } = req.body;

  try {
    const updatedCartItem = await cartModel.findByIdAndUpdate(
      itemId,
      { qty: qty },
      { new: true } // To return the updated document
    );

    if (!updatedCartItem) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    res.json(updatedCartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/getCartCount/:userid",async(req,res)=>{
  const userid=req.params.userid;
  const cartCount=await cartModel.countDocuments({userid:userid,status:'nil'});
  res.json({count:cartCount})
})


// Fetch supplier by ID
app.get("/fetchsupplierbyid/:id", async (req, res) => {
  const result = await supplierModel.find({ '_id': req.params.id });
  res.json(result);
});

// Fetch user by ID
app.get("/fetchuserbyid/:id", async (req, res) => {
  const result = await userModel.find({ '_id': req.params.id });
  res.json(result);
});

app.put('/updateprofile/:id', async (req, res) => {
  const { id } = req.params;
  const { fname, lname, email, mob } = req.body;

  try {
    const updatedUser = await userModel.findByIdAndUpdate(id, {
      fname,
      lname,
      email,
      mob,
    }, { new: true });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'Error updating profile' });
  }
});


//Add to Order table
app.post("/addorder",async(req,res)=>{
  const{userid,totalAmount,address,paymentMode}=req.body;
  console.log("userid",userid)
  try {
    const cartItems = await cartModel.find({ 'userid': userid,'status':'nil' });

    if (cartItems.length === 0) {
      return res.status(404).json({ error: 'Cart is empty' });
    }

    const order = await orderModel.create({
      product: cartItems,
      totalPrice: totalAmount,
      Address: address,
      paymentmode:paymentMode,
      Status: 'Ordered',
    });

    if (order) {
      const cartUpdates = cartItems.map(async (item) => {
        await cartModel.updateOne({ _id: item._id }, { status: 'ordered' });
      });

      await Promise.all(cartUpdates); // Wait for all updates to complete

      res.json(order);
    } else {
      res.status(500).json({ error: 'Failed to create order' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/orders/:userid', async (req, res) => {
  console.log('orders')
  const result= await orderModel.find({'product.userid':req.params.userid}).populate({
    path:'product.productid',
    model:pdtModel
  })
  .populate(
    {
      path:'product.userid',
      model:userModel
    }
  )
     res.json(result)
})

app.get('/ordersad', async (req, res) => {
  const result= await orderModel.find().populate({
    path:'product.productid',
    model:pdtModel
  })
  .populate(
    {
      path:'product.userid',
      model:userModel
    }
  )
     res.json(result)
})

app.put('/order/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
console.log(id)
console.log(status)
  try {
    const updatedOrder = await orderModel.findByIdAndUpdate(id, { Status:status }, { new: true });
    if (!updatedOrder) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ error: 'Error updating order status' });
  }
});

app.put('/cancelorder/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    // Find the order by ID and update its status
    const updatedOrder = await orderModel.findByIdAndUpdate(id, { Status:status }, { new: true });
    
    if (!updatedOrder) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ error: 'Error updating order status' });
  }
});


app.get('/fetchByCategory/:category', (req, res) => {
  const category = req.params.category; // Get the category from the URL parameters
  // Assuming you have a MongoDB database and a Product model/schema
  pdtModel.find({ category: category })
    .then((products) => {
      res.json(products); // Send the products as JSON response
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    });
});

app.get("/cartview/:userid",async(req,res)=>{
     const result= await cartModel.find({'userid':req.params.userid,status:'nil'}).populate('userid').populate('productid')
     res.json(result)
})

app.get("/fetchAllprd", async (request, response) => {
  const result = await pdtModel.find();
  if (result.length > 0) {
    response.json(result);
  } else {
    response.json([]);
  }
});


app.get("/deleteuser/:id", async (req, res) => {
  await userModel.deleteOne({ _id: req.params.id });
  res.json("data deleted sucessfully");
});

app.get("/deleteuser/:id", async (req, res) => {
  await supplierModel.deleteOne({ _id: req.params.id });
  res.json("data deleted sucessfully");
});

app.get("/deleteproducts/:id", async (req, res) => {
  await pdtModel.deleteOne({ _id: req.params.id });
  res.json("data deleted sucessfully");
});

app.get("/fetchuserbyid/:id", async (req, res) => {
  const result = await userModel.find({ '_id': req.params.id });
  res.json(result);
});

app.get("/fetchallprds",async (req,res)=>{
  const result=await pdtModel.find().populate('categoryid');
  if(result.length>0){
    res.json(result)
  }
  else{
    res.json([])
  }
});

// Assuming you have defined the required models and imported necessary dependencies

app.get("/usersn", async (req, res) => {
  try {
    const userCount = await userModel.countDocuments();
    res.json({ totalUsers: userCount });
  } catch (error) {
    console.error("Error fetching user count:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/suppliersn", async (req, res) => {
  try {
    const supCount = await supplierModel.countDocuments();
    res.json({ totalSuppliers: supCount });
  } catch (error) {
    console.error("Error fetching supplier count:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/productsn", async (req, res) => {
  try {
    const pdtCount = await pdtModel.countDocuments();
    res.json({ totalProducts: pdtCount });
  } catch (error) {
    console.error("Error fetching product count:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/ordersn", async (req, res) => {
  try {
    const orderCount = await orderModel.countDocuments();
    res.json({ totalOrders: orderCount });
  } catch (error) {
    console.error("Error fetching order count:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.listen(9000, () => {
  console.log("server running http://localhost:9000/");
});
