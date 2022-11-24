import { useRef } from "react";
import { useState } from "react";

export default function Counter() {
  const [countNo, setCount] = useState(0);
  const countValue = useRef();
  const decrement = () => {
    countNo ? setCount(countNo - 1) : setCount(0);
  };
  const increment = () => {
    setCount((preCount) => preCount + 1); //update settter func using callback function or  setCount(countNo + 1); both are same
  };
  return (
    <div className="counter">
      <button className="counter__minus" onClick={decrement}>
        -
      </button>
      <div className="counter__count">
        <h2 className="m-0" ref={countValue}>
          {countNo}
        </h2>
      </div>
      <button className="counter__plus" onClick={increment}>
        +
      </button>
    </div>
  );
}
