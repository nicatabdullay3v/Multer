const mongoose = require('mongoose')
require('dotenv').config()
const dbConnect = async () => {
    mongoose.connect("mongodb+srv://nicatneon:nicat@cluster0.rprmags.mongodb.net/?retryWrites=true&w=majority").then(() => {
        console.log("connected");
    }).catch((err) => {
        console.log(err);
    })
}
module.exports = dbConnect