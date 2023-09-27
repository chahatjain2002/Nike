import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import { useStateValue } from "../../redux/StateProvider";

function Home() {
  const [{ apidata, searched_txt, cartList }, dispatch] = useStateValue();

  const [tempArray, setTempArray] = useState([]);

  // console.log("cartList", cartList[0]);

  useEffect(() => {
    let data = [];

    apidata &&
      apidata.map((ele) => {
        if (
          ele?.description.toLowerCase().includes(searched_txt.toLowerCase())
        ) {
          data.push(ele);
        }
      });

    setTempArray(data);
  }, [searched_txt]);

  return (
    <div>
      <Header />
      <Body data={tempArray.length > 0 ? tempArray : apidata} />
      <Footer />
    </div>
  );
}

export default Home;
