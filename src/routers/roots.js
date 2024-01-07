const router = require('express').Router()

const prodyctsControllers = require("./../controllers/productsControllers")
router.get('/products',prodyctsControllers.getAllData)
router.get("/products/:id",prodyctsControllers.getProductByID)
router.delete("/products/:id",prodyctsControllers.ProductsDelete)
router.post("/products",prodyctsControllers.ProductPost)
router.put("/products/:id",prodyctsControllers.getPutUser)
router.patch("/products/:id",prodyctsControllers.getUpdateUser)




module.exports = router