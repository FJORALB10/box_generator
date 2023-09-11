import React, { useState } from "react";

const ColorForm = (props) => {
  const { boxColorArray, setBoxColorArray } = props;

  const [color, setColor] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    setBoxColorArray([...boxColorArray, color]);
    setColor("");
  };

  return (
    <div>
      <form onSubmit={submitHandler} style={{ margin: "20px" }}>
        <div>
          <label className="property" htmlFor="color">
            Color
          </label>
          <input
            type="text"
            name={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="btn">Add</button>
        </div>
      </form>
    </div>
  );
};

export default ColorForm;
