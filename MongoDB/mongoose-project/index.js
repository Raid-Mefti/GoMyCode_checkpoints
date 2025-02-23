import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs")

app.use(express.urlencoded({extended: true}))
app.use("/public", express.static("./public"))


mongoose
.connect(process.env.MONGODB_URI, {
    dbName : process.env.MONGODB_DB,
    auth: {
        username : process.env.MONGODB_USER,
        password : process.env.MONGODB_PW,
    },
})
.then((result) => {
    console.log(`Database connected in : ${process.env.MONGODB_DB}`)

    app.listen(process.env.PORT, () => {
        console.log(`Server started on ${process.env.PORT}`);
        console.log(`http://localhost:${process.env.PORT}`)
    });

}).catch((err) => {
    console.log(err)
    process.exit(1)
});
