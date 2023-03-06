import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../Authecity/Login';

function App() {
  return (
    <BrowserRouter>
    <Login/>


<Routes>
<Route path = "/Login" element={<Login />} />





</Routes>
    </BrowserRouter>
   
  );
}

export default App;
