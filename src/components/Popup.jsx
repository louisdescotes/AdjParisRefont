import { ArrowRight } from "lucide-react";

export default function Popup({ visible, name, price }) {
  return (
    <div className={`${visible ? "flex" : "hidden"} absolute min-w-12s flex-col  m-2 px-3 py-2 gap-1 rounded-lg bg-50`}>
        <div className="flex w-max">{name} - {price}</div>
        <div>
          <a href="#" className="underline flex gap-1">
          Voir le produit 
          <ArrowRight color="#292929" strokeWidth={1} />
          </a>
        </div>
      </div>
  )
}
