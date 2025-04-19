const mongoose = require("mongoose");

main().catch((err) => {
  console.log(err);
});

async function main() {
  await mongoose.connect("mongodb+srv://mohamedsuhail065:sameerac201@cluster0.kbsakxl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  console.log("Database connected..");
}

//Schema
const userSchema = new mongoose.Schema(
  {
    fname: String,
    mob: Number,
    email: String,
    password: String,
  },
  { timestamps: true }
);

const pdtSchema = new mongoose.Schema(
  {
    productname: String,
    image: String,
    title: String,
    description: String,
    price: String,
    status: String,
    category:String,
  },
  { timestamps: true }
);

const orderSchema = new mongoose.Schema(
  {
    product:[
      {
        productid: { type: mongoose.Schema.Types.ObjectId, ref: "product_tbl" },
        userid: { type: mongoose.Schema.Types.ObjectId, ref: "user-tbl" },
        qty: String,
        totalprice: String,
      }
    ],
    
    totalPrice: Number,
    Address: String,
    paymentmode:String,
    Status: String,
  },
  { timestamps: true }
);

const supplierSchema = new mongoose.Schema(
  {
    fname: String,
    mob: Number,
    email: String,
    password: String,
  },
  { timestamps: true }
);

const adminSchema = new mongoose.Schema(
  {
    name: String,
    mob: Number,
    email: String,
    password: String,
  },
  { timestamps: true }
);

const logSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    type: String,
  },
  { timestamps: true }
);

const catschema = new mongoose.Schema(
  {
    catname: { type: String, unique: true },
  },
  { timestamps: true }
);

const cartSchema = new mongoose.Schema(
  {
    productid: { type: mongoose.Schema.Types.ObjectId, ref: "product_tbl" },
    userid: { type: mongoose.Schema.Types.ObjectId, ref: "user-tbl" },
    qty: String,
    totalprice: String,
    status:{type:String,default:'nil'}
  },
  { timestamps: true }
);

//Model
const pdtModel = new mongoose.model("product_tbl", pdtSchema);
const orderModel = new mongoose.model("order_tbl", orderSchema);
const userModel = new mongoose.model("user-tbl", userSchema);
const supplierModel = new mongoose.model("supplier-tbl", supplierSchema);
const adminModel = new mongoose.model("admin-tbl", adminSchema);
const logModel = new mongoose.model("log-tbl", logSchema);
const categoryM = new mongoose.model("category", catschema);
const cartModel = new mongoose.model("cart", cartSchema);

//export
module.exports = {
  userModel,
  pdtModel,
  supplierModel,
  adminModel,
  logModel,
  orderModel,
  categoryM,
  cartModel,
};
