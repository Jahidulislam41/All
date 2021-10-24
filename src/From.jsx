import React, { useState } from "react";


const From = () => {

  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
  });

  const inputEvent = (event) => {
    const { value, name } = event.target;

    setFullName((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
   
    });
  };

  const onSubmits = (event) => {
    event.preventDefault();
    alert("form Submitted Vai");
  };

  return (
    <>
      <div className="BH">
        <form onSubmit={onSubmits}>
          <div>
                     <h1> Hello !! </h1>
                     <p className="po">{" "}
                      {fullName.fname} {fullName.lname} <br />
                      {fullName.email} <br /> {fullName.phone}<br /> 
                      {fullName.address}{" "}</p>

                    <input
                    type="text"  placeholder="Enter Your Name"  name="fname"  onChange={inputEvent} value={fullName.fname}/>{" "}
                    <br />

                    <input 
                    type="text"  placeholder="Enter Your Last Name" name="lname"  onChange={inputEvent}  value={fullName.lname}/>{" "}
                    <br />

                    <input
                    type="email"  placeholder="Enter Your Email" name="email" onChange={inputEvent} value={fullName.email} />{" "}
                    <br />

                    <input
                    type="number" placeholder="Enter Your Phone Number"  name="phone" onChange={inputEvent} value={fullName.phone}/>{" "}
                    <br />

                    <input
                    type="text" placeholder="Enter Your Address"  name="address" onChange={inputEvent} value={fullName.address} />

            <button type="submit">Submit This</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default From;
