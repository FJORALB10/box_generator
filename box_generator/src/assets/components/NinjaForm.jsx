import React, { useState } from "react";

const NinjaForm = (props) => {
  const { ninjaBoxArray, setNinjaBoxArray } = props;

  const [color, setColor] = useState("");
  const [size, setSize] = useState(50);

  const submitHandler = (event) => {
    event.preventDefault();

    setNinjaBoxArray([
      ...ninjaBoxArray,
      {
        color: color,
        size: size + "px",
      },
    ]);
    setColor("");
    setSize("");
  };

  return (
    <div>
      <form onSubmit={submitHandler} style={{ margin: "20px" }}>
        <div>
          <label className="property">Color</label>
          <input
            type="text"
            name="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <br></br>
        <div>
          <label className="property">Width and Height in Pixels</label>
          <input
            type="text"
            name="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
          <button className="btn">Add</button>
        </div>
      </form>
    </div>
  );
};

export default NinjaForm;
