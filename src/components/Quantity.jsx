import React from "react";
import { useState } from "react";

export default function Quantity() {
  const [value, setValue] = useState(1);

  const Increment = () => setValue(value + 1);
  const Decrement = () => setValue(value > 0 ? value -1 : value-0);

  return (
    <div className="flex justify-between items-center px-3.5 py-3 border border-700 rounded">
      <button onClick={Decrement}>-</button>
      <span>{value}</span>
      <button onClick={Increment}>+</button>
    </div>
  );
}
