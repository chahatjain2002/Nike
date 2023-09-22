import React, { useEffect, useState } from "react";
import "./Cards.css";

function Cards(props) {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3002/products")
  //     .then((resp) => {
  //       return resp.json();
  //     })
  //     .then((output) => {
  //       setData(output);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // }, []);

  // console.log(props.imgData?.img);

  return (
    <div className="CardMain">
      <div className="CardMainImage">
        <img
          src={require(`../../assets/images/men/${props.imgData?.img}`)}
          alt="NoImage"
        />
      </div>
      <div className="CardMainBtn">
        <div className="CardBtnCss">Cart</div>
        <div className="CardBtnCss">Wishlist</div>
      </div>
    </div>
  );
}

export default Cards;
