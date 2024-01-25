import { useState } from "react";
import "./styles.css";

function App() {
  const [size, setSize] = useState("12");
  const [start, setStart] = useState(false);
  function handleChange(e) {
    setSize(e);
    setStart(false);
  }
  function handleStart() {
    setStart(!start);
  }
  return (
    <div className="app">
      <h1>Card Match</h1>

      <SelectBoard
        size={size}
        onChange={handleChange}
        onStart={handleStart}
        start={start}
      />
      <Board size={size} />
      {start ? <Timer /> : null}
    </div>
  );
}
function SelectBoard({ size, onChange, onStart, start }) {
  return (
    <div className="inputs">
      <label>Board Size:</label>
      <select value={size} onChange={(e) => onChange(Number(e.target.value))}>
        <option value="12">4x3</option>
        <option value="16">4x4</option>
        <option value="20">4x5</option>
      </select>
      <button onClick={onStart}>{start === true ? `Stop` : `Start`}</button>
    </div>
  );
}
function Timer() {
  const start = 
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
