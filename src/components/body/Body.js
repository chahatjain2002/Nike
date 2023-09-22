import React, { useState, useEffect } from "react";
import "./Body.css";
import Cards from "../cards/Cards";

function Body() {
  // let temp = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [temp, setTemp] = useState();

  useEffect(() => {
    fetch("http://localhost:3002/products")
      .then((resp) => {
        return resp.json();
      })
      .then((output) => {
        setTemp(output);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  // console.log(data?.[0]?.["img"]);

  return (
    <div className="BodyMain">
      {temp &&
        temp.map((ele, index) => {
          return <Cards imgData={ele} />;
        })}
    </div>
  );
}

export default Body;
