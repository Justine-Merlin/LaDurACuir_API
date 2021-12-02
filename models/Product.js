const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        img: {
            type: Array, 
        },
        price: {
            type: Number,
            required: true
        },
        desc: {
            type: String,
        },
        categorie: {
            type: Array
        },
        size: {
            type: String,
        },
        color: {
            type: String,
        },
        quantity: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Product', ProductSchema);