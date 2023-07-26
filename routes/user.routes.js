const express=require("express")

const userRouter=express.Router()
const {UserModel}=require("../models/user.model")
const bcrypt=require("bcrypt")  
const jwt=require("jsonwebtoken")

userRouter.post("/register",(req,res)=>{
    const {name,email,pass}=req.body
    try {
        bcrypt.hash(pass,5,async(err,hash)=>{
            if(err){
                res.json({error:err.message})
            }else{
                const user=new UserModel({name,email,pass:hash})
                await user.save()
            }
        })
        res.json({msg:"user has been registered",user:req.body})
    } catch (error) {
        res.json({error:err.message})
        
    }
})

userRouter.post("/login",async(req,res)=>{
    const{email,pass}=req.body
    try {
        const user=await UserModel.findOne({email})
        if(user){
            bcrypt.compare(pass,user.pass,(err,result)=>{
              if(result){
                 let token=jwt.sign({course:"BE"},"akash")
                 res.json({msg:"Logged in",token})
              }else{
                res.json({msg:"wrong credential"})
              }
            })
              
        }else{
            res.json({msg:"user does not exist!"})
        }
    } catch (error) {
        res.json({error:err.message})
    }

})

// userRouter.post("/login",(req,res)=>{
    
// })

module.exports={userRouter}