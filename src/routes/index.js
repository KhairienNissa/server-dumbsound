
// import package
const express = require('express')
const router = express.Router()

// import middleware
const { auth } = require('../middlewares/auth')
const { uploadFile} = require ('../middlewares/uploadFile')

// import modules
const {
    register,
    login,
    checkAuth
} = require ('../controllers/auth')

const {
    addArtis,
    getArtiss,
    getArtis,
} = require ('../controllers/artis')

const {
    addMusic,
    getMusics,
    getMusic
} = require ('../controllers/music')

const {
    addTransaction,
    getTransactions,
    getTransaction,
    notification
} = require ('../controllers/transaction')

const {
    getUsers,
    getUser
} = require ('../controllers/user')

const { historys,
     getHistory 
    } = require("../controllers/history");
// METHOD HERE
// users
router.get('/users', getUsers)
router.get('/user/:id', getUser)

// Transaction
router.post('/transaction', auth, addTransaction)
router.get('/transactions', getTransactions)
router.get('/transaction/:id', getTransaction)
router.post('/notification', notification)


// Artis
router.post('/artis', addArtis)
router.get('/artiss', getArtiss)
router.get('/artis/:id', getArtis)

// Music
router.post('/music', auth, uploadFile('imageSong', 'fileSong'), addMusic)
router.get('/musics', getMusics)
router.get('/music/:id', getMusic)


// Validation user
router.post('/register', register)
router.post('/login', login)
router.get('/check-auth', auth, checkAuth)

//history

router.post("/history", historys);
router.get("/history/:id", getHistory);

// exports router
module.exports = router

// const express = require("express");

// //instantiate express module here
// const router = express.Router()

// // Controller

// const { addUsers, getUsers, getUser, updateUser, deleteUser } = require('../controllers/user')
// const { getProduct, getProducts, addProduct, updateProduct, deleteProduct } = require('../controllers/product')
// const { getTransactions, addTransaction, notification } = require('../controllers/transaction');
// const { getCategories, getCategory, addCategory, updateCategory, deleteCategory } = require("../controllers/category");
// // const { getBridge, getBridges, addBridge, updateBridge, deleteBridge } = require("../controllers/categoryproduct");
// const { register, login, checkAuth} = require("../controllers/auth");
// const { auth } = require('../middlewares/auth')
// const { uploadFile } = require('../middlewares/uploadFile');
// const { getProfils } = require("../controllers/profil");

// // Route

// //user
// router.post('/user', auth, addUsers)
// router.get('/users', auth, getUsers)
// router.get('/user/:id', auth, getUser)
// router.patch('/user/:id', auth, updateUser)
// router.delete('/user/:id', auth, deleteUser)
// //product
// router.get('/products', auth, getProducts)
// router.get('/product/:id', getProduct)
// router.post('/product',auth, uploadFile("image"), addProduct)
// router.patch('/product/:id', auth, uploadFile("image"), updateProduct)
// router.delete('/product/:id', auth, deleteProduct)
// //transaction
// router.get('/transactions', auth, getTransactions)
// router.post('/transaction', auth, addTransaction)
// //category
// router.get('/categories', auth, getCategories)
// router.get('/category/:id', auth, getCategory)
// router.post('/category', auth, addCategory)
// router.patch('/category/:id', auth, updateCategory)
// router.delete('/category/:id', auth, deleteCategory)
// //categoryProduct
// // router.get('/categories-products', auth, getBridges)
// // router.get('/category-product/:id', auth, getBridge)
// // router.post('/category-product', auth, addBridge)
// // router.patch('/category-product/:id',auth,  updateBridge)
// // router.delete('/category-product/:id', auth, deleteBridge)

// router.post('/register', register)
// router.post('/login', login)
// router.get("/check-auth", auth, checkAuth);

// router.get('/profile', auth, getProfils)
// // router.get('/profile:id', auth, getProfil)
// // router.post('/profile', auth, addProfil)
// // router.patch('/profile/:id', auth, updateProfil)
// // router.delete('/profile/:id', auth, deleteProfil)
// router.post("/notification", notification);

// module.exports = router