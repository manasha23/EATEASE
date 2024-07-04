import React from 'react'
import "./App.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Home from './Pages/Home';
import Success from './Pages/Success';
import NotFound from './Pages/NotFound';
import './App.css'
const App = () =>{
  return (
 <>
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/success" element={<Success/>}/>
      {/* This attribute specifies the path pattern that the route should match. In this case, "*" means any path. */}
      <Route path="*" element={<NotFound/>}/> 
    </Routes>
  </Router>
  <Toaster/>
  </>
  )
};

export default App;
