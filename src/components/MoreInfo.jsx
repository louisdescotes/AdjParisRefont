import { Plus } from "lucide-react";
import { useState } from "react";
import Popup from "./Popup";

export default function MoreInfo({ position, name, price }) {

  const [isVisible, setIsVisible] = useState(false)

  const handlePopup = () => {
    setIsVisible(isVisible => !isVisible)
  }

  return (
    <div className={`${position} hidden lg:block w-min h-min p-4 `}
    onMouseEnter={ handlePopup }
    onMouseLeave={ handlePopup }>
      
      <Plus
        className={`${isVisible ? 'rotate-45' : 'rotate-0'} size-8 p-1 lg:text-8 bg-gray-100 bg-opacity-20 rounded-full cursor-pointer transition-transform`}
        color="#fafafa"
        strokeWidth={1}
      />

      <Popup 
      visible={ isVisible }
      name=  {name}
      price=  {price}
      
      />
    </div>

  )
}
