import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/Home";
import Navbar from "./assets/Navbar";
import Footer from "./assets/Footer";
import Contact from "./assets/Contact";
import Signedin from "./assets/Signedin";
import Ssigned from "./assets/Ssigned";
import Header from "./assets/Header";
import Aboutus from "./assets/Aboutus";
import Shop from "./assets/Shop";
import Wishlist from "./assets/Wishlist";
import Cart from "./assets/Cart";
function App  () {
  return (
    <div>
      <Header/>
      <Aboutus/>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signedin' element={<Signedin/>}/>
        <Route path='/signedup' element={<Ssigned/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path="/wishlist" element={<Wishlist />} />
           <Route path="/cart" element={<Cart />} />

      </Routes>
      <Footer />
    </div>
  );
};

export default App;
