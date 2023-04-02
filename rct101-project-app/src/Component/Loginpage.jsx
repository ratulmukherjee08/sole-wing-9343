import React from 'react'
import Login from "../Component/Login"
import Register from "../Component/Register"
import { useState } from 'react'
import { Box,Image } from '@chakra-ui/react'
import  "./Loginpage.css"

const Loginpage = () => {
    const [currentform,setCurrentform]=useState('login') 
    const toggleForm=(formName)=>{
        setCurrentform(formName)
    }
  return (
    <>
   
     <div  className='Loginpage'>
     <Box>
    <Image src="https://www.reliancedigital.in/akamai/images/mobile/Login-banner.jpeg"/>
    </Box>
        <Box style={{width:"80%"}}>
        {currentform==="login"? <Login onFormSwitch={toggleForm}/>:<Register onFormSwitch={toggleForm}/>}
        </Box>
    </div>
    </>
   
  )
}

export default Loginpage