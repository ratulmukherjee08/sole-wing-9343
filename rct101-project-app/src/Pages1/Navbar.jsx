import { useState,useEffect } from "react"
import React from "react"
import { Box,IconButton } from '@chakra-ui/react'
import { SearchIcon} from '@chakra-ui/icons'
import  Logo from "../project logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom"





export default function Navbar(){


    return(
        <>
        <Box bg='#FF3131' h="104px" w='100%' p={4} color='white' margin="auto" display="flex" justifyContent="space-between">
<Link to="/">
        <Box>
            <img src={Logo} alt="website Logo" style={{width:"250px", height:"70px",margin:"auto"}} />
        </Box>
        </Link>
        <Box style={{marginLeft:"150px"}}>
            <input type="text" placeholder="Find your favorite products ..." style={{height:"32px",width:"580px",margin:"20px",borderInline:"none"}}/>
            <IconButton
  colorScheme='white'
  size="sm"
  marginLeft="-5"
  marginBottom="1.5"
  height="32px"
  color="black"
  borderRadius="1px"
  backgroundColor="white"
  aria-label='Search database'
  icon={<SearchIcon />}
/>

        </Box>
        <Box >
        <Box style={{display:"flex"}}>
            <p style={{fontSize:"14px",fontWeight:"bold",marginRight:"10px"}}>Find a store |</p>
            <p style={{fontSize:"14px",fontWeight:"bold",marginRight:"10px"}}>Buying guides |</p>
            <p style={{fontSize:"14px",fontWeight:"bold",marginRight:"10px"}}>Contact Us</p>
        </Box>
        <Box style={{display:"flex",marginTop:"30px"}}>
        <p style={{fontSize:"14px",fontWeight:"bold",marginRight:"10px"}}>select your pin code |</p>
        <i className="fa-solid fa-cart-plus" style={{fontSize:"13px",marginTop:"5px"}}>Cart |</i>
       <Link to="/loginpage"> <i className="fa-solid fa-user"style={{fontSize:"13px",marginTop:"5px"}} >login</i></Link>
        </Box>
        </Box>
          </Box>
        
        
        </>
    )


}