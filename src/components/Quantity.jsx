import { useContext } from "react";
import { ShopContext } from "../Hook/ShopContext";

export default function Quantity() {
  const { quantity, setQuantity } = useContext(ShopContext);

  const Increment = () => setQuantity(quantity + 1);
  const Decrement = () => setQuantity(quantity > 1 ? quantity -1 : quantity-0);

  return (
    <div className="flex justify-between items-center px-3.5 py-3 border border-700 rounded">
      <button onClick={Decrement}>-</button>
      <span>{quantity}</span>
      <button onClick={Increment}>+</button>
    </div>
  );
}
