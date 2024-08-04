import { ShoppingBag, Menu, Plus } from "lucide-react";
import logo from "/logo/logo.png";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Hook/ShopContext";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenShop, setIsOpenShop] = useState(false);

  const handleMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  const handleShop = () => {
    setIsOpenShop((prev) => !prev);
  };

  const Increment = () => setQuantity(quantity + 1);
  const Decrement = () =>
    setQuantity(quantity > 1 ? quantity - 1 : quantity - 0);

  const { quantity, setQuantity, itemsToBuy, handleDelete } =
    useContext(ShopContext);

  return (
    <nav className="fixed top-0 h-20 w-full flex items-center z-50 bg-white">
      <div className="relative w-full h-full flex justify-start items-center mx-mobile lg:mx-desktop">
        <img src={logo} alt="Logo de ADJ Paris" className="h-12" />
      </div>

      {/** SHOP */}
      <div className="w-full h-full flex justify-end gap-5 items-center mx-mobile lg:mx-desktop">
        <ShoppingBag onClick={handleShop} />
        <div
          className={`${isOpenShop ? "flex" : "hidden"}
        absolute top-16 right-20 flex bg-50 border rounded w-64 h-auto min-h-96 max-h-96 overflow-scroll
        `}
        >
          <div className="flex flex-col gap-5">
          {itemsToBuy.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex">
                <div className="w-32">
                  <img
                    src={`/collections/${item.imagePreview}.jpg`}
                    alt={item.name}
                  />
                </div>
                <div className="flex flex-col">
                  <p>{item.name}</p>
                  <p>€{item.price}</p>
                  <p>{item.color}</p>
                  <p>{item.size}</p>
                  <div className="flex justify-between items-center px-3.5 py-3 border border-700 rounded">
                    <button onClick={Decrement}>-</button>
                    <span>{quantity}</span>
                    <button onClick={Increment}>+</button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center px-3.5 py-3 border border-700 rounded">
                <button onClick={() => handleDelete(index)}>Supprimer</button>
              </div>
            </div>
          ))}
        </div>
        </div>

        {/** MENU */}
        <Menu className={isOpenMenu ? "hidden" : "flex"} onClick={handleMenu} />
        <Plus
          className={`${isOpenMenu ? "flex" : "hidden"} rotate-45`}
          onClick={handleMenu}
        />
        {isOpenMenu && (
          <div className="absolute flex-col w-full h-screen top-20 right-1 bg-white  p-4">
            <div className="absolute right-6 flex flex-col justify-end w-fit">
              <Link to="/">Accueil</Link>
              <hr />
              <Link to="/Collection">Collections</Link>
              <hr />
              <div className="flex flex-col pl-8">
                <Link to="/Collection">01. Tshirts</Link>
                <hr />
                <Link to="/Collection">02. Pull</Link>
                <hr />
                <Link to="/Collection">03. Jackets</Link>
                <hr />
                <Link to="/Collection">04. Sweats</Link>
                <hr />
                <Link to="/Collection">05. Pants</Link>
                <hr />
                <Link to="/Collection">06. Cardigans</Link>
              </div>
              <hr />
              <Link to="">Panier</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
