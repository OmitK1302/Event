const mongoose = require("mongoose");

const ParticipantSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "A user must have a first name"],
        trim: true
    },
    last_name: {
        type: String,
        required: [true, "A user must have a last name"],
        trim: true,
    },
    username: {
        type: String,
        required: [true, "A user must have a username"],
        trim: true,
        unique: true
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
    },
    country: {
        type: String,
    },
    state: {
        type: String,
    },
    gender: {
        type: String,
    },
    organization_name: {
        type: String,
        trim: true
    }
});

const Participant = mongoose.model("participant_info", ParticipantSchema);

module.exports = Participant;