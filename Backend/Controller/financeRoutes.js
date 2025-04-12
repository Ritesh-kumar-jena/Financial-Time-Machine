const dotenv=require("dotenv").config()
const mongoose =require("mongoose")
const express=require("express")
const { auth } = require("../Middelware/auth")
const { finance } = require("../Model/financeModel")


const financeRoute=express.Router()

financeRoute.use(auth)

financeRoute.post("/addFinance",async(req,res)=>{
    try {
        const { income, expenses, savings, debts } = req.body
        const userId=req.userData._id
        const financeData=new finance({userId,income,expenses,savings,debts})
        await financeData.save()
        res.status(200).send({ message: "Finance data saved successfully", data: financeData })
    } catch (error) {
        res.status(400).send(error)
    }
})

financeRoute.get("/finance",async(req,res)=>{
    try {
        const userId=req.userData._id
        const financeData=await finance.find({userId}).sort({ createdAt: -1 })
        res.status(200).send(financeData)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports={financeRoute}