import React from 'react'
import './style.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
function SinglePage() {
  let { id } = useParams();
  

  return (
    <div>
      <h1>{id} card</h1>
      <h1></h1>
      <p></p>
    </div>
  );
}

export default SinglePage
