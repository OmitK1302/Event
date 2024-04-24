const express = require("express");
const navigation_controller = require("../controller/navigation_controller");
const router = express.Router();

router
    // .use(express.static("./public/Landing_page"))           // this also does the same work as the middleware up but it is integrated in the route itself and is not preffered
    .route("/overview")
    .get(navigation_controller.eventNest);

router
    // .use(express.static("./public/page-2"))
    .route("/get-started")
    .get(navigation_controller.userType);

router
    .route("/sign-up-Student")
    .get(navigation_controller.signupS)
    .post(express.urlencoded({ extended: true }), (req, res, next) => {
        navigation_controller.createUser(req.body, res);
    });
    // .post(navigation_controller.createUser);
    
router
    .route("/sign-up-Organization")
    .get(navigation_controller.signupO);

router
    .route("/sign-in")
    .get(navigation_controller.signin);

router
    .route("/all-events")
    .get(navigation_controller.allEvent);
    
router
    .route("/event-desctiption")
    .get(navigation_controller.description);
    
router
    .route("/registration-form")
    .get(navigation_controller.eventRegistration)
    .post(express.urlencoded({ extended: true }), (req, res, next) => {
        navigation_controller.registerParticipant(req.body, res);
    });
module.exports = router;