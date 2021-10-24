import React, { useState } from "react";

const Button = () => {
  const state = useState();
  const [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
  };

  const decNum = () => {
      if(count > 0){
        setCount(count - 1);
      }else{
          alert("Sorry , Vai Zero cy ar koto niche jaben");
        setCount(0);
      }
   
  };

  return (
    <>
      <div className="BtH">
        <h1>Counting Button </h1>
        <h1> {count}</h1>
        <div className="but">
          <button onClick={IncNum}>Increm 😇</button>
          <button onClick={decNum}>Decrem 🧲</button>
        </div>
      </div>
    </>
  );
};

export default Button;
