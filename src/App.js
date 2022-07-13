import React from 'react'
import { BrowserRouter,  Route, Link, Routes } from 'react-router-dom';

import Home from "./pages/home/home"
import Login from './pages/Login/login'; 

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Login" element={<Login/>}/>
       </Routes>    
    </BrowserRouter>
   
   </>
   
  );
}

export default App;
