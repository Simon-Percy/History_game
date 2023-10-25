import React, { useEffect, useState } from "react";
import "./App.css";
import Cards from "./Cards";

function App() {
  /*loading screen skeletons*/
  const [loading, setLoading] = useState(true);
  /*info being fetched from API*/
  const [info, setInfo] = useState(null);
  /*tiers for rating*/
  const [tiers, setTiers] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateTiers = {};
    for (const element of info) {
      if (tiers[element.id] != null) {
        const total = Object.values(tiers[element.id]).reduce(
          (acc, currentValue) => acc + currentValue,
          0
        );
        const average = total / Object.keys(tiers[element.id]).length;
        updateTiers[element.id] = average;
        fetch("http://localhost:5172", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(average),
        }).then(() => {
          console.log("done");
        });
        console.dir(tiers);
      }
    }
    setTiers(updateTiers);
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
                element={element}
                key={element.id}
                tiers={tiers[element.id] || {}}
                setTiers={setTiers}
              />
            );
          })}
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
export default App;
