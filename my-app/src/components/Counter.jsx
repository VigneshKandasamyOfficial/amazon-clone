import { useContext, useState } from "react";
import "../App.css";
import { ThemeContext } from "../contexts/theme";
import {
  increment,
  decrement,
  incrementByValue,
  decrementByValue,
} from "../reducers/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  // const { count, setCount } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const [val, setVal] = useState("");
  function inc() {
    // if (count == "No Negative Value") setCount(0);
    // setCount((prev) => prev + 0);
    // setCount((prev) => prev + 1);
    // console.log(count);
    if (val === "") dispatch(increment());
    else dispatch(incrementByValue(Number(val)));
  }
  function dec() {
    // if (count >= 0) setCount(count - 1);
    // else setCount("No Negative Value");
    if (val === "") dispatch(decrement());
    else dispatch(decrementByValue(Number(val)));
  }
  const count = useSelector((state) => state.counter.count);

  return (
    <>
      <div>Counter:{count}</div>
      <h1 className="flex">{count}</h1>
      <input
        type="number"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <div className="flex">
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
      </div>
    </>
  );
};

export default Counter;
