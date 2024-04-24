const express = require("express");
const morgan = require("morgan");
const path = require("path");

const navigationRoutes = require("./routes/navigation_route");

const app = express();
app.use(express.json());
app.use(morgan("dev"));

// Middlwares
app.use("/overview", express.static(path.join(__dirname, "public", "Landing_page")));              // this is middleware in which first parameter is meant for checking the routes which contains the same name as in the first parameter and then if the route matches the name in the middleware then the given operation in the second parameter will be server, and this how middleware should be used to remove the scope of collisions
app.use("/get-started", express.static(path.join(__dirname, "public", "page-2")));
app.use("/sign-up-Student", express.static(path.join(__dirname, "public", "Forms", "SignUpStu")));
app.use("/sign-up-Organization", express.static(path.join(__dirname, "public", "Forms", "SignUpOrg")));
app.use("/sign-in", express.static(path.join(__dirname, "public", "Forms", "SignIn")));
app.use("/all-events", express.static(path.join(__dirname, "public", "after_login")));
app.use("/event-desctiption", express.static(path.join(__dirname, "public", "Description_page")));
app.use("/sign-up-Organization", express.static(path.join(__dirname, "public", "Forms", "registration_form")));

app.use(navigationRoutes);
app.use((req, res, next) => {                               // this is also middleware with different format
    console.log("Hello from the middleware👋");
    next();
});

module.exports = app;