const express = require("express")
require("dotenv").config()
const db = require("./DB/db")


const app = express()

const port = process.env.SERVER_PORT || 3001

app.listen(port, ()=>{
    console.log(`Server start at port ${port} successfully`)
    db()
})