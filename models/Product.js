const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    isLiquid: {
        type: Boolean,
        required: true,
    },
    price: {
        type: Number,
    },
    pricePerPint: {
        type: Number,
    },
    pricePerQuart: {
        type: Number,
    },
    pluNumber: {
        type: String,
    },
    pluNumberPerQuart: {
        type: String,
    },
    pluNumberPerPint: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }, 
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;