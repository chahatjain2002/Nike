import React from "react";
import "./CartWishlistBody.css";

function CartWishlistBody(props) {
  console.log(props.data);
  return (
    <div className="CartWishlistBodyMain">
      {props.data &&
        props.data.map((item) => {
          return (
            <div className="displayItem">
              <div className="displayItemImage"></div>
            </div>
          );
        })}
    </div>
  );
}

export default CartWishlistBody;
