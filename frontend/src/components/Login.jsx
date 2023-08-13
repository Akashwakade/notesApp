import React, { useState } from 'react'
const port=process.env.back

export const Login = () => {
     
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")

    const handleSubmit=()=>{
        const payload={
          
            email,
            pass
        }
        console.log(payload)
        fetch('https://backenddeploytough.onrender.com/users/login',{
            method:"POST",
            headers:{
               "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        }).then(res=>res.json())
        .then((res)=>{
            console.log(res)
            localStorage.setItem("token",res.token)
        })
        
        .catch(err=>console.log(err))

        //to empty the form
      
        setEmail("")
        setPass("")
    }
  return (<>
    <div>Login</div>
    
    <label htmlFor='email'>Email</label>
    <br />
    <input type='text' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
    <label htmlFor='password'>Password</label>
    <br />
    <input type='text' name='password' value={pass} onChange={(e)=>setPass(e.target.value)}/><br />
    <button onClick={handleSubmit}>Login!</button>
    </>
  )
}
