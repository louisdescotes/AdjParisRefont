import { ShoppingBag, Search, Menu } from "lucide-react";
import logo from "/logo/logo.png";

export default function Header() {
  return (
    <nav className="fixed lg:top-6 h-20 w-full flex items-center z-50">
      <div className="relative w-full h-full flex justify-start items-center mx-mobile lg:mx-desktop">
        <img src={logo} alt="Logo de ADJ Paris" />
      </div>
      <div className="w-full h-full flex justify-end gap-5 items-center mx-mobile lg:mx-desktop">
        <ShoppingBag />
        <Search />
        <Menu />
      </div>
    </nav>
  );
}
