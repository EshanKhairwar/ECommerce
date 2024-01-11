const Category=require('../models/prodcategoryModel.js');
const asyncHandler=require('express-async-handler');
const validateMongoDbId = require('../utils/validateMongodbid.js');


//Create the category
const createCategory = asyncHandler(async (req, res) => {
    try {
      const newCategory = await Category.create(req.body);
      res.json(newCategory);
    } catch (error) {
      throw new Error(error);
    }
  });

//Update the Category
const updateCategory = asyncHandler(async (req, res) => {
  const {id}=req.params;
  validateMongoDbId(id);
  try {
    const updateCategory = await Category.findByIdAndUpdate(id,req.body,{
      new:true,
    });
    res.json(updateCategory);
  } catch (error) {
    throw new Error(error);
  }
});

//Delete the Category
const deleteCategory = asyncHandler(async (req, res) => {
  const {id}=req.params;
  validateMongoDbId(id);
  try {
    const deletedCategory = await Category.findByIdAndDelete(id,req.body,{
      new:true,
    });
    res.json(deletedCategory);
  } catch (error) {
    throw new Error(error);
  }
});

//get the category
const getCategory = asyncHandler(async (req, res) => {
  const {id}=req.params;
  validateMongoDbId(id);
  try {
    const getaCategory = await Category.findById(id);
    res.json(getaCategory);
  } catch (error) {
    throw new Error(error);
  }
});

//get all category
const getAllCategory = asyncHandler(async (req, res) => {
  try {
    const getallCategory = await Category.find();
    res.json(getallCategory);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports={createCategory,updateCategory,deleteCategory,getCategory,getAllCategory};
