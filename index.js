import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";
// import Post from "./Post.js";

const PORT = 5000;
const DB_URL = "mongodb+srv://user:user@cluster0.h7tmf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" // db connection link

const app = express();

app.use(express.json());
app.use('/api', router);
app.use(fileUpload()); // add middleware
app.use(express.static('static'));
// app.use('/users', userRouter);
// here add more routers if needed!

async function startApp () {
    try {
        await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }); // connect db
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT: ' + PORT));
    } catch (error) {
        console.log(error);
    }
};

startApp();
