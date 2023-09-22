import React, { useState, useEffect } from "react";
import "./App.css";
import Accessories from "./pages/accessories/Accessories";
import Home from "./pages/home/Home";
import Kid from "./pages/kid/Kid";
import Man from "./pages/men/Man";
import Cart from "./pages/cart/Cart";
import Wishlist from "./pages/wishlist/Wishlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStateValue } from "./redux/StateProvider";

function App() {
  // const [temp, setTemp] = useState();

  const [{ apidata }, dispatch] = useStateValue();

  useEffect(() => {
    fetch("http://localhost:3002/products")
      .then((resp) => {
        return resp.json();
      })
      .then((output) => {
        dispatch({
          type: "API_CALLING",
          value: output,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  // useEffect(() => {
  //   dispatch({
  //     type: "API_CALLING",
  //     value: temp,
  //   });
  // }, [temp]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/man/:catagoryId" element={<Man />} />
          <Route path="/kid/:catagoryId" element={<Kid />} />
          <Route path="/accessories/:catagoryId" element={<Accessories />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
