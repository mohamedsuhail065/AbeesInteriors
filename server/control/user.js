const {userModel,productModel,category,cartModel,spModel}=require('../dataconfirg/mon_data')
const bcrypt = require('bcrypt');

const saltRounds = 10;
const Jws=require('jsonwebtoken')
const {verifyToken}=require("./auth")

const register=async(req,res)=>{
    const {name,email,password,phone_number}=req.body
     const result=await userModel.find({'email':email})
if(result.length>0) {
        res.json("eamil already existing")
    }
    else{
    bcrypt.hash(password, saltRounds, function(err, password) {
        // Store hash in your password DB.
        if(err){
            console.error(err)
            res.json("data register Not  successfully")
        }
        else{

            userModel.create({
                name,email,password,phone_number
            })
            res.json("data register successfully")
        }
    
        
    });
  
}

}
//sigin
const signin=async(req,res)=>{
    console.log("sigin")
    const {email,password}=req.body;
    const results=await userModel.find({"email":email})
    if(results.length>0){

        const hash=results[0].password;
        bcrypt.compare(password,hash, function(err, result) {
            // result == true
            if(result==true){
             Jws.sign({results},process.env.secertkey,{expiresIn:"2h"},(err,token)=>{
                 if(err){
                    res.json({"msg":"something went worng","status":0})
                 }
                 else{
                    res.json({"msg":"loging success","status":1,"token":token,"userid":results[0]._id,"user":{"name":results[0].name}})
                 }
             })
                
            }
            else{
                res.json({'msg':"incorrect password","status":0})
            }
        });
  
    }
    else{
       
        res.json({'msg':"incorrect email","status":0})
    }
}

const addCategory=async(req,res)=>{
    const{catname}=req.body;
    category.create({
        catname
    })
    res.json("category created")
}
const getCategory=async (req,res)=>{
    const record=await category.find();
    res.json({"record":record})
  }
  

  
const fetchAllprds=async (req,res)=>{
    const result=await productModel.find().populate('categoryid');
    if(result.length>0){
      res.json(result)
    }
    else{
      res.json([])
    }
  }
  //user
const fetchAlluser=async (req,res)=>{
    const record=await userModel.find()
    if(record.length>0){
      res.json(record)
    }
    else{
      res.json([])
    }
  }
  //delete 
  const deleteitem=async(req,res)=>{
    await productModel.deleteOne({"_id":req.params.id})
    res.json("data deleted")
  }
  const addCart=async(req,res)=>{
    const {qty,totalprice}=req.body;
  console.log(totalprice)
    cartModel.create({
      productid:req.params.productid,
      userid:req.params.userid,
      qty,
      totalprice,
    })
    res.json("Add to Cart")
  }
const cartview=async()=>{
   console.log(req.params.userid)
     const result= await cartModel.find({'userid':req.params.userid}).populate('userid').populate('productid')
     
     res.json(result)
}
//supplier
const spregister=async(req,res)=>{
  const {spname,email,password,phone_number}=req.body
   const result=await userModel.find({'email':email})
if(result.length>0) {
      res.json("eamil already existing")
  }
  else{
  bcrypt.hash(password, saltRounds, function(err, password) {
      // Store hash in your password DB.
      if(err){
          console.error(err)
          res.json("data register Not  successfully")
      }
      else{

          userModel.create({
              spname,email,password,phone_number
          })
          res.json("data register successfully")
      }
  
      
  });

}

}

//sp sigin
const spsignin=async(req,res)=>{
  console.log("sigin")
  const {email,password}=req.body;
  const results=await userModel.find({"email":email})
  if(results.length>0){

      const hash=results[0].password;
      bcrypt.compare(password,hash, function(err, result) {
          // result == true
          if(result==true){
           Jws.sign({results},process.env.secertkey,{expiresIn:"2h"},(err,token)=>{
               if(err){
                  res.json({"msg":"something went worng","status":0})
               }
               else{
                  res.json({"msg":"loging success","status":1,"token":token,"userid":results[0]._id,"user":{"name":results[0].name}})
               }
           })
              
          }
          else{
              res.json({'msg':"incorrect password","status":0})
              console.error(err)
          }
          
      });

  }
  else{
     
      res.json({'msg':"incorrect email","status":0})
  }
}
module.exports={
    register,
    fetchAlluser,
    fetchAllprd,
    getCategory,
    signin,
    addCategory,
    deleteitem,
    addCart,
    cartview,
    spregister,
   
 
}