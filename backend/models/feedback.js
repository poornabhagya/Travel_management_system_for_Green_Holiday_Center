const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const feedback = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        feedbacks: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);
const feedback_Schema = mongoose.model(
    "feedback",
    feedback
);
module.exports = feedback_Schema;
