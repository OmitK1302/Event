const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A user must have a name"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "A user must have a email"],
        trim: true,
        unique: true
    },
    phone: {
        type: Number,
        required: [true, "A user must have a phone number"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "A user must have a password"],
        minlength: [6, "Password must be at least 6 characters long"],
        maxlength: [32, "Password must not exceed 32 characters"]
    }
});

const User = mongoose.model("user_info", userSchema);

module.exports = User;