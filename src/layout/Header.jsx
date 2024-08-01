import { ShoppingBag, Menu, Plus } from "lucide-react";
import logo from "/logo/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <nav className="fixed top-0 h-20 w-full flex items-center z-50 bg-white">
      <div className="relative w-full h-full flex justify-start items-center mx-mobile lg:mx-desktop">
        <img src={logo} alt="Logo de ADJ Paris" className="h-12" />
      </div>
      <div className="w-full h-full flex justify-end gap-5 items-center mx-mobile lg:mx-desktop">
        <ShoppingBag />
        <Menu className={isOpen ? "hidden" : "flex"}
        onClick={handleMenu} />
                <Plus className={`${isOpen ? "flex" : "hidden"} rotate-45`}
        onClick={handleMenu} />
        {isOpen && <div className="absolute flex-col w-full h-screen top-20 right-1 bg-white  p-4">
          <div className="absolute right-6 flex flex-col justify-end w-fit">
          <Link to="">Accueil</Link>
          <hr />
          <Link to="">Collections</Link>
          <hr />
          <div className="flex flex-col pl-8">
            <Link to="">01. Tshirts</Link>
            <hr />
            <Link to="">02. Pull</Link>
            <hr />
            <Link to="">03. Jackets</Link>
            <hr />
            <Link to="">04. Sweats</Link>
            <hr />
            <Link to="">05. Pants</Link>
            <hr />
            <Link to="">06. Cardigans</Link>
          </div>
          <hr />
          <Link to="">Panier</Link>
          </div>
        </div>}
      </div>
    </nav>
  );
}
