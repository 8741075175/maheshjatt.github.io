import React, { useState } from "react";
import "./Contact.css";

export const Contact = () => {
  const [name, setName] = useState("");
  const [NameError, setNameError] = useState(false);
  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState(false);
  const [Email, setEmail] = useState("");
  const [EmailError, setEmailError] = useState(false);
  const [msg, setMsg] = useState("");

  // function isValid(itemName, value) {
  //   let nameRegex;
  //   if (itemName === "name") {
  //     nameRegex = /[A-Za-z]{5,10}$/;
  //   }
  //   return nameRegex.test(value);
  const validname = new RegExp(
    '^[A-Za-z]{5,10}$')

  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')

    const validnumber = new RegExp(
      '^ [0-9]{10}$')

      
  //  }
  
  const oncontact = () => {
    // if (isValid("name", name)) {
    //   setNameError(false);
    // } else {
    //   setNameError(true);
    // }
    if (!validname.test(name)) {
      setNameError(true);
   }
    if (!validnumber.test(number)) {
      setNumberError(true);
   }
    if (!validEmail.test(Email)) {
      setEmailError(true);
   }
    console.log(name, number, Email, msg);
  };
  return (
    <>
      <div className="form-div">
        <form>
          <div className="form-containt">
            <label htmlFor="name"> Name :</label>

            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {NameError && <p className="Error">Enter a valid Name</p>}
            <br />
            <br />
            <label htmlFor="number">Mobile :</label>

            <input
              type="number"
              id="number"
              name="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            {numberError && <p className="Error">Enter a valid number</p>}
            <br />
            <br />
            <label htmlFor="Email">Email :</label>

            <input
              type="email"
              id="Email"
              name="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {EmailError && <p className="Error">Enter a valid Email</p>}
            <br />
            <br />
            <label htmlFor="msg">Msg :</label>
            <br />
            <textarea
              name="msg"
              id="msg"
              cols="30"
              rows="10"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>

            <br />
            <br />
            <button type="button" onClick={oncontact}>
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Contact;
