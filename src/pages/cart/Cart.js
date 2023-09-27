import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import CartWishlistBody from "../../components/cartWishlistBody/CartWishlistBody";
import Footer from "../../components/footer/Footer";
import { useStateValue } from "../../redux/StateProvider";

function Cart() {
  const [{ apidata, cartList }, dispatch] = useStateValue();

  // useEffect(() => {
  //   let temp = [];

  //   for (let i = 0; i < cartList && cartList.length; i++) {
  //     for (let j = 0; j < apidata && apidata.length; j++) {
  //       if (cartList[i] == apidata[i]["itemID"]) {
  //         // temp.push(apidata[i]);
  //         console.log(apidata[i]);
  //       }
  //     }
  //   }
  //   // console.log("temp", temp);
  // }, [apidata]);

  const [arr, setArr] = useState([]);

  useEffect(() => {
    let temp = [];
    cartList &&
      cartList.map((item) => {
        return (
          apidata &&
          apidata.map((elem) => {
            if (elem?.itemID == item) {
              temp.push(elem);
            }
          })
        );
      });

    setArr(temp);
  }, [cartList, apidata]);

  return (
    <div>
      <Header />
      <CartWishlistBody data={arr && arr} />
      <Footer />
    </div>
  );
}

export default Cart;
