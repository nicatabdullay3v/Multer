const mongoose = require('mongoose')

const productsSchema = mongoose.Schema({
    name: String,
    id: Number,
    price: Number,
    salePrice: Number,
    img: String
    // _id:mongoose.Schema.ObjectId
}, { collection: "Products" })

const Products = mongoose.model("Products", productsSchema)
module.exports = Products
