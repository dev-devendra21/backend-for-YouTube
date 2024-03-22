import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";


const app = express();

// cors origin you are allowing 

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// we accepting json format data from client side
app.use(express.json({ limit: "16kb" }))

// we accepting url data from client side
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

// we accepting images or pdf etc
app.use(express.static("public"))



// we apply crud operation on client side with cookie and token

app.use(cookieParser())

// to authenticate user we use middleware
// example check if user is login or not
// example check if user is admin or not

export { app }