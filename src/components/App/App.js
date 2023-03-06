
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../Authecity/Login';
import Home from './Home';
import Navbar from './Navbar';
import React from 'react';
import Header from '../../Header';
import Contact from '../../contact';
import Register from '../Authecity/Register';
import AddMeme from "../memes/Addmeme";
import MyMemes from "../memes/Mymeme";
import Search from "../memes/Search";
import AllMemes from "../Allmemes";
export default function App() {
  return (
    <BrowserRouter>
  
    
    <Header/>
    
    
    
  


<Routes>
<Route path = "/Login" element={<Login />} />
<Route path="/" element={<Home/>}/>
<Route path ="/Home" element={<Home/>}/>
<Route path ="/Register" element={<Register/>}/>
<Route path="/Contact" element={<Contact/>}/>
<Route path="/AddMeme"element={<AddMeme/>}/>
<Route path="/Mymemes"element={<MyMemes/>}/>
<Route path ="/Search" element={<Search/>}/>
<Route path ="/AllMemes"element={<AllMemes/>}/>



</Routes>
    </BrowserRouter>
   
  )
}

