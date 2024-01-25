import { useState } from "react";
import "./styles.css";

function App() {
  const [size, setSize] = useState("12");
  const [start, setStart] = useState(false);
  function handleStart() {
    setStart(true);
  }
  return (
    <div className="app">
      <h1>Card Match</h1>
      {start ? <Timer /> : null}
      <SelectBoard size={size} onSelect={setSize} onStart={handleStart} />
      <Board size={size} />
    </div>
  );
}
function SelectBoard({ size, onSelect, onStart }) {
  return (
    <div className="inputs">
      <label>Board Size:</label>
      <select value={size} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="12">4x3</option>
        <option value="16">4x4</option>
        <option value="20">4x5</option>
      </select>
      <button onClick={onStart}>Start</button>
    </div>
  );
}
function Timer() {
  return <div className="inputs">00:00</div>;
}
function Board({ size }) {
  let nums = Array.from({ length: size }, (_, i) => i + 1);
  return (
    <div className="board">
      {nums.map((num) => (
        <Card key={num}></Card>
      ))}
    </div>
  );
}
function Card() {
  return <div className="cards"></div>;
}

export default App;
