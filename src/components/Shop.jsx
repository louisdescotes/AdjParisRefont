import React from 'react'
import { ShoppingCart } from "lucide-react";

export default function Shop() {
  return (
    <button className="flex justify-center items-center gap-1.5 px-3.5 py-3 border border-700 rounded ">
      Ajoute au panier
      <ShoppingCart size={18} />
    </button>
  )
}
