import React,{useState} from "react";

const TTime=() =>{
let newTime = new Date().toLocaleTimeString();

const [ctime, setCtime] = useState(newTime);

const UpdateTime =()=>{
  let  newCTime = new Date().toLocaleTimeString();
    setCtime(newCTime);
}


setInterval(UpdateTime,1000);


return(
    <>
<div className="BtH">
        <h1>Your Country Time </h1>
            <h1> {ctime}</h1>
            {/* <button className="but"  onClick={UpdateTime}>GET TIME</button> */}
    </div>
    </>

)

}

export default TTime;