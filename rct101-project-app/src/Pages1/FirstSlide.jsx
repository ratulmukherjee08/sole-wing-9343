import React from 'react'
import { useState,useEffect,useRef } from 'react'
import {Box,Image,Grid, Heading} from "@chakra-ui/react"
import { DigitalMobile, SummerSale } from '../Get Data/Axios'
// const slide=[
//     {
//         url:"https://www.reliancedigital.in/medias/Summer-Offer-Reliance-1365x260.jpg?context=bWFzdGVyfGltYWdlc3wxNjA4NDV8aW1hZ2UvanBlZ3xpbWFnZXMvaGQyL2g4Zi85OTc1MTg1MzA5NzI2LmpwZ3xiYzk0YTc4OTBhYTg0ZGQzYmViZTY1NmFhNjMyYmUzZDlhZWNlNzg1NTE0YjA5ZDE3NzFhM2UwNGE1ZGJiNzVk",title:"1st image"
//     },
//     {
//         url:"https://www.reliancedigital.in/medias/MIdnight-Sale-Carousel-10-PM-8-AM-07-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w4NjgxOXxpbWFnZS9qcGVnfGltYWdlcy9oYjEvaGE3Lzk5NDk2NTc3NTk3NzQuanBnfDJiNzJkNDIzOWU2YWRkY2I2OTM1ZGYzOTk1NzVmYjI1M2JjYTY4MDA0MzhhMmRlODVkYTE1OGIzYjFhYzk1YjA",title:"2nd image"
//     },
//     {
//         url:"https://www.reliancedigital.in/medias/IPL-Carousel-Banner-27-03-2023-02.jpg?context=bWFzdGVyfGltYWdlc3wxMDA2MzN8aW1hZ2UvanBlZ3xpbWFnZXMvaDkzL2g2NC85OTc1MTg0NDU3NzU4LmpwZ3w4NWE3YzU0Y2Q5ZGNhNzE2ZjA2MzZlZDIzYjA4NTljZWIyMzYwOWYwOThmZTQyMjE2NjdmNDEyODQ0MjIwYWMy",title:"3rd image"
//     }
// ]

