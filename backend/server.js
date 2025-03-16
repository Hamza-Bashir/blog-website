const express = require("express")
require("dotenv").config()
const db = require("./DB/db")
const userRouter = require("./routes/userRouter")



const app = express()
app.use(express.json())

app.use("/api/v1", userRouter)

const port = process.env.SERVER_PORT || 3001

app.listen(port, ()=>{
    console.log(`Server start at port ${port} successfully`)
    db()
})