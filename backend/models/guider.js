const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const guider = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
        },
        nic: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);
const guider_Schema = mongoose.model(
    "guider",
    guider
);
module.exports = guider_Schema;
