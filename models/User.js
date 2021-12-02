const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        addresses: {
            shippingAddresses: [
                {
                    address1: {
                        type: String,
                        required: true,
                    },
                    address2: {
                        type: String,
                    },
                    city: {
                        type: String,
                        required: true,
                    },
                    code: {
                        type: String,
                        required: true,
                    },
                    state: {
                        type: String,
                        required: true,
                    },
                },
            ],
            billingAddresses: [
                {
                    address1: {
                        type: String,
                        required: true,
                    },
                    address2: {
                        type: String,
                    },
                    city: {
                        type: String,
                        required: true,
                    },
                    code: {
                        type: String,
                        required: true,
                    },
                    state: {
                        type: String,
                        required: true,
                    },
                },
            ],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", UserSchema);
