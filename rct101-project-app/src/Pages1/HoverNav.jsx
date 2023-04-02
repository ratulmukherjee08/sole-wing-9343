import React from "react"
import {Box} from "@chakra-ui/react"
import { Link } from "react-router-dom"
export default function HoverNav(){


    return (
        <>
        <Box style={{height:"50px",backgroundColor:"blue",color:"white",textAlign:"center",alignItems:"center",display:"flex",justifyContent:"space-between",position:"sticky"}}>
        <Link to="/productpage"><p>MOBILES & TABLETS</p></Link>  
        <i className="fa-solid fa-chevron-down fa-xs"></i>
       <Link to="/productpage"><p>TELEVISIONS</p></Link> 
        <i className="fa-solid fa-chevron-down fa-xs"></i>
         <p>AUDIO</p>
        <i className="fa-solid fa-chevron-down fa-xs"></i>
        <p>HOME APPLIANCES</p>
        <i className="fa-solid fa-chevron-down fa-xs"></i>
        <p>COMPUTERS</p>
        <i className="fa-solid fa-chevron-down fa-xs"></i>
        <p>CAMERAS</p>
        <i className="fa-solid fa-chevron-down fa-xs"></i>
        <p>KITCHEN APPLIANCE</p>
        <i className="fa-solid fa-chevron-down fa-xs"></i>
        <p>PERSONAL CARE</p>
        <i className="fa-solid fa-chevron-down fa-xs"></i>
        <p>ACCESSORIES</p>
        <i className="fa-solid fa-chevron-down fa-xs"></i>
        
        </Box>
        </>
    )
}