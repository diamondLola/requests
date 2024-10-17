import React from "react";
import "./style.css";
import { useState } from "react";
function CreatePage() {
  let [name, setName] = useState("");
  let [price, setPrice] = useState("");
  let [color, setColor] = useState("");

  const sendData = (e) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "POST",
      body: JSON.stringify({ name, price, color }),
    });
  };

  return (
    <div>
      <div className="container">
      <h1>CreatePage</h1>
      <form className="myForm" onSubmit={(e)=> sendData(e)}>
        <input className="myInput" type="text" placeholder="name" onChange={(e)=> setName(e.target.value)}/>
        <input className="myInput" type="number" placeholder="price" onChange={(e)=> setPrice(e.target.value)}/>
        <input className="myInput" type="text" placeholder="color" onChange={(e)=> setColor(e.target.value)}/>
        <button className="myBtn">Send</button>
      </form>
      </div>
    </div>
  );
}

export default CreatePage;
