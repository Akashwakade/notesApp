import React, { useState } from 'react'

export const Signup = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")

    const handleSubmit=()=>{
        const payload={
            name,
            email,
            pass
        }
        console.log(payload)
        fetch('https://backenddeploytough.onrender.com/users/register',{
            method:"POST",
            headers:{
               "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        }).then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.log(err))

        //to empty the form
        setName("")
        setEmail("")
        setPass("")
    }
  return (<>
    <div>Signup</div>
    <label htmlFor='name'>Name</label>
    <br />
    <input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)}/><br />
    <label htmlFor='email'>Email</label>
    <br />
    <input type='text' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
    <label htmlFor='password'>Password</label>
    <br />
    <input type='text' name='password' value={pass} onChange={(e)=>setPass(e.target.value)}/><br />
    <button onClick={handleSubmit}>SignUp!</button>
    </>
  )
}
