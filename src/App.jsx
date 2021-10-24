import React from "react";
import SlotM from "./Sloat";




const App =()=>{

  return(
  <>
 
    

   <h1 className="heading_style">
     🎰 Welcome to <span style={{ color:"orange" }}>
        Slot Machine Game</span>🎰{" "}</h1>
  
     

  <div className='slotmachine'>
  <SlotM    x = '😄' y = '😄' z = '😄'/> 
  <SlotM    x = '😏' y = '🤧' z = '😈'/> 
  <SlotM    x = '🤧' y = '😏'  z = '😄'/> 
  <SlotM    x = '😈' y = '😈' z = '😈'/>
  </div>
       
  </>
  );

};

export default App;
