import { Box, Center, Flex, Grid, HStack, Text, Image, Input, FormLabel, Button, FormControl, Radio, RadioGroup, VStack, Select,IconButton,Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { product } from '../Get Data/Axios'
import  Logo from "../project logo.png"
import { SearchIcon } from '@chakra-ui/icons'
export default function ProductPage  ({ searchval }){
  const [data, setData] = useState([])
  const [orderby, setorderby] = useState("")
  const [sortby, setsortby] = useState("price")
  const [filterval,setfilterval]=useState("")


  
  
  
 console.log(filterval)
  const fetchandupdatedata = async (sortby, orderby,filterval,props) => {
    try {
      await product({ sortby, orderby,filterval })
        .then((res) => setData(res.data))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchandupdatedata(sortby, orderby,filterval)
  }, [sortby, orderby,filterval])

  const handleAddToCart = (item) => {
    
  }
  


  return (

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
        <i className="fa-solid fa-cart-plus" style={{fontSize:"13px",marginTop:"5px"}}>Cart |</i>
       <Link to="/Loginpage"> <i className="fa-solid fa-user"style={{fontSize:"13px",marginTop:"5px"}} >login</i></Link>
        </Box>
        </Box>
          </Box>
    <Box mt={'20px'}>
      <Flex>
        <Box width={'23%'} >

          <Center>
            <Box ml={'27px'} p={'20px'} backgroundColor={'tomato'} color={'white'} borderRadius={'4px'} mt={'30px'} width={'78%'}>
              <RadioGroup onChange={setorderby} value={orderby}>
                <VStack direction='row'>
                  <Radio value='asc' colorScheme={'pink'}><Text fontFamily={'sans-serif'} fontWeight={'bold'}>Low to High</Text></Radio>
                  <Radio value='desc' colorScheme={'orange'}><Text fontFamily={'sans-serif'} fontWeight={'bold'}>High to Low</Text></Radio>
                </VStack>
              </RadioGroup>
            </Box>
          </Center>
          <Center>
            <Box mt={'20px'}>
              <Select focusBorderColor={'none'}  bg='tomato' onChange={(e)=>setfilterval(e.target.value)} value={filterval}>
              <option disabled  value="" ><Text color={'black'}>SELECT Brand</Text></option>
                <option value="Samsung">Samsung</option>
                <option value="Apple">Apple</option>
                <option value="Boat">Boat</option>
                <option value="In Base">In Base</option>
                <option value="LG">LG</option>
                <option value="HP">HP</option>
                <option value="Sony">Sony</option>
                <option value="Lenovo">Lenovo</option>
              </Select>
            </Box>
            
          </Center>
        <Center>
          <Box h={'100vh'} mt={'50px'}>
            <Image marginTop={'10px'} src="https://www.reliancedigital.in/medias/Best-Deals-in-Everyday-Appliances-Producst-Carousel-02-01-2022.jpg?context=bWFzdGVyfGltYWdlc3w4ODE0NnxpbWFnZS9qcGVnfGltYWdlcy9oZDYvaDgxLzk5MzkyMDUzNTc1OTguanBnfDdkMDc3ZWEyMTIxZWIxYzg4MTRjZDlkNmRlY2I1ZTcwNzM5MmM0ODcxYjdmMzUxMTQyYmNmNmQ4YzFkNjM1MGM"></Image>
            <Image marginTop={'10px'} src="https://www.reliancedigital.in/medias/Best-Selling-Audio-Accessories-Producst-Carousel-02-01-2022.jpg?context=bWFzdGVyfGltYWdlc3w4MTEzMXxpbWFnZS9qcGVnfGltYWdlcy9oNDgvaGVmLzk5MzkyMDUyOTIwNjIuanBnfGY3YTBjMzVhNjMyYjAyMTZiODY4ZmRjYjU5OGU1YmJmMTgzNDYzNzY3MDFiYzkwY2NlMGIxOTI0MGRlOGEzZDI"></Image>
          </Box>
          </Center>  
        </Box>
       
        <Box width={'73%'} >
        <Grid templateColumns='repeat(4,1fr)'gap={3}>
      {data.map((el)=>
       <Box style={{marginTop:"15px",border:"1px solid white",borderRadius:"4px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"10px",cursor:'pointer'}}>
       <Image w="80%" src={el.image}/>
        <h3 style={{color:"rgb(9, 173, 239)",fontWeight:"bold",fontSize:"14px"}}>{el.title}</h3>
        <p style={{fontSize:"13px",color:"rgb(81, 80, 80)",fontWeight:"bold"}}>Company:{el.brand}</p>
        <p style={{fontSize:"13px",color:"rgb(81, 80, 80)",fontWeight:"bold"}}>Ratings:{el.rating}</p>
        <p style={{fontSize:"13px",color:"rgb(81, 80, 80)",fontWeight:"bold"}}>Offer Price:{el.offerprice}</p>
        <p style={{fontSize:"13px",color:"rgb(81, 80, 80)",fontWeight:"bold"}}>M.R.P:{el.mrp}</p>
        <p style={{fontSize:"15px",color:"green"}}>Category:{el.category}</p>
       <div style={{display:"flex"}}>
       <button style={{border:"1px solid green",color:"green",borderRadius:"4px",fontSize:"10px",margin:"auto",padding:"5px"}}>Offers Available</button>
        <Link to="/Cartpage"><button onClick={handleAddToCart} style={{color:"White",borderRadius:"4px",fontSize:"10px",margin:"auto",padding:"5px",backgroundColor:"tomato",fontSize:"12px",fontWeight:"bold"}}>Add to Cart</button></Link>
       </div>
    </Box>
      )}
     </Grid>
        </Box>
      </Flex>

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



