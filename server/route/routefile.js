const express=require('express') 
const router=express.Router() 
const {verifyToken}=require("../control/auth")
const{upload}=require("../multercodes/uploadfile")
const{register,signin,getCategory,fetchAllprds,fetchAlluser,addCategory,deleteitem,addCart
    ,cartview

}=require('../control/user')

const {appModel}=require('../dataconfirg/mon_data')
router.route("/register").post(register)
router.route("/getcategory").get(getCategory)
router.route("/fetchalluser").get(fetchAlluser)
router.route("/fetchallprd").get(fetchAllprds)
router.route("/addcategory").post(addCategory)
router.route("/deleteitems").delete(deleteitem)

router.route("/signins").post(signin)
router.route("/addtocart/:productid/:userid").post(addCart)
router.route("/cartview/:userid").post(addCart)




module.exports=router