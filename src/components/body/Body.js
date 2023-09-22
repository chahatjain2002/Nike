import React, { useState, useEffect } from "react";
import "./Body.css";
import Cards from "../cards/Cards";
// import { useStateValue } from "../../redux/StateProvider";

function Body(props) {
  // const [{ apidata }, dispatch] = useStateValue();

  return (
    <div className="BodyMain">
      {props.data &&
        props.data.map((ele, index) => {
          return <Cards data={ele} />;
        })}
    </div>
  );
}

export default Body;
