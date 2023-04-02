import React from 'react'
import { useState } from 'react'
const Register = (props) => {
    const [email,setEmail]=useState('')
    const[pass,setPass]=useState('')
    const [name,setName]=useState('')
    const[number,setNumber]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(email)
      }
  return (
    <div className='auth-form-container'>
        <form className='register-form' action="">
            <label htmlFor="name">Full Name</label>
            <input value={name} type="text" placeholder='Name' />
            <label htmlFor="number">Phone Number</label>
            <input value={number} type="number" />
  <label htmlFor="email">Email Address</label>
  <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" required />
  <label htmlFor="password">Password</label>
  <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="Password" required />
  <button>Submit</button>
</form>
<button onClick={()=>props.onFormSwitch('login')}>Already have an Account? Sign In here.</button>
    </div>
  )
}

export default Register