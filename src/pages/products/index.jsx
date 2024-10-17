import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function ProductsPage() {
  let [data, setData] = useState([]);
  const delProduct = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  console.log(data);
  return (
    <div>
      <div className="box">
        {data.map((info) => (
          <div className="card" key={info.id}>
            <h2>{info?.title}</h2>
            <p> {info?.body} </p>
            <span className="spanBot">
              <Link to={`/products/${info.id}`}> View more</Link>
              <button className="myBtn" onClick={()=>delProduct(info.id)}>Delete</button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
