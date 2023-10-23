import React, { useState } from "react";
import "./App.css";
import Cards from "./Cards";

function App() {
  const boxs = [1, 2, 3, 4, 5];
  const [cardcount, SetCardsCount] = useState(1);
  return boxs.map((box) => (
    <div className="box-wrapper">
      <Cards title={box} key={box} />
    </div>
  ));
}

export default App;
