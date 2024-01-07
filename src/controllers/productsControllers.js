const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const Products = require("./../models/productsModels");

const getAllData = async (req, res) => {
  const allProducts = await Products.find({});
  res.send(allProducts);
};
const getProductByID = async (req, res) => {
  const productByID = await Products.findOne({ _id: req.params.id });
  res.send(productByID);
};
const ProductsDelete = async (req, res) => {
  console.log(req.params.id);
  let deletedProduct = await Products.deleteOne({ _id: req.params.id });
};
const ProductPost = async (req, res) => {
  const newProduct = new Products(req.body);
  newProduct.save();
};
const getPutUser = async (req, res) => {
  let id = req.params.id;
  let updateUser = await Products.replaceOne({ _id: id }, req.body);
};
const getUpdateUser = async (req, res) => {
  // console.log(req.params);
  let id = req.params.id;
  let updateUser = await Products.findOneAndUpdate(
    { _id: id },
    { name: req.body.name, price: req.body.price, salePrice: req.body.salePrice, id: req.body.id }
  );
};

module.exports = {
  getAllData,
  getProductByID,
  ProductsDelete,
  ProductPost,
  getPutUser,
  getUpdateUser,
};
