import React, { useState } from "react";

const Cards = ({ element, tiers, setTiers }) => {
  //keep track of the radio button clicked
  const handleChange = (e) => {
    const updatedTiers = { ...tiers, [e.target.id]: parseInt(e.target.value) };
    setTiers((prevTiers) => ({ ...prevTiers, [element.id]: updatedTiers }));
  };
  return (
    <div className="cards-box">
      <h1>{element.name}</h1>
      <img
        className="image"
        src={element.image_url}
        alt={element.image_alt ? element.image_alt : element.name}
      />
      <a className="title" href={element.page_url} target="_blank">
        {element.title}
      </a>
      <p>{element.title_time}</p>
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
