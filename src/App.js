import React from "react";
import Header from "./Header";
import Info from "./Info";
import Footer from "./Footer";
import Form from "./Form";
import Slider from "./Slider";
import Data from "./Data";
import Images from "./Images";
import Shopnow from "./Shopnow";

function App() {
  return (
    <>
      <Header />
      <Info />
      <Slider />
      <div className="container col-md">
        {Data.map(Allimg)}
      </div>
  <hr/>

      <Shopnow />
      <Form />
      <Footer />
    </>
  );
}

const Allimg = (val) => {
  return <Images img={val.imgsrc} />;
};
export default App;
