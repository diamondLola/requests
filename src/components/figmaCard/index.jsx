import React from 'react';
import './style.css';

function FigmaCard({ image, title, description, titleSize: TitleTag, descSize: DescTag }) {
  const boxStyle = {
    backgroundImage: `url(${image})`
  };

  return (
    <div>
      <div className="box2" style={boxStyle}>
        <TitleTag>{title}</TitleTag>
        <DescTag>{description}</DescTag>
      </div>
    </div>
  );
}

export default FigmaCard;
