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
     //userID in the user doc === userID in the note doc
     const userIDinUserDoc=req.body.userID
     const {noteID}=req.params

     try {
      const note=await NoteModel.findOne({_id:noteID})
      const userIDinNoteDoc=note.userID
      console.log(note)
      if(userIDinUserDoc==userIDinNoteDoc){
       //update 
       console.log("userID in user Doc" ,userIDinUserDoc,"userid in note doc",userIDinNoteDoc)
       await NoteModel.findByIdAndUpdate({_id:noteID},req.body)
       res.json({msg:`${note.title}has been updated`})
      } 
       else {
        console.log("userID in user Doc" ,userIDinUserDoc,"userid in note doc",userIDinNoteDoc)
        res.json({msg:"Not Authorized!!"})

      }
     } catch (err) { 
      res.json({error:err})
     }
   
})

noteRouter.delete("/delete/:noteID",async(req,res)=>{
     //logic
      //logic
     //userID in the user doc === userID in the note doc
     const userIDinUserDoc=req.body.userID
     const {noteID}=req.params

     try {
      const note=await NoteModel.findOne({_id:noteID})
      const userIDinNoteDoc=note.userID
      console.log(note)
      if(userIDinUserDoc==userIDinNoteDoc){
       //update 
       console.log("userID in user Doc" ,userIDinUserDoc,"userid in note doc",userIDinNoteDoc)
       await NoteModel.findByIdAndDelete({_id:noteID})
       res.json({msg:`${note.title}has been deleted`})
      } 
       else {
        console.log("userID in user Doc" ,userIDinUserDoc,"userid in note doc",userIDinNoteDoc)
        res.json({msg:"Not Authorized!!"})

      }
     } catch (err) { 
      res.json({error:err})
     }
})

module.exports={noteRouter}