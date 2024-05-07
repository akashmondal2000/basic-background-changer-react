import { useState } from "react";
import "./App.css";

const App = () => {
  const [color, setColor] = useState("white");

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="colorBar">
        <div className="barWrapper">
          <button
            onClick={() => {
              setColor("red");
            }}
            className="colorBtn"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>

          <button
            onClick={() => {
              setColor("blue");
            }}
            className="colorBtn"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>

          <button
            onClick={() => {
              setColor("green");
            }}
            className="colorBtn"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>

          <button
            onClick={() => {
              setColor("black");
            }}
            className="colorBtn"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>
          <button
            onClick={() => {
              setColor("white");
            }}
            className="colorBtn"
            style={{ backgroundColor: "white", color: "black" }}
          >
            white
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
