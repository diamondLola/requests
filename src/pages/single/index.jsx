import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function SinglePage() {
  let { id } = useParams();
  let [single, setSingle] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((res) => setSingle(res));
  }, [id]);

  return (
    <div>
      <div className="datas">
      <div className="container">
      <h1>{single?.id} card</h1>
      <h2>{single?.title}</h2>
      <p>{single?.body} card</p>
      </div>
      </div>
      
    </div>
  );
}

export default SinglePage;
