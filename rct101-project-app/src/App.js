import logo from './logo.svg';
import './App.css';
import Homepage from "./Component/Homepage"
import Productpage from './ProductPage/Productpage'

import {Routes,Route} from"react-router-dom"
import { Box } from '@chakra-ui/react';

import Loginpage from './Component/Loginpage';
import Cartpage from './ProductPage/Cartpage';
function App() {
  return (
<Box>
  <Routes>
    <Route path="/" element={<Homepage/>}></Route>
    <Route path="/productpage" element={<Productpage/>}></Route>
    <Route path="/loginpage" element={<Loginpage/>}></Route>
    <Route path="/cartpage" element={<Cartpage/>}></Route>
  </Routes>
</Box>
    );
}

export default App;
