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

  // Add to shop 
  const addToShop = ( colorSelected, sizeSelected ) => { 
    const newItem = {
      name: item.name,
      price: item.price,
      color: colorSelected,
      size: sizeSelected,
      imagePreview: item.imagePreview
    };
    
    setItemsToBuy((prevItems) => [...prevItems, newItem]);

    }

  return (
    <button
    disabled={buttonDisabled}
    onClick={() => addToShop(colorSelected, sizeSelected)}
    className={`${buttonDisabled ? "bg-100 opacity-50 cursor-not-allowed" : ""}
    flex justify-center items-center gap-1.5 px-3.5 py-3 border border-700 rounded`}>
      Ajoute au panier
      <ShoppingCart size={18} />
    </button>
  )
}

