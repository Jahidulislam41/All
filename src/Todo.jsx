import React, { useState } from "react";
import ToList from "./ToList";


const Todo = () => {
  const [inputList, setInputList] = useState();
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };


  const deleteItems = (id) =>{

    setItems((oldItems) => {
        return oldItems.filter((arrElem, index) =>{
         return index !== id;
        })  })

};
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1 className="hei">ToDo List  😄</h1>
          <br />
          <input
            className="input1"
            type="text"
            placeholder="Add a Items"
            value={inputList}
            onChange={itemEvent}
          />
          <button className="button2" onClick={listOfItems}>
            {" "}
            +{" "}
          </button>




          <ol>
            {Items.map((itemval, index) => {
              return <ToList 
              key={index} 
              id={index}
               text={itemval} 
               onSelect={deleteItems}
               
               />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default Todo;
