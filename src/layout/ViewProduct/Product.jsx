import { useLocation } from "react-router-dom";
import collection from "/src/data/collections.json";
import { Info, ArrowDownRight } from "lucide-react";
import Quantity from "/src/components/Quantity";
import Shop from "/src/components/Shop";
import { useState } from "react";

export default function Product() {
  const location = useLocation();
  const { idProduit, nomProduit, colorProduit } = location.state || {};

  const items = collection[idProduit - 1];

  // Change color
  const convertColor = (color) => {
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
      default:
        return "";
    }
  };
  const colorConverted = convertColor(colorProduit);

  console.log({ idProduit, nomProduit, colorConverted });
  const imagesSelected = [];

  for (let $i = 1; $i < 5; $i++) {
    let imageSrc = `${nomProduit}${colorConverted}0${$i}.jpg`;
    imagesSelected.push(imageSrc);
  }

  // Size - Color selected

  const [sizeSelected, setSizeSelected] = useState("");
  const [colorSelected, setColorSelected] = useState("");

  const handleSizeSelected = (size) => {
    setSizeSelected(size);
  };
  const handleColorSelected = (color) => {
    setColorSelected(color);
  };

  // Open Description
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (prev) => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className="flex mt-20 overflow-hidden">
      <aside className="max-w-[50%]">
        <div className="flex flex-col overflow-x-auto overflow-y-scroll max-h-[55rem] whitespace-nowrap ">
          {imagesSelected.map((image, index) => (
            <img
              key={index}
              src={`/collections/${image}`}
              className="inline-block h-auto"
              alt=""
              draggable={false}
            />
          ))}
        </div>
      </aside>

      <aside>
        <div>
          <p>{items.name}</p>
          <p>€{items.price}</p>
        </div>

        <div>
          <div className="flex justify-between">
            <p>Size</p>
            <p className="underline">What my size</p>
          </div>
          <div className="flex justify-between">
            {items.sizes.map((size, index) => (
              <span
                key={index}
                className="flex justify-center items-center border border-700 rounded size-6 p-4"
                onClick={() => handleSizeSelected(size)}
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <p>Colors</p>
          </div>
          <div className="flex justify-between">
            {items.colors.map((color, index) => (
              <div
                key={index}
                className="flex justify-center items-center border border-700 rounded-full size-3 p-3 cursor-pointer"
                style={{ backgroundColor: color }}
                onClick={() => {
                  handleColorSelected(color);
                }}
              ></div>
            ))}
          </div>
        </div>

        <div>
          <p>Quantité</p>
          <Quantity />
        </div>
        <div className="">
          <hr />
          <div className="flex flex-col">
            <div className="flex gap-1.5 cursor-pointer" onClick={handleOpen}>
              <Info />
              <p>DESCRIPTION</p>
              <ArrowDownRight />
            </div>
            <div className={`${isOpen == true ? "flex" : "hidden"} flex-col`}>
              <p>Découvrez l'élégance ultime de première qualité.</p>
              <li>Oversize</li>
              <li>Col rond</li>
              <li>Manches courtes</li>
              <li>Impression Amour</li>
              <p>Composition: 100% Coton 250 gsm</p>
              <li>
                Vérifiez toujours l'étiquette de soins pour les instructions de
                lavage.
              </li>
            </div>
          </div>

          <hr />
          <div className="flex">
            <Info />
            <p>TAILLE ET AJUSTEMENT</p>
            <ArrowDownRight />
          </div>

          <hr />
          <div className="flex">
            <Info />
            <p>LES DÉTAILS D’EXPÉDITION</p>
            <ArrowDownRight />
          </div>
        </div>
        <Shop
          item={items}
          colorSelected={colorSelected}
          sizeSelected={sizeSelected}
        />
      </aside>
    </section>
  );
}
