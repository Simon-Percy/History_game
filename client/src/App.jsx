import React, { useEffect, useState } from "react";
import "./App.css";
import Cards from "./Cards";
import { TiTick } from "react-icons/ti";
import { BiHelpCircle } from "react-icons/bi";

function App() {
  /*loading screen*/
  const [loading, setLoading] = useState(true);
  /*info being fetched from API*/
  const [info, setInfo] = useState(null);
  /*tiers for rating*/
  const [tiers, setTiers] = useState({});
  //popup at initial render
  let help = document.getElementById("popup");

  //when submitting change update the tier of elements to the new average
  const handleSubmit = (e) => {
    e.preventDefault();

    const updateTiers = {};

    setTiers(tiers);
    console.dir(tiers);
  };
  //shuffle array of objects data
  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  useEffect(() => {
    async function fetchfigures() {
      try {
        const response = await fetch("http://localhost:5172/");
        if (!response.ok) {
          return `Error : Status : ${response.status}`;
        }
        const data = await response.json();

        shuffle(data);
        setInfo(data);
      } catch (error) {
        console.error(`Error ${error}`);
      }
    }
    fetchfigures();

    setLoading(false);
  }, []);

  setTimeout(() => {
    help.style.display = "none";
  }, 15000);
  //toggle popup explaing how tiers work
  function popup() {
    if (help.style.display == "none") {
      help.style.display = "block";
    } else {
      help.style.display = "none";
    }
  }
  return (
    <div className="container">
      <header className="heading">
        <BiHelpCircle className="help" size="35" onClick={popup} />
        <h2> WHO WAS THE </h2>
        <h1>WORST OR BEST?</h1>
      </header>
      <div className="popup" id="popup">
        <h2>How Tiers work.</h2>
        <hr></hr>
        <p className="popup-p">
          <strong>
            You don't have to answer all of these just as many as you can then
            press submit in the bottom right.
          </strong>
        </p>
        <p className="popup-p">
          <strong>Tier 1:</strong> These figures were undoubtedly some of the
          best to ever exist.
        </p>
        <p className="popup-p">
          <strong>Tier 2:</strong> These figures were also good but have some
          undoubtle skeletons in their closet.
        </p>
        <p className="popup-p">
          <strong>Tier 3:</strong> These figures are still good, but the
          controversy that surrounds them makes it questionable.
        </p>
        <p className="popup-p">
          <strong>Tier 4:</strong> These figures can go either way; it all
          depends on the mood of the day.
        </p>
        <p className="popup-p">
          <strong>Tier 5:</strong> These figures are bad, but some would argue
          against it for multiple reasons.
        </p>
        <p className="popup-p">
          <strong>Tier 6:</strong> These figures are very bad, but with glimpses
          of good somewhere within them.
        </p>
        <p className="popup-p">
          <strong>Tier 7:</strong> These figures are the worst of the worst; the
          question is, what boiler room level are they in.
        </p>
      </div>
      {loading && <p>Loading...</p>}

      <form onSubmit={handleSubmit} className="box-wrapper">
        {/*map through and display each figure */}
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
        <button className="submit-Button" type="submit">
          <TiTick size="30" />
        </button>
      </form>
    </div>
  );
}
export default App;
