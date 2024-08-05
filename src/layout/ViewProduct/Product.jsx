import { useLocation } from "react-router-dom";
import collection from "/src/data/collections.json";
import { Info, ArrowDownRight, Plus } from "lucide-react";
import Quantity from "/src/components/Quantity";
import Shop from "/src/components/Shop";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Product() {
  const location = useLocation();
  let { idProduit, nomProduit, colorProduit } = location.state || {};

  const items = collection[idProduit - 1];

  // Change color
  let convertColor = (color) => {
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

  if (colorProduit === null) {
    colorProduit = items.colors[0]
  }

  const colorConverted = convertColor(colorProduit);

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
    <section className="flex flex-col lg:flex-row gap-12 lg:gap-0 mt-20 overflow-hidden h-full">
      <aside className=" max-h-[90svh] flex flex-col-reverse lg:flex-row items-center gap-4 px-8 lg:pl-12">
      {/** PREVIEW */}
      <div className="flex flex-row lg:flex-col justify-between w-full lg:w-fit lg:justify-center gap-1 h-96">
          {imagesSelected.map((image, index) => (
            <img
              key={index}
              src={`/collections/${image}`}
              className="inline-block w-20 object-cover flex-1"
              alt=""
              draggable={false}
            />
          ))}
        </div>

      {/** REEL */}
        <div className="flex gap-2 flex-col overflow-x-auto overflow-y-scroll max-h-[55rem] w-full whitespace-nowrap ">
          {imagesSelected.map((image, index) => (
            <img
              key={index}
              src={`/collections/${image}`}
              className="inline-block h-auto "
              alt=""
              draggable={false}
            />
          ))}
        </div>
      </aside>

      <aside className="relative flex flex-col gap-6  w-full ml-8 mr-12 pb-24">
      <Link to="/Collection" className=" absolute  w-full flex justify-center lg:justify-end">
          <div className="fixed bottom-4  z-10 bg-100 px-4 py-2 rounded-xl 
          lg:static lg:bg-none lg:px-0 lg:py-0 lg:rounded-none lg:bg-transparent
          flex items-center gap-2 ">
            <p>Retour</p>
          <Plus
          className={`rotate-45 bg-100 rounded-full p-1`}
        />
          </div> 
          </Link>
        <div className="flex flex-col gap-1.5">
          <p className="text-950 text-xl">{items.name}</p>
          <p className="text-950 text-lg">€{items.price}</p>
        </div>

        <div className="flex flex-col gap-2 w-fit">
          <div className="flex justify-between text-950 text-sm">
            <p>Size</p>
            <p className="underline">What my size</p>
          </div>
          <div className="flex gap-5">
            {items.sizes.map((size, index) => (
              <span
                key={index}
                className={`${sizeSelected !== "" && sizeSelected == size ? "ring-2 ring-blue-500" : ""} flex gap-2.5 justify-center items-center border border-700 rounded size-6 p-4 cursor-pointer`}
                onClick={() => handleSizeSelected(size)}
              >
                {console.log(sizeSelected, size)}
                {size}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <p className="text-950 text-sm">Colors</p>
          </div>
          <div className="flex gap-5">
            {items.colors.map((color, index) => (
              <input
                key={index}
                className="appearance-none flex justify-center items-center border border-700 rounded-full size-3 p-3 cursor-pointer checked:ring-2 checked:ring-blue-500"
                style={{ backgroundColor: color }}
                onClick={() => {
                  handleColorSelected(color);
                }}
              ></input>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-950 text-sm">Quantité</p>
          <Quantity />
        </div>
        <div className="py-5 max-w-[80%]">
          <hr />
          <div className="flex flex-col">
            <div className="flex gap-1.5 cursor-pointer text-base my-2 text-950" onClick={handleOpen}>
              <Info strokeWidth={1.5} />
              <p>DESCRIPTION</p>
              <ArrowDownRight strokeWidth={1.5} />
            </div>
            <div className={`${isOpen == true ? "flex" : "hidden"} flex-col pb-5 text-900 text-sm`}>
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
          <div className="flex gap-1.5 cursor-pointer text-base my-2 text-950">
            <Info strokeWidth={1.5}/>
            <p>TAILLE ET AJUSTEMENT</p>
            <ArrowDownRight strokeWidth={1.5} />
          </div>

          <hr />
          <div className="flex gap-1.5 cursor-pointer text-base my-2 text-950">
            <Info strokeWidth={1.5}/>
            <p>LES DÉTAILS D’EXPÉDITION</p>
            <ArrowDownRight strokeWidth={1.5}/>
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
