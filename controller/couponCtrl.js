const Coupon=require('../models/couponModel');
const validateMongoDbId=require("../utils/validateMongodbid");
const asyncHandler=require('express-async-handler');

//create Coupon
const createCoupon=asyncHandler(async(req,res)=>{
   try {
    const newCoupon=await Coupon.create(req.body);
    res.json(newCoupon);
   } catch (error) {
    throw new Error(error);
   }
});

// get all coupons

const getAllCoupons=asyncHandler(async(req,res)=>{
    try {
     const coupons=await Coupon.find();
     res.json(coupons);
    } catch (error) {
     throw new Error(error);
    }
 });

// Update Coupons
 const updateCoupons=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoDbId(id);
    try {
     const updatecoupons=await Coupon.findByIdAndUpdate(id,req.body,{
        new:true,
     });
     res.json(updatecoupons);
    } catch (error) {
     throw new Error(error);
    }
 });


 // Delete Coupons
 const deleteCoupons=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    validateMongoDbId(id);
    try {
     const deletecoupons=await Coupon.findByIdAndDelete(id);
     res.json(deletecoupons);
    } catch (error) {
      throw new Error(error);
    }
 }); 

module.exports={createCoupon,getAllCoupons,updateCoupons,deleteCoupons};