import React from 'react';
import './PictureCards.css';

const PictureCards = props => (
  <div
    className="card"
    value={props.id}
    onClick={() => props.handleClick(props.id)}
  >
    <div className="imageContainer">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default PictureCards;
