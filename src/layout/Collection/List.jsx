import { useState } from "react";
import collection from "/src/data/collections.json";
import { ListFilter, Search } from "lucide-react";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function List() {
  const [hover, setHover] = useState(null);
  const [idProduit, setIdProduit] = useState(null);
  const [selectedColors, setSelectedColors] = useState(() => {
    const initialColors = {};
    collection.forEach((item) => {
      initialColors[item.id] = null;
    });
    return initialColors;
  });

  const [filters, setFilters] = useState({
    colors: [],
    sizes: [],
    categories: [],
  });

  const filterSelected = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: Array.isArray(prevFilters[filterType])
        ? prevFilters[filterType].includes(value)
          ? prevFilters[filterType].filter((item) => item !== value)
          : [...prevFilters[filterType], value]
        : [value],
    }));
  };

  const filteredCollection = collection.filter((item) => {
    const matchesColor = filters.colors.length
      ? item.colors.some((color) => filters.colors.includes(color))
      : true;
    const matchesSize = filters.sizes.length
      ? item.sizes.some((size) => filters.sizes.includes(size))
      : true;
    const matchesCategory = filters.categories.length
      ? filters.categories.includes(item.categorie)
      : true;

    return matchesColor && matchesSize && matchesCategory;
  });

  const filterContainer = useRef();

  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if (
        filterContainer.current &&
        !filterContainer.current.contains(e.target)
      ) {
        handleShowFilter();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const handleShowFilter = () => {
    setShowFilter((prev) => !prev);
  };

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
        <div className="flex relative">
          <div className="flex flex-col">
            <p onClick={handleShowFilter} className="flex gap-2">
              Filter <ListFilter />
            </p>
            <div className="flex gap-2">
              <Search />
              <input type="text" placeholder="Rechercher" className="w-full" />
            </div>

            {showFilter && (
              <aside
                ref={filterContainer}
                className="fixed flex flex-col gap-5 z-30 left-0 p-5 bg-50 mx-mobile lg:mx-desktop "
              >
                <span onClick={handleShowFilter} className="absolute right-6">
                  Close X
                </span>
                <h2 className="text-2xl font-bold">Colors</h2>
                <div className="flex flex-wrap w-fit h-full gap-5 ">
                  {[
                    ...new Set(collection.map((item) => item.colors).flat()),
                  ].map((color, index) => (
                    <div
                      key={index}
                      className="relative flex flex-col items-center justify-center h-full"
                    >
                      <input
                        type="checkbox"
                        id={`color-${color}`}
                        onChange={() => filterSelected("colors", color)}
                        style={{ backgroundColor: color }}
                        className="appearance-none size-7 rounded-full cursor-pointer checked:ring-2 checked:ring-blue-500"
                      />
                      <label
                        htmlFor={`color-${color}`}
                        className="text-950 text-sm cursor-pointer"
                      >
                        {convertColor(color)}
                      </label>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold">Sizes</h2>
                <div className="flex flex-wrap w-fit gap-6 h-full">
                  {[
                    ...new Set(collection.map((item) => item.sizes).flat()),
                  ].map((size, index) => (
                    <div
                      key={index}
                      className="relative flex items-center justify-center w-4 h-6 "
                    >
                      <input
                        id={`size-${size}`}
                        onChange={() => filterSelected("sizes", size)}
                        type="checkbox"
                        className="
                    appearance-none absolute size-8 bg-950 rounded-full cursor-pointer checked:ring-2 checked:ring-blue-500"
                      />
                      <label
                        htmlFor={`size-${size}`}
                        className="absolute text-50 text-sm cursor-pointer "
                      >
                        {size}
                      </label>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold">Categorie</h2>
                <div className="flex flex-wrap w-fit gap-4">
                  {[...new Set(collection.map((item) => item.categorie))].map(
                    (categorie, index) => (
                      <div
                        key={index}
                        className="relative flex items-center justify-center px-2 py-0.5"
                      >
                        <input
                          type="checkbox"
                          id={`categorie-${categorie}`}
                          onChange={() =>
                            filterSelected("categories", categorie)
                          }
                          className="appearance-none absolute border border-900 cursor-pointer rounded-lg w-full h-full checked:bg-900 peer"
                        />
                        <label
                          htmlFor={`categorie-${categorie}`}
                          className="text-900 peer-checked:text-50 z-10 cursor-pointer"
                        >
                          {categorie}
                        </label>
                      </div>
                    )
                  )}
                </div>
              </aside>
            )}
          </div>
        </div>
        <aside className="grid grid-cols-2 lg:grid-cols-4 grid-rows-custom gap-x-2 lg:gap-x-5 gap-y-16">
          {filteredCollection.map((items) => {
            const selectedColor = selectedColors[items.id];
            const baseImage = selectedColor
              ? `${items.collection}${convertColor(selectedColor)}01`
              : items.imagePreview;
            const hoverImage = selectedColor
              ? `${items.collection}${convertColor(selectedColor)}04`
              : items.imagePreview2;

            return (
              <article key={items.id} className="flex flex-col gap-1.5">
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(items.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link to={"/ViewProduct"} state={{ idProduit: items.id, nomProduit: items.collection, colorProduit: selectedColor }}>
                    <img
                      src={`/collections/${
                        hover === items.id ? hoverImage : baseImage
                      }.jpg`}
                      alt={items.name}
                      draggable={false}
                      className="cursor-pointer"
                    />
                  </Link>
                  <div className="mt-2 w-full justify-center">
                    {/* MOBILE COLORS */}
                    <span className="flex lg:hidden gap-2 lg:gap-4 min-h-5">
                      {items.colors.map((color, index) => (
                        <div
                          key={index}
                          className={`${
                            items.colors.length > 1 ? "md:flex" : "md:hidden"
                          } size-5 rounded-full border cursor-pointer ${
                            selectedColor === color ? "ring ring-blue-500" : ""
                          }`}
                          style={{ backgroundColor: color }}
                          onClick={() =>
                            changeImage(items.id, items.collection, color)
                          }
                        ></div>
                      ))}
                    </span>
                  </div>
                </div>
                {/* DESKTOP COLORS */}
                <div className="hidden lg:flex w-12 h-full gap-1.5 ">
                  {items.colors.map((color, index) => {
                    const transformedColor = convertColor(color);
                    return (
                      <img
                        key={index}
                        src={`/collections/${items.collection}${transformedColor}01.jpg`}
                        className=" cursor-pointer object-cover"
                        onClick={() =>
                          changeImage(items.id, items.collection, color)
                        }
                      />
                    );
                  })}
                </div>
                <div>
                  <p className="text-950">{items.name}</p>
                  <p className="text-800">€{items.price}</p>
                </div>
              </article>
            );
          })}
        </aside>
      </section>
    </main>
  );
}
