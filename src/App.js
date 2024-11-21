// import React, { useState } from 'react'
// import Header from './Header';
// import Home from './Home';
// import Footer from './Footer';
// import Calculater from "./Calculater";
import Footer from "./Footer"
import Header from "./Header"
import Home from "./Home"
import Navbar from "./Navbar"
import { BrowserRouter,Route,Routes } from "react-router-dom"




function App() {

  return (
    <div>
      <BrowserRouter>
      <Home />
      <Routes>
        {/* <Route path="/" exact Component={Home} /> */}
        <Route path="navbar" exact Component={Navbar} />
        <Route path="footer" exact Component={Footer} />
        <Route path="header" exact Component={Header} />
      </Routes>
      </BrowserRouter>
     
      {/* <Home /> */}
    </div>
  )
}

export default App


// 1800-2222-44 or 1800-208-2244  customercare@unionbankofindia.bank.
