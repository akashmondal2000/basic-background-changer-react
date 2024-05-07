import { useState } from "react";
import "./App.css";

const App = () => {
  const [color, setColor] = useState("white");

  const chooseColor = (color) =>{
    if(color === "red" ){
      setColor("red")
    }else if(color === "blue"){
      setColor("blue");
    }else if (color === "green"){
      setColor("green")
    }else if( color === "black"){
      setColor("black")
    }else{
      setColor("white")
    }
  }


  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="colorBar">
        <div className="barWrapper">
          <button onClick={()=>{chooseColor("red")}} className="colorBtn" style={{ backgroundColor: "red" }}>
            red
          </button>

          <button onClick={()=>{chooseColor("blue")}} className="colorBtn" style={{ backgroundColor: "blue" }}>
            blue
          </button>

          <button onClick={()=>{chooseColor("green")}} className="colorBtn" style={{ backgroundColor: "green" }}>
            green
          </button>

          <button onClick={()=>{chooseColor("black")}} className="colorBtn" style={{ backgroundColor: "black" }}>
            black
          </button>
          <button onClick={()=>{chooseColor("white")}} className="colorBtn" style={{ backgroundColor: "white", color: "black" }}>
            white
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
