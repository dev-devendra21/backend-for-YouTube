// require("dotenv").config({ path: "./env" }) // 👈🏻 we can also use these 
import dotenv from "dotenv"
import connectDB from "./db/index.js";


// import mongoose from "mongoose";
// import { DB_NAME } from './constants'

import express from "express"


dotenv.config({ path: "./env" })

connectDB();
























// first approach

/*
const app = express()
    // IIFE
    ; (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

            // on listener for error // if database is connect but express not listening below code will execute 
            app.on("error", (error) => {
                console.log("Our application not able talk to database", error)
                throw error
            })

            app.listen(process.env.PORT, () => {
                console.log("Our application is listening on port", process.env.PORT);
            })
        } catch (error) {
            console.error("ERROR: ", error)
            throw error
        }
    })() */