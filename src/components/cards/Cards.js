import React, { useEffect, useState } from "react";
import "./Cards.css";
import { useStateValue } from "../../redux/StateProvider";

function Cards(props) {
  const [, dispatch] = useStateValue();

  return (
    <div className="CardMain">
      <div className="CardMainImage">
        {props?.data?.categoryId == 1001 ? (
          <img
            src={require(`../../assets/images/men/${props.data?.img}`)}
            alt="NoImage"
          />
        ) : props?.data?.categoryId == 1002 ? (
          <img
            src={require(`../../assets/images/kids/${props.data?.img}`)}
            alt="NoImage"
          />
        ) : (
          <img
            src={require(`../../assets/images/home&living/${props.data?.img}`)}
            alt="NoImage"
          />
        )}
      </div>
      <div className="CardMainDesc">
        <span>{`${props?.data?.description}`.slice(0, 30)}</span>
      </div>
      <div className="CardMainBtn">
        <div
          className="CardBtnCss"
          onClick={() => {
            dispatch({
              type: "CART",
              value: props?.data?.itemID,
            });
          }}
        >
          Cart
        </div>
        <div
          className="CardBtnCss"
          onClick={() => {
            dispatch({
              type: "WISH",
              value: props?.data?.itemID,
            });
          }}
        >
          Wishlist
        </div>
      </div>
    </div>
  );
}

export default Cards;
