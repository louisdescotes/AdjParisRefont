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

  const { quantity, setQuantity, itemsToBuy, handleDelete } = useContext(ShopContext);

  console.log(itemsToBuy)

  const renameColor = (color) => {
    switch (color) {
      case "#151414":
        return "Black";
      case "#FAFAFA":
        return "White";
      case "#FEA480":
        return "Orange";
      case "#C2D8EF":
        return "Azur";
      case "#AEE4DD":
        return "Lime";
      case "#C2A893":
        return "Cream";
      case "#5D5B70":
        return "Grey";
      case "#C5766F":
        return "Rose";
      case "#3F3C2F":
        return "Military";
    }
  };

  return (
    <nav className="fixed top-0 h-20 w-full flex items-center z-50 bg-white">
      <div className="relative w-full h-full flex justify-start items-center mx-mobile lg:mx-desktop">
        <img src={logo} alt="Logo de ADJ Paris" className="h-12" />
      </div>

      {/** SHOP */}
      <div className=" relative w-auto h-full flex justify-end gap-5 items-center mx-mobile lg:mx-desktop  cursor-pointer">
        <ShoppingBag onClick={handleShop} />

        <div
          className={`${
            itemsToBuy.length > 0 ? "flex" : "hidden"
          } absolute left-3 top-4 flex items-center justify-center rounded-full size-5 text-xs text-50 bg-[#F06059]`}
        >
          {itemsToBuy.length}
        </div>
        
        <div
          className={`${isOpenShop ? "flex" : "hidden"}
        absolute rounded-t-xl flex-col top-16 right-0 lg:right-20 flex bg-50 border rounded w-96 h-auto min-h-96 max-h-96 overflow-scroll overflow-x-hidden 
        `}
        >
          <div className="relative ">
          <div className="sticky flex justify-center items-center left-0 top-0 h-10 w-full text-50 bg-950 rounded-t-xl">
          <p>Panier</p>
        </div>
        <div className="flex flex-col py-4 pl-6 gap-8 w-full pr-16 ">
            {itemsToBuy.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <div className="w-40">
                    <img
                      src={`/collections/${item.image}${index + 1}.jpg`}
                      alt={item.name}
                    />
                  </div>
                  <div className="flex flex-col justify-center w-full ">
                    <p className=" text-lg font-bold">{item.name}</p>
                    <p className="text-base">€{item.price}</p>
                    <div className="text-base flex gap-2 items-center">
                      <div
                        style={{ backgroundColor: item.color }}
                        className="w-4 h-4 rounded-full"
                      ></div>
                      <p>{renameColor(item.color)}</p>
                    </div>
                    <p className="flex justify-center items-center text-xs size-6 bg-950 rounded-full text-50">
                      {item.size}
                    </p>
                    <span className="text-base">Quantité: {quantity}</span>
                  </div>
                </div>
                <div className="flex justify-center items-center px-3.5 py-3 border border-700 rounded">
                  <button onClick={() => handleDelete(index)}>Supprimer</button>
                </div>
              </div>
            ))}
          </div>
          </div>

          

        </div>

        {/** MENU */}
        <Menu
          className={isOpenMenu ? "hidden" : "flex overflow-hidden"}
          onClick={handleMenu}
        />
        <Plus
          className={`${isOpenMenu ? "flex" : "hidden"} rotate-45`}
          onClick={handleMenu}
        />
        {isOpenMenu && (
          <div className="absolute flex-col w-screen h-screen top-20 right-1 bg-white  p-4">
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
