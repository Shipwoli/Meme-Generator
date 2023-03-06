import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../Authecity/Login';
import Home from './Home';
import Navbar from './Navbar';

export default function App() {
  return (
    <BrowserRouter>
  
    <Navbar/>


<Routes>
<Route path = "/Login" element={<Login />} />
<Route path="/" element={<Home/>}/>





</Routes>
    </BrowserRouter>
   
  )
}

