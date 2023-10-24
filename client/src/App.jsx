import React, { useEffect, useState } from "react";
import "./App.css";
import Cards from "./Cards";

function App() {
  /*loading screen skeletons*/
  const [loading, setLoading] = useState(true);
  /*info being fetched from API*/
  const [info, setInfo] = useState(null);
  /*tiers for rating*/
  const [tiers, setTiers] = useState({
    tier1: 0,
    tier2: 0,
    tier3: 0,
    tier4: 0,
    tier5: 0,
    tier6: 0,
    tier7: 0,
  });
  /*average tier for each figure*/
  const [avgTier, setAvgTier] = useState(0);

  /*add all the tiers for that figure and find the average*/

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = Object.values(tiers).reduce(
      (acc, currentValue) => acc + currentValue
    );
    const average = total / 7;
    setAvgTier(average);
    console.log(average);
  };

  const handleChange = (e) => {
    setTiers({ ...tiers, [e.target.id]: parseInt(e.target.value) });
  };

  useEffect(() => {
    async function fetchfigures() {
      try {
        const response = await fetch("http://localhost:5172/");
        if (!response.ok) {
          return `Error : Status : ${response.status}`;
        }
        const data = await response.json();
        setInfo(data);
      } catch (error) {
        console.error(`Error ${error}`);
      }
    }
    fetchfigures();
    setLoading(false);
  }, []);

  return (
    <div className="box-wrapper">
      {loading && <p>Loading...</p>}

      <form onSubmit={handleSubmit}>
        {info &&
          info.map((element) => {
            return (
              <Cards
                name={element.name}
                title={element.title}
                imageUrl={element.image_url}
                key={element.id}
                handleChange={handleChange}
              />
            );
          })}
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
export default App;
