const express = require("express")
require("dotenv").config()
const db = require("./DB/db")
const userRouter = require("./routes/userRouter")
const categoryRouter = require("./routes/categoryRouter")
const postRouter = require("./routes/postRouter")
const commentRouter = require("./routes/commentRouter")
const reactionRouter = require("./routes/reactionRouter")
const cors = require("cors")



const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/v1", userRouter)
app.use("/api/v1", categoryRouter)
app.use("/api/V1", postRouter)
app.use("/api/v1", commentRouter)
app.use("/api/v1", reactionRouter)

const port = process.env.SERVER_PORT || 3001

app.listen(port, ()=>{
    console.log(`Server start at port ${port} successfully`)
    db()
})

