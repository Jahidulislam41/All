import React from "react";


function Para() {
  let curDate = new Date();
  curDate = curDate.getHours();

  let mg = "";
  const style = {};

  if (curDate >= 1 && curDate < 12) {
    mg = "Good Mornig";
    style.color = "green";
  } else if (curDate >= 12 && curDate < 19) {
    mg = "Good Afternoon";
    style.color = "Orange";
  } else {
    mg = "Good Night";
    style.color = "Black";
  }

  return (
    <>
      <div className="d">
        <h2>
          Hello Sir , <span style={style}> {mg} </span>
        </h2>

      </div>
    </>
  );
}

export default Para;
