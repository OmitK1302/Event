const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});
const app = require("./app");

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);
// console.log(process.env);

mongoose.connect(DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("DB Connection Successful"));

const port = 7000;
app.listen(port, () => {
    console.log("The connection is established at port 7000");
});