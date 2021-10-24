import React, { useState } from "react";

const Jak = () => {
  const purple = "#8e44ad";
  const green = "#8e44";
  const ty = "#8e5";
  const y = "#F9C70C";
  const newBg = "#34495e";


  const [bg, setBg] = useState(purple);
  const [go, setGo] = useState();
  const [name, setName] = useState("Click Me");

  const bgChange = () => {
    setBg(newBg);
    setName("Ouch!!  😏 ");
    setGo(ty);
  };

  const bgBack = () => {
    setBg(green);
    setName("Ayyeee!! 😭 ");
    setGo(y);
  };

  return (
    <>

      <div className="ni" style={{ backgroundColor: bg }}>

        <button className="ne" style={{ backgroundColor: go }}  onClick={bgChange} onDoubleClick={bgBack} >
          {name}
        </button>

      </div>
      
    </>
  );
};
export default Jak;
