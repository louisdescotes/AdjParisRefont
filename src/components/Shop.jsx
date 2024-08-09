import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { useState, useEffect } from 'react';
import { ShopContext } from "../Hook/ShopContext";

export default function Shop({ item, colorSelected, sizeSelected }) {

  const { itemsToBuy, setItemsToBuy } = useContext(ShopContext);

  // Vérification taille et couleur selectionné
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (colorSelected && sizeSelected) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [colorSelected, sizeSelected])

  const renameColor = (color) => {
    switch (color) {
      case "#151414":
        return "B";
      case "#FAFAFA":
        return "W";
      case "#FEA480":
        return "O";
      case "#C2D8EF":
        return "A";
      case "#AEE4DD":
        return "L";
      case "#C2A893":
        return "C";
      case "#5D5B70":
        return "G";
      case "#C5766F":
        return "R";
      case "#3F3C2F":
        return "M";
    }
  };


  // Add to shop 
  const addToShop = ( colorSelected, sizeSelected ) => { 
    const newItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      color: colorSelected,
      size: sizeSelected,
      imagePreview: item.imagePreview,
      image: item.collection  + renameColor(colorSelected) + "0"
    };
    
    setItemsToBuy((prevItems) => [...prevItems, newItem]);

    }

  return (
    <button
    disabled={buttonDisabled}
    onClick={() => addToShop(colorSelected, sizeSelected)}
    className={`${buttonDisabled ? "bg-100 opacity-50 cursor-not-allowed" : "hover:bg-100 transition-colors duration"}
    flex justify-center items-center gap-1.5 px-3.5 py-3 border border-700 rounded max-w-[16rem] w-1/2

    `}>
      Ajoute au panier
      <ShoppingCart size={18} />
    </button>
  )
}

