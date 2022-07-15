import React from 'react'
import { BrowserRouter,  Route,  Routes } from 'react-router-dom';

import Home from "./pages/home/home"
import Login from './pages/Login/login'; 
import Form from './pages/Form/form';
function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/cadastro" element={<Form/>}/>
       </Routes>    
    </BrowserRouter>
   
   </>
   
  );
}

export default App;
