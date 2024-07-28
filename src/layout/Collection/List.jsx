import { useState } from "react";
import collection from "/src/data/collections.json";
import { ListFilter } from "lucide-react";

export default function List() {
  const [hover, setHover] = useState(null);
  const [selectedColors, setSelectedColors] = useState(() => {
    const initialColors = {};
    collection.forEach((item) => {
      initialColors[item.id] = null; 
    });
    return initialColors;
  });

  const handleMouseEnter = (id) => {
    setHover(id);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

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

  const changeImage = (id, name, color) => {
    setSelectedColors((prevColors) => ({
      ...prevColors,
      [id]: color,
    }));
  };

  return (
    <main className="mt-24 mx-mobile lg:mx-desktop">
      <section className="flex flex-col">
        <div className="flex">
          <p>All available</p>
          <div className="flex">
            <p>Filter</p>
            <ListFilter />
          </div>
        </div>
        <aside className="grid grid-cols-4 grid-rows-custom gap-x-5 gap-y-16">
          {collection.map((items) => {
            const selectedColor = selectedColors[items.id];
            const baseImage = selectedColor
              ? `${items.collection}${convertColor(selectedColor)}01`
              : items.imagePreview;
            const hoverImage = selectedColor
              ? `${items.collection}${convertColor(selectedColor)}04`
              : items.imagePreview2;

            return (
              <article key={items.id}>
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(items.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={`/collections/${
                      hover === items.id ? hoverImage : baseImage
                    }.jpg`}
                    alt={items.name}
                    draggable={false}
                    className="cursor-pointer"
                  />
                  <div
                    className={`${
                      hover === items.id ? "flex" : "hidden"
                    } absolute w-full justify-center bottom-6`}
                  >
                    <span className="flex gap-4">
                      {items.colors.map((color, index) => (
                        <div
                          key={index}
                          className={`
                          ${items.colors.length > 1 ? "flex" : "hidden"}
                          size-6 rounded-full border cursor-pointer ${
                            selectedColor === color
                              ? "ring ring-blue-500"
                              : ""
                          }`}
                          style={{
                            backgroundColor: color,
                          }}
                          onClick={() =>
                            changeImage(items.id, items.collection, color)
                          }
                        ></div>
                      ))}
                    </span>
                  </div>
                </div>
                <div>
                  <p>{items.name}</p>
                  <p>{items.price}</p>
                </div>
              </article>
            );
          })}
        </aside>
      </section>
    </main>
  );
}
