import { useState, createContext } from 'react';

const ShopContext = createContext()

const ShopProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(1)
  const [itemsToBuy, setItemsToBuy] = useState([])

  const handleDelete = (index) => {
    setItemsToBuy((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <ShopContext.Provider value={{ quantity, setQuantity, itemsToBuy, setItemsToBuy, handleDelete }}>
      {children}
    </ShopContext.Provider>
  )
}
export { ShopContext, ShopProvider }