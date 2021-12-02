const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        products: [
            {
                name: {
                    type: String
                },
                quantity: {
                    type: Number,
                    default: 1
                },
                unitePrice: {
                    type: Number,
                    required: true
                },
                discountPerUnite: {
                    type: Number,
                    default: 0
                },
                preTaxTotalPrice: {
                    type: Number,
                    required: true
                },
            }
        ],
        shippingAddress: {
            type: Object,
            required: true
        },
        billingAddress: {
            type: Object,
            required: true
        },
        status: {
            type: String,
            default: "pending"
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Order', OrderSchema);