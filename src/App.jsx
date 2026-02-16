import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { add, subtract, multiply, division } from "./features/calc/calcSlice";

function App() {
  const result = useSelector((state) => state.calc.result);
  const dispatch = useDispatch();

  const [firstNumber, setFirstNumber] = useState("");

  const [secondNumber, setSecondNumber] = useState("");

  return (
    <div className="app">
      <label>First Number</label>
      <input
        value={firstNumber}
        onChange={(e) => {
          setFirstNumber(e.target.value);
        }}
      />
      <label>Second Number</label>
      <input
        value={secondNumber}
        onChange={(e) => {
          setSecondNumber(e.target.value);
        }}
      />
      <button
        className="btn"
        onClick={() =>
          dispatch(
            add({
              firstNumber,
              secondNumber,
            }),
          )
        }
      >
        Add
      </button>
      <button
        className="btn"
        onClick={() => dispatch(subtract({ firstNumber, secondNumber }))}
      >
        Subtract
      </button>
      <button
        className="btn"
        onClick={() => dispatch(multiply({ firstNumber, secondNumber }))}
      >
        Multiply
      </button>
      <button
        className="btn"
        onClick={() => dispatch(division({ firstNumber, secondNumber }))}
      >
        Division
      </button>
      <h2>{result}</h2>
    </div>
  );
}

export default App;
