import mongoose from "mongoose";

const userDataSchema = mongoose.Schema({
    email:String,
    firstname: String,
    lastname: String,
    password: String,
    contact: Number,
    usertype: String,
})