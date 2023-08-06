const express=require("express")
const {NoteModel}=require("../models/note.model")

const noteRouter=express.Router()

const{auth}=require("../middlewares/auth.middleware")


noteRouter.use(auth)

noteRouter.post("/create",async(req,res)=>{
      try {
        const note=new NoteModel(req.body)
        await note.save()
        res.json({msg:"new note has been added",note:req.body})
      } catch (err) {
        res.json({error:"not a user"}) 
      }
})

noteRouter.get("/",async(req,res)=>{ 
     //logic

     try {
        // const note=new NoteModel(req.body)
        // await note.save()
        const notes=await NoteModel.find({userID:req.body.userID})
        res.json(notes)
      } catch (err) {
        res.json({error:"not a user"}) 
      }
}) 

noteRouter.patch("/update/:noteID",async(req,res)=>{
     //logic
})

noteRouter.delete("/delete/:noteID",async(req,res)=>{
     //logic
})

module.exports={noteRouter}