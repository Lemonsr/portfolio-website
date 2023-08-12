import React from 'react';

// Access to all classes / defs inside Card.css
import "./Card.scss";


function Card({ imageData }) {
  return (
    <div className="card">
        {/* From public by default */}
        <img src={imageData.imageLink}/>
    </div>
  )
}

export default Card;
