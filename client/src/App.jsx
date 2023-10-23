import React, { useEffect, useState } from "react";
import "./App.css";
import Cards from "./Cards";

function App() {
  const [loading, SetLoading] = useState(true);
  const [info, SetInfo] = useState(null);

  useEffect(() => {
    async function fetchfigures() {
      try {
        const response = await fetch("http://localhost:5172/");
        if (!response.ok) {
          return `Error : Status : ${response.status}`;
        }
        const data = await response.json();
        SetInfo(data);
      } catch (error) {
        console.error(`Error ${error}`);
      }
    }
    fetchfigures();
    SetLoading(false);
  }, []);
  const boxs = [1, 2, 3, 4, 5];
  const [cardcount, SetCardsCount] = useState(1);
  console.dir(info);

  return (
    <div className="box-wrapper">
      {loading && <p>Loading...</p>}
      {info &&
        info.map((element) => {
          return (
            <Cards
              name={element.name}
              title={element.title}
              imageUrl={element.image_url}
              key={element.id}
            />
          );
        })}
    </div>
  );
}
export default App;
