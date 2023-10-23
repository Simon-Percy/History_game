const Cards = ({ title }) => {
  return (
    <div className="cards-box">
      <h1>{title}</h1>
      <img
        className="image"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Robin_Williams_Happy_Feet_premiere.jpg/220px-Robin_Williams_Happy_Feet_premiere.jpg"
      />
      <p className="title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
        magni vero nostrum autem numquam quasi, atque necessitatibus in quia
        voluptatibus a laborum quaerat alias praesentium, libero quae!
        Perferendis, dolorem ea.
      </p>
    </div>
  );
};

export default Cards;
