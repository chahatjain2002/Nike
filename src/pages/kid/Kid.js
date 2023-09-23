import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";

import { useStateValue } from "../../redux/StateProvider";
import { useParams } from "react-router-dom";

function Kid() {
  const catId = useParams();
  const [{ apidata, searched_txt }, dispatch] = useStateValue();

  const [data, setData] = useState();
  const [tempArray, setTempArray] = useState([]);

  // this useEffect filters kids data
  useEffect(() => {
    console.log(apidata);

    const a =
      apidata &&
      apidata.filter((ele) => {
        console.log(ele.categoryId);
        return ele?.categoryId == catId?.catagoryId;
      });

    setData(a);
  }, [apidata]);

  // filtering the search text
  useEffect(() => {
    let temp = [];

    data &&
      data.map((ele) => {
        if (
          ele?.description.toLowerCase().includes(searched_txt.toLowerCase())
        ) {
          temp.push(ele);
        }
      });

    setTempArray(temp);
  }, [searched_txt]);

  return (
    <div>
      <Header />
      <Body data={tempArray.length > 0 ? tempArray : data} />
      <Footer />
    </div>
  );
}

export default Kid;
