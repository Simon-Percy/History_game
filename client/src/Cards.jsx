import React from "react";

const Cards = ({ name, imageUrl, title }) => {
  return (
    <div className="cards-box">
      <h1>{name}</h1>
      <img className="image" src={imageUrl} />
      <p className="title">{title}</p>
    </div>
  );
};

export default Cards;
