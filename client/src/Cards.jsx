import React from "react";

const Cards = ({ name, imageUrl, title }) => {
  return (
    <div className="cards-box">
      <h1>{name}</h1>
      <img className="image" src={imageUrl} />
      <p className="title">{title}</p>
      <form name="tierform">
        <input
          type="radio"
          className="tier-buttons"
          name="tiers"
          value="tier7"
        />
        <label>Tier 1</label>
        <input
          type="radio"
          className="tier-buttons"
          name="tiers"
          value="tier1"
        />
        <label>Tier 2</label>
        <input
          type="radio"
          className="tier-buttons"
          name="tiers"
          value="tier2"
        />
        <label>Tier 3</label>
        <input
          type="radio"
          className="tier-buttons"
          name="tiers"
          value="tier3"
        />
        <label>Tier 4</label>
        <input
          type="radio"
          className="tier-buttons"
          name="tiers"
          value="tier4"
        />
        <label>Tier 5</label>
        <input
          type="radio"
          className="tier-buttons"
          name="tiers"
          value="tier5"
        />
        <label>Tier 6</label>
        <input
          type="radio"
          className="tier-buttons"
          name="tiers"
          value="tier6"
        />
        <label>Tier 7</label>
      </form>
    </div>
  );
};

export default Cards;
