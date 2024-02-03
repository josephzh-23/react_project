import logo from './logo.svg';
import './App.css';
import React from 'react';
import Box from './Box.js'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './NavBar.js';
import SubmitForm from './Form.js';
import List from './List.js';
function App() {


// Has to be wrapped in a BrowserRouter as said 
  return (
    // Use react router here which is important here 
  

  <> 
  <Navbar/>
      <Routes>

          <Route path = "/box" element={<Box />} />
          <Route path = "/home" element={<Box />}/>
          <Route path = "/form" element={<SubmitForm />} />
          <Route path = "/list" element={<List />} 
          />
      </Routes>
    </> 
  );
}

export default App;
