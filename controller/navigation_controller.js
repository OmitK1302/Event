const fs = require("fs");
const path = require("path");
// const app = require("../app");
const User = require("../models/user_model");
const Participant = require("../models/registration_model");
// const bodyParser = require('body-parser');

const landing_page = fs.readFileSync(`${__dirname}/../public/Landing_Page/index.html`, "utf-8");
const userT = fs.readFileSync("./public/page-2/index.html", "utf-8");
const signUpStu = fs.readFileSync("./public/Forms/SignUpStu/indexStu.html", "utf-8");
const signUpOrg = fs.readFileSync("./public/Forms/SignUpOrg/indexOrg.html", "utf-8");
const signIn = fs.readFileSync("./public/Forms/SignIn/index.html", "utf-8");
const after_login = fs.readFileSync("./public/after_login/index.html", "utf-8");
const dPage = fs.readFileSync("./public/Description_page/index.html");
const rForm = fs.readFileSync("./public/Forms/registration_form/index.html", "utf-8");

exports.eventNest = (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.status(200).send(landing_page);
}

exports.userType = (req, res) => {
    res.setHeader("Content-type", "text/html");
    res.status(200).send(userT);
}

exports.signupS = (req, res) => {
    res.setHeader("Content-type", "text/html");
    res.status(200).send(signUpStu);
}

exports.signupO = (req, res) => {
    res.setHeader("Content-type", "text/html");
    res.status(200).send(signUpOrg);
}

exports.signin = (req, res) => {
    res.setHeader("Content-type", "text/html");
    res.status(200).send(signIn);
}

exports.createUser = async (formData, res) => {
    try {
        const { name, email, phone, password } = formData;
        const userData = {
            name,
            email,
            phone,
            password
        };
        const newUser = await User.create(userData);

        res.redirect("/all-events");
    }
    catch(err) {
        res.status(400).json({
            status: "failed",
            message: err
        });
    }
}

exports.allEvent = (req, res) => {
    res.setHeader("Content-type", "text/html");
    res.status(200).send(after_login);
}

exports.description = (req, res) => {
    res.setHeader("Content-type", "text/html");
    res.status(200).send(dPage);
}

exports.eventRegistration = (req, res) => {
    res.setHeader("Content-type", "text/html");
    res.status(200).send(rForm);
}

exports.registerParticipant = async (formData, res) => {
    try {
        const { first_name, last_name, username, email, phone, country, state, gender, organization_name} = formData;
        const participantData = {
            first_name, 
            last_name, 
            username, 
            email, 
            phone, 
            country, 
            state, 
            gender, 
            organization_name
        };
        const newParticipant = await Participant.create(participantData);

        res.redirect("/event-desctiption");
    }
    catch(err) {
        res.status(400).json({
            status: "failed",
            message: err
        });
    }
}