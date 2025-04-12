const path=require("path")
const dotenv=require("dotenv").config()
const express=require("express")
const cors=require('cors')
 const { connection } = require("./db")
const { userRoute } = require("./Controller/userRoutes")
const { financeRoute } = require("./Controller/financeRoutes")
const { projectionRoute } = require("./Controller/projectionRoutes")
const port=process.env.port



const app=express()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    try {
        res.status(200).send("Wellcom to my Financial Time Machine")
    } catch (error) {
        res.status(404).send(error)
    }
})



 app.use("/users",userRoute)
 app.use("/finance",financeRoute)
 app.use("/projection",projectionRoute)

app.listen(port,async()=>{
    try {
         await connection
        console.log(`server is running on port:-${port} and connected to Financial-Time-Machine database`)
    } catch (error) {
        console.log(error)
    }
})