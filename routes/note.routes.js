const express=require("express")

const noteRouter=express.Router

noteRouter.post("/create",async(req,res)=>{

})

noteRouter.get("/",async(req,res)=>{
    
})

noteRouter.patch("/update/:noteID",async(req,res)=>{
    
})

noteRouter.delete("/delete/:noteID",async(req,res)=>{
    
})

module.exports={noteRouter}