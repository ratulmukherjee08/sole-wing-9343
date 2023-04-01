import logo from './logo.svg';
import './App.css';
import Homepage from "./Component/Homepage"
import Productpage from './Component/Productpage'
import Login from "./Component/Login"
import {Routes,Route} from"react-router-dom"
import { Box } from '@chakra-ui/react';
function App() {
  return (
<Box>
  <Routes>
    <Route path="/" element={<Homepage/>}></Route>
    <Route path="/productpage" element={<Productpage/>}></Route>
    <Route path="/loginpage" element={<Login/>}></Route>
  </Routes>
</Box>
    );
}

export default App;
