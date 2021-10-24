import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Card from "./Card";
import Sdata from "./Sdata";
import Para from "./Para";
import Button from "./Button";
import TTime from "./TTime";
import "./index.css";
import Jak from "./Jak";
import From from "./From";
import Todo from "./Todo";
import TimeJoy from "./TimeJoy";

function ncard(val) {
  return (
    <Card
      key={val.id}
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
}

ReactDOM.render(
  <>
    <TimeJoy/>
   <Todo/>
 
    <App />
    <Para />
   
    <TTime />
    <Button />
    <Jak/>
    <From/>
    <div>
    <h1 className="heading_style">Top 5 Salman Khan Movie in History</h1>
    {Sdata.map(ncard)}
    </div>
  
  </>,

  document.getElementById("root")
);


