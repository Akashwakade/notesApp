import React, { useState } from 'react'

export const AddNote = () => {

    const [title,setTitle]=useState("")
    const [body,setBody]=useState("")
    const [cate,setCate]=useState("")

    const handleSubmit=()=>{
   const payload={
    title,
    body,
    cate
   }


        fetch('https://backenddeploytough.onrender.com/notes/create',{
            method:"POST",
            headers:{
               "Content-Type":"application/json",
               authorization:`Bearer ${localStorage.getItem("token")}`
            },
            body:JSON.stringify(payload)
        }).then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.log(err))

        setTitle("");
        setBody("");
        setCate("");
    }
  return (<>
    <div>Add Note</div>
    <label htmlFor='title'>Title</label>
    <br />
    <input type='text' name='title' value={title} onChange={(e)=>setTitle(e.target.value)}/><br />
    <label htmlFor='body'>Body</label>
    <br />
    <input type='text' name='body' value={body} onChange={(e)=>setBody(e.target.value)}/><br />
    <label htmlFor='cate'>Category</label>
    <br />
    <input type='text' name='cate' value={cate} onChange={(e)=>setCate(e.target.value)}/><br />
    <button onClick={handleSubmit}>Add Note!</button></>
  )
}