const FirstSlide = () => {

    const [data,setdata]=useState([])
    const [SummerSaleData,setSummerSaleData]=useState([])
    const FetchProduct= async() => {
  
        try {
          await SummerSale()
          .then((res)=>setSummerSaleData(res.data))
        } catch (error) {
          console.log(error)
        }
          
      }
      useEffect(()=>{
        FetchProduct()
      },[])
      console.log(data)


    const FetchMobile= async() => {
  
      try {
        await DigitalMobile()
        .then((res)=>setdata(res.data))
      } catch (error) {
        console.log(error)
      }
        
    }
    useEffect(()=>{
      FetchMobile()
    },[])
    console.log(data)
  return (
    <div>
      
     <Box style={{width:"100%"}}>
    <Image w="100%" src="https://www.reliancedigital.in/medias/Summer-Offer-Reliance-1365x260.jpg?context=bWFzdGVyfGltYWdlc3wxNjA4NDV8aW1hZ2UvanBlZ3xpbWFnZXMvaGQyL2g4Zi85OTc1MTg1MzA5NzI2LmpwZ3xiYzk0YTc4OTBhYTg0ZGQzYmViZTY1NmFhNjMyYmUzZDlhZWNlNzg1NTE0YjA5ZDE3NzFhM2UwNGE1ZGJiNzVk"/>
     </Box>
    <Box style={{width:"100%"}}>
    <Image w="100%"  src="https://www.reliancedigital.in/medias/AC-Chill-Fest-Carousel-Banner-24-02-2023.jpg?context=bWFzdGVyfGltYWdlc3w5MTE5M3xpbWFnZS9qcGVnfGltYWdlcy9oZWYvaDViLzk5NjU0ODY4NjY0NjIuanBnfGFiOTM5NjlmODJmY2RiYmZiZTU2ZjIzMjQ4MGU3ZWU1ZDllMjY2MTU5NmMxZWEyNTllOGIxMTBjNDUwZTg5NmQ"/>
    </Box>
    <h1 style={{marginLeft:"30px",fontSize:"20px"}}>Digital Mobile Days</h1>
    <Box style={{width:"100%",margin:"10 0 0 10",}}>
    <Grid templateColumns='repeat(5,1fr)'gap={3}>
      {data.map((el)=>
       <Box style={{marginTop:"15px"}}>
       <Image w="80%" src={el.image}/>
        <h3 style={{color:"rgb(9, 173, 239)",fontWeight:"bold",fontSize:"14px"}}>{el.name}</h3>
        <p style={{fontSize:"12px",color:"rgb(81, 80, 80)"}}>Deal Price:{el.price}</p>
        <p style={{fontSize:"12px",color:"rgb(81, 80, 80)"}}>M.R.P:{el.mrp}</p>
        <p style={{fontSize:"15px",color:"green"}}>You Save:{el.yousave}</p>
        <button style={{border:"1px solid green",color:"green",borderRadius:"4px",fontSize:"10px",margin:"auto"}}>Offers Available</button>
    </Box>
      )}
     </Grid>
    </Box>
       <hr />
        <Box style={{margin:"20px"}}>
        <h1 style={{marginLeft:"30px",fontSize:"20px",marginBottom:"20px"}}>EASY EMI AND CASHBACK OFFERS</h1>
           <Grid templateColumns="repeat(4,1fr) "gap={4}>
           <Box>
            <Image src='https://www.reliancedigital.in/medias/AC-Pine-Offer-Small-Banner-01-03-2023.jpg?context=bWFzdGVyfGltYWdlc3wzMTA3N3xpbWFnZS9qcGVnfGltYWdlcy9oY2QvaGQ0Lzk5Njc3MTUyNTQzMDIuanBnfGY0M2RmMjhkMzZhNGM3NjEyZDNhZTNhNmM1MTllYTAzZDMxYWI0NmNlZjBhZjVjNDA0MDIzZmQ5NWY3YWRlMTQ'/>
           </Box>
           <Box>
            <Image src='https://www.reliancedigital.in/medias/Refrigerator-Pine-Offer-Small-Banner-01-03-2023.jpg?context=bWFzdGVyfGltYWdlc3wyODMxNXxpbWFnZS9qcGVnfGltYWdlcy9oNTIvaDljLzk5Njc3MTUzMTk4MzguanBnfGY4ZDM2ZWQ1NzVjNjViNmExYjA4N2M1YTBlZDQ3MmVlZjlkMDlhNzljNzdmNDhiOGUwOGJiZGY0MjE1MmE4NDc'/>
           </Box>
           <Box>
            <Image src='https://www.reliancedigital.in/medias/Washing-Machine-Pine-Offer-Small-Banner-01-03-2023.jpg?context=bWFzdGVyfGltYWdlc3wyNDg1M3xpbWFnZS9qcGVnfGltYWdlcy9oNGIvaDNiLzk5Njc3MTU0NTA5MTAuanBnfDc5MTE0MWY3M2M3NTk4MjRlMmVmMTg2YjBmNWFiYTQ5NDc5ZjMxOGNhZDkyNzZlZGNkMjcxZmRkYmEzMzgwMmE'/>
           </Box>
           <Box>
            <Image src='https://www.reliancedigital.in/medias/Kitchen-Appliances-Pine-Offer-Small-Banner-01-03-2023.jpg?context=bWFzdGVyfGltYWdlc3wzNzI4N3xpbWFnZS9qcGVnfGltYWdlcy9oYzEvaDhhLzk5Njc3MTUzODUzNzQuanBnfGUzNDhjM2Y0OTNhNTE3N2RkYWIzMWFkM2IyZTIzOTVkYWQ0YTVjZjExODM4M2I5MDI5OGMzOGVmODI3ZTU0Zjk'/>
           </Box>
           </Grid>
           <Grid templateColumns="repeat(4,1fr) " gap={4} marginBottom="5px">
           <Box>
            <Image src='https://www.reliancedigital.in/medias/Entertainment-Pine-Offer-Small-Banner-01-03-2023.jpg?context=bWFzdGVyfGltYWdlc3w0NzYwMHxpbWFnZS9qcGVnfGltYWdlcy9oYmIvaGM3Lzk5Njc3MTU3Nzg1OTAuanBnfDJkNDdhNWFiNTIzODE1NDcxZmNlM2FlZWI2ZjVkOTE2ODY0MzM4NjY2NDVhOTc1Y2JmMDYwNmQ1OWIwYmQ3NDY'/>
           </Box>
           <Box>
            <Image src='https://www.reliancedigital.in/medias/Laptops-Tablets-Pine-Offer-Small-Banner-01-03-2023.jpg?context=bWFzdGVyfGltYWdlc3wzOTIxMHxpbWFnZS9qcGVnfGltYWdlcy9oNTcvaDg1Lzk5Njc3MTU1ODE5ODIuanBnfGEwNTQ0YjgxYjE4ZWYwOTlkMjYyM2RiOGRhZDBiZTRlOWU0MjUzOWIzMGQxYTc5YmVmYTBhNzkzZjFjNWIyMmI'/>
           </Box>
           <Box>
            <Image src='https://www.reliancedigital.in/medias/Smartphones-Pine-Offer-Small-Banner-01-03-2023.jpg?context=bWFzdGVyfGltYWdlc3wzMzg2OHxpbWFnZS9qcGVnfGltYWdlcy9oZTgvaGViLzk5Njc3MTU2NDc1MTguanBnfDhkNWE1ZmI4MTE2ZjZjZTI4ZGZiNGRiMTdhZTNmYmI4Zjg0NzEzZDk3OTY4YzgxNTY2Y2VjZTgwY2M2YThkZTk'/>
           </Box>
           <Box>
            <Image src='https://www.reliancedigital.in/medias/Smartwatches-Pine-Offer-Small-Banner-01-03-2023.jpg?context=bWFzdGVyfGltYWdlc3w0MTA4N3xpbWFnZS9qcGVnfGltYWdlcy9oMGUvaDE4Lzk5Njc3MTU3MTMwNTQuanBnfDUxMTQwZGQ2NDNlNDVmZTllYTY3NjM0YWEzNzhhZmY2ZjUyODFhM2VlODYyZDM3YzdkZWIzNjYxNDFiNTQ0ZGI'/>
           </Box>
           </Grid>
        </Box >
        <Box style={{width:"100%"}}>
            <Image w="100%" src='https://www.reliancedigital.in/medias/OPPO-Find-N2-Carousel-Banner-Desktop.jpg?context=bWFzdGVyfGltYWdlc3w2NjIyNXxpbWFnZS9qcGVnfGltYWdlcy9oZDUvaDg2Lzk5NzE5NTM2MzEyNjIuanBnfDQxZjE0OTFjZmQzYmRlZDM4MzgyY2FmNDcxMjVlMWJmZjg5MDI5OGE3YTQzNGJmYzgyNmI3ZTgwMGY0Zjc2OTc'/>
        </Box>

        <Box style={{width:"100%",margin:'20px'}}>
            <h1 style={{marginLeft:"30px",fontSize:"20px",marginBottom:"20px"}}>Great Deals on Electronics</h1>
            <Grid templateColumns="repeat(4,1fr)" gap={4}>
                <Box>
                    <Image src='https://www.reliancedigital.in/medias/Redmi-A1-Series-Small-Banner-09-03-2023.jpg?context=bWFzdGVyfGltYWdlc3wzMjU0MnxpbWFnZS9qcGVnfGltYWdlcy9oYjUvaGU5Lzk5NzQzMjk0NDIzMzQuanBnfDM5YTY2NThmMTYyOTE0MDM5YjZjZjc0Yjg1MmE1MjgxNzYyZmMzMWE0ODdhMWI2NTU2MzYyMDExYWMwMmY5MWI'/>
                </Box>
                <Box>
                    <Image src='https://www.reliancedigital.in/medias/Audio.jpg?context=bWFzdGVyfGltYWdlc3wzMDM1N3xpbWFnZS9qcGVnfGltYWdlcy9oOGEvaDMwLzk5NjY2MzI0MzU3NDIuanBnfGI1MGQ2NGRiY2YwOTAyOGYyYzY2OTBjZjY3ZWUxZmM3MjMxOTk2ZGNhZWFhNDViNWFiNGI4MzQyYTFlOGU5YzE'/>
                </Box>
                <Box>
                    <Image src='https://www.reliancedigital.in/medias/Smartwatches-Small-Banner-28-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wzMTY3M3xpbWFnZS9qcGVnfGltYWdlcy9oNTEvaGY3Lzk5Mzc4OTUyOTI5NTguanBnfDQ2NzM2YjAxZTkzYmJiMTNlMjk4ODkxNTNlMTczMDcxYzU4NjMzZDZmNWQ3N2I5MGViNmMzZDAwNjExMmUxNTE'/>
                </Box>
                <Box>
                    <Image src='https://www.reliancedigital.in/medias/Musical-Instruments.jpg?context=bWFzdGVyfGltYWdlc3wyNzc2NXxpbWFnZS9qcGVnfGltYWdlcy9oOWUvaGE1Lzk5NjY2MzI1MDEyNzguanBnfGY4YmQzNzIxYmRmNjJjODIzYmZmMzE3OGZiYzY1YzE5MzA3YjUwM2JmNTZiN2NmZThjMWFhNDMwYzdjYzU0NjE'/>
                </Box>


            </Grid>
        </Box>
        <Box>
            <Image w="100%" src="https://www.reliancedigital.in/medias/Pre-Summer-Sale-Carousel-Banner-Desktop.jpg?context=bWFzdGVyfGltYWdlc3w5MzYyMXxpbWFnZS9qcGVnfGltYWdlcy9oNjMvaDAxLzk5NjM4NTI2NjA3NjYuanBnfGQzNmMzZjYyNGYwNWFhOWYyNjAzNjMzYjgyYzA4YmE3ZTFlNzBhZTgwMzFkNWY0MDYyZTIwYzEzZjhjNDJjZmU"/>
        </Box>

       <Box>
       <h1 style={{marginLeft:"30px",fontSize:"20px"}}>Pre Summer Sale | Upto 60% Off</h1>
    <Box style={{width:"100%",margin:"10 0 0 10",}}>
    <Grid templateColumns='repeat(5,1fr)'gap={3}>
      {SummerSaleData.map((el)=>
       <Box style={{marginTop:"15px"}}>
       <Image w="80%" src={el.image}/>
        <h3 style={{color:"rgb(9, 173, 239)",fontWeight:"bold",fontSize:"14px"}}>{el.name}</h3>
        <p style={{fontSize:"12px",color:"rgb(81, 80, 80)"}}>Deal Price:{el.price}</p>
        <p style={{fontSize:"12px",color:"rgb(81, 80, 80)"}}>M.R.P:{el.mrp}</p>
        <p style={{fontSize:"15px",color:"green"}}>You Save:{el.yousave}</p>
        <button style={{border:"1px solid green",color:"green",borderRadius:"4px",fontSize:"10px",margin:"auto"}}>Offers Available</button>
    </Box>
      )}
     </Grid>
    </Box>
       </Box>
       <Box style={{width:"100%",margin:"20px",borderRadius:"4px"}}>
        <h1 style={{fontSize:"25px",fontWeight:"bold",textAlign:"center"}}>EXPLORE OUR RANGE OF PRODUCTS</h1>
        <Grid templateColumns="repeat(5,1fr)" gap={4}>
            <Box>
                <Image src="https://www.reliancedigital.in/medias/iphone-pro-11-01.png?context=bWFzdGVyfGltYWdlc3wyOTc3NnxpbWFnZS9wbmd8aW1hZ2VzL2gxNi9oNWUvOTI3NjA1OTkxMDE3NC5wbmd8MzdkYzljODgzMDcyM2ZjMjJmZDI2ZjMwNjhkZmU5YjFmOTJmMGRmOTFiYzc4ZjcyMDRhMjQ5MWMyNjYwOTgxYg"/>
                <h2 style={{textAlign:"justify"}}>Smartphones</h2>
            </Box>
            <Box>
                <Image src="https://www.reliancedigital.in/medias/Washing-Machine-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wzNDU4MXxpbWFnZS9wbmd8aW1hZ2VzL2gzOC9oM2UvOTI1MTA1MDg4MTA1NC5wbmd8ZDAyZGNkMzU1MzE3N2E2OGFlOTliMzUyODZkYzlkNTc0NzFmODllY2JiZDVlNzdhYjg3MTgyMTc4ZGVhODA3ZA"/>
                <h2 style={{textAlign:"justify"}}>Washing Machine</h2>
            </Box>
            <Box>
                <Image src="https://www.reliancedigital.in/medias/Laptop-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wyOTAwOXxpbWFnZS9wbmd8aW1hZ2VzL2g0Mi9oNTYvOTI1MTA1MDYxODkxMC5wbmd8N2ZjYTg0ZDAyOTZmMmQ5OTZhZDNiM2M4NDg0ZDgxY2UyNzNjMmJiYzMwZTZiOGQwOWE5N2JlZDI4M2ViMGZjNw"/>
                <h2 style={{textAlign:"justify"}}>Laptops</h2>
            </Box>
            <Box>
                <Image src="https://www.reliancedigital.in/medias/TV-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3w0OTM4M3xpbWFnZS9wbmd8aW1hZ2VzL2g1ZC9oMTEvOTI1MTA1MDU1MzM3NC5wbmd8MThiNmU4NTZiNWI5MTE1ZGVjYjA4ZjIwM2QwZjUyMzFlOGExZTY0YmQ0MTRkYTkyN2M2MDZiYzUzZDY1ZjM4Ng"/>
                <h2 style={{textAlign:"justify"}}>Televisions</h2>
            </Box>
            <Box>
                <Image src="https://www.reliancedigital.in/medias/Watch-180x180-27-02-2020.png?context=bWFzdGVyfGltYWdlc3w2Njk2fGltYWdlL3BuZ3xpbWFnZXMvaGQ1L2g2My85MjUzNTA3NTk2MzE4LnBuZ3w4NmEwODU5NDI5YzVlMzJjNzRlNzNlYmJkMmJmYTZjMTI2OWY0YTUxYWU3YzMzM2E3YTc5YjljZmU4ZGMyNGQ2"/>
                <h2 style={{textAlign:"justify"}}>Smart Wearables</h2>
            </Box>
        </Grid>
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
    </div>
  )
}

export default FirstSlide