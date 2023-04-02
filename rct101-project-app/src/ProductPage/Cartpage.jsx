import { useState,useEffect } from "react"
import React from "react"
import { Box,IconButton,Grid,Heading,Image } from '@chakra-ui/react'
import { SearchIcon} from '@chakra-ui/icons'
import  Logo from "../project logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom"





export default function Navbar(){


    return(
        <>
        <Box position="sticky" bg='#FF3131' h="104px" w='100%' p={4} color='white' margin="auto" display="flex" justifyContent="space-between">
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
  marginLeft="-20"
  marginBottom="1.5"
  height="32px"
  color="black"
  border="none"
  borderRadius="0px"
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
       <Link to="/Cartpage"> <i className="fa-solid fa-cart-plus" style={{fontSize:"13px",marginTop:"5px"}}>Cart |</i></Link>
       <Link to="/Loginpage"> <i className="fa-solid fa-user"style={{fontSize:"13px",marginTop:"5px"}} >login</i></Link>
        </Box>
        </Box>
          </Box>
        
          <Box style={{backgroundColor:"rgb(2, 25, 75)",color:"white",width:"100%",height:"500px",margin:"auto"}}>
        <Grid templateColumns="repeat(4,1fr)">
            <Box>
        <h1 style={{fontSize:"18px",fontWeight:"bold",margin:"10px 0 0 10px"}}>
        PRODUCT CATEGORIES
        </h1>
        <h4 style={{margin:"10px"}}>Smartphones</h4>
        <h4 style={{margin:"10px"}}>Laptops</h4>
        <h4 style={{margin:"10px"}}>DSLR Cameras</h4>
        <h4 style={{margin:"10px"}}>Televisions</h4>
        <h4 style={{margin:"10px"}}>Air Conditions</h4>
        <h4 style={{margin:"10px"}}>Refrigerators</h4>
        <h4 style={{margin:"10px"}}>Kitchen Appliances</h4>
        <h4 style={{margin:"10px"}}>Accessories</h4>
        <h4 style={{margin:"10px"}}>Personal care & Grooming</h4>
            </Box>
            <Box>
        <h1 style={{fontSize:"18px",fontWeight:"bold",margin:"10px 0 0 10px"}}>
        SITE INFO
        </h1>
        <h4 style={{margin:"10px"}}>About Electronics Digital</h4>
        <h4 style={{margin:"10px"}}>resQ Service</h4>
        <h4 style={{margin:"10px"}}>Site Map</h4>
        <h4 style={{margin:"10px"}}>Gift Cards</h4>
        <h4 style={{margin:"10px"}}>Corporate Enquiries</h4>
        <h4 style={{margin:"10px"}}>Contact Us</h4>
            </Box>
            <Box>
        <h1 style={{fontSize:"18px",fontWeight:"bold",margin:"10px 0 0 10px"}}>
        RESOURCE CENTRE
        </h1>
        <h4 style={{margin:"10px"}}>Product Reviews</h4>
        <h4 style={{margin:"10px"}}>Buying Guides</h4>
        <h4 style={{margin:"10px"}}>How Tos</h4>
        <h4 style={{margin:"10px"}}>Featured Stories</h4>
        <h4 style={{margin:"10px"}}>Event and Happenings</h4>
        <h4 style={{margin:"10px"}}>Nearest Store</h4>
            </Box>
            <Box>
        <h1 style={{fontSize:"18px",fontWeight:"bold",margin:"10px 0 0 10px"}}>
        POLICIES
        </h1>
        <h4 style={{margin:"10px"}}>Terms Of Use</h4>
        <h4 style={{margin:"10px"}}>FAQs</h4>
        <h4 style={{margin:"10px"}}>Cancelation And Return policy</h4>
        <h4 style={{margin:"10px"}}>Pricing and Payments Policy</h4>
        <h4 style={{margin:"10px"}}>Shipping and Delivery Policy</h4>
        <h4 style={{margin:"10px"}}>Pprivacy Policy</h4>
            </Box>
            
        </Grid>
        <Box style={{display:"flex",justifyContent:"space-evenly"}}>
        <Box>
            <Heading margin="20px">Follow us</Heading>
            <div style={{margin:"20px",}}>
            <i style={{marginRight:"15px"}}  className="fa-brands fa-square-facebook"></i>
            <i style={{marginRight:"15px"}} className="fa-brands fa-twitter"></i>
            <i style={{marginRight:"15px"}} className="fa-brands fa-youtube"></i>
            </div>

        </Box>
        <Box>
            <Heading style={{fontSize:"20px",margin:"10px"}}>EXPERIENCE Electronics DIGITAL APP ON MOBILE</Heading>
          <div style={{display:"flex"}}>
          <Image width="150px" src='https://www.reliancedigital.in/build/client/images/google_play_store.png'/>
            <Image width="150px" src='https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png'/>
          </div>
        </Box>
        </Box>

       </Box>
        </>
    )


}