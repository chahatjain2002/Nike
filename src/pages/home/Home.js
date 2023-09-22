import React from "react";
import Header from "../../components/header/Header";
import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import { useStateValue } from "../../redux/StateProvider";

function Home() {
  const [{ apidata }, dispatch] = useStateValue();
  return (
    <div>
      <Header />
      <Body data={apidata} />
      <Footer />
    </div>
  );
}

export default Home;
