import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";

import { useStateValue } from "../../redux/StateProvider";
import { useParams } from "react-router-dom";

function Kid() {
  const catId = useParams();

  const [data, setData] = useState();

  const [{ apidata }, dispatch] = useStateValue();

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

  return (
    <div>
      <Header />
      <Body data={data} />
      <Footer />
    </div>
  );
}

export default Kid;
