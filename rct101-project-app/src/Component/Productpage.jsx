import React from 'react'

import { useEffect ,useState} from 'react'
import { product } from '../Get Data/Axios'
import { Box ,Grid,Image} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Productpage = () => {
  const [data,setdata]=useState([])
  const UpdateProductpages= async() => {

    try {
      await product()
      .then((res)=>setdata(res.data))
    } catch (error) {
      console.log(error)
    }
      
  }
  useEffect(()=>{
    UpdateProductpages()
  },[])
  console.log(data)
  return (
    <Box>
      <Grid templateColumns='repeat(6,1fr)'gap={2}>
      {data.map((el)=>
      <Link to="/productpage"> <Box>
       <Image src={el.image}/>

    </Box></Link>
      )}
     </Grid>
    </Box>
  )
}

export default Productpage

