import "./App.css";
import React, { useState } from "react";
import ColorForm from "./assets/components/ColorForm";
import Display from "./assets/components/Display";
import NinjaForm from "./assets/components/NinjaForm";
import NinjaDisplay from "./assets/components/NinjaDisplay";

function App() {
  const [boxColorArray, setBoxColorArray] = useState([]);
  const [ninjaBoxArray, setNinjaBoxArray] = useState([]);

  return (
    <div className="App">
      <h1>Box Generator Assignment</h1>
      <ColorForm
        boxColorArray={boxColorArray}
        setBoxColorArray={setBoxColorArray}
      />
      <Display boxColorArray={boxColorArray} />

      <h1>Ninja Box Assignment</h1>
      <NinjaForm
        ninjaBoxArray={ninjaBoxArray}
        setNinjaBoxArray={setNinjaBoxArray}
      />
      <NinjaDisplay ninjaBoxArray={ninjaBoxArray} />
    </div>
  );
}

export default App;
