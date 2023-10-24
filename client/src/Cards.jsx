import React, { useState } from "react";

const Cards = ({ name, imageUrl, title, handleChange, handleSubmit }) => {
  return (
    <div className="cards-box">
      <h1>{name}</h1>
      <img className="image" src={imageUrl} />
      <p className="title">{title}</p>
      <form>
        <input
          onChange={handleChange}
          type="radio"
          id="tier1"
          className="tier-buttons"
          name="tiers"
          value="1"
        />
        <label>Tier 1</label>
        <input
          onChange={handleChange}
          type="radio"
          id="tier2"
          className="tier-buttons"
          name="tiers"
          value="2"
        />
        <label>Tier 2</label>
        <input
          onChange={handleChange}
          type="radio"
          id="tier3"
          className="tier-buttons"
          name="tiers"
          value="3"
        />
        <label>Tier 3</label>
        <input
          onChange={handleChange}
          type="radio"
          id="tier4"
          className="tier-buttons"
          name="tiers"
          value="4"
        />
        <label>Tier 4</label>
        <input
          onChange={handleChange}
          type="radio"
          id="tier5"
          className="tier-buttons"
          name="tiers"
          value="5"
        />
        <label>Tier 5</label>
        <input
          onChange={handleChange}
          type="radio"
          id="tier6"
          className="tier-buttons"
          name="tiers"
          value="6"
        />
        <label>Tier 6</label>
        <input
          onChange={handleChange}
          type="radio"
          id="6"
          className="tier-buttons"
          name="tiers"
          value="7"
        />
        <label>Tier 7</label>
      </form>
    </div>
  );
};

export default Cards;
