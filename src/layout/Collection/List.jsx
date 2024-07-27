import collection from "/src/data/collections.json";
import { ListFilter } from "lucide-react";

export default function List() {
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
          {collection.map((items, index) => (
            <article key={index}>
              <div className="">
                <img
                  src= {`/collections/${items.imagePreview} `}
                  alt= {items.name}
                  draggable= {false}
                />

                {/* <div>
                  {items.images.map((photos) => (
                    <img src={photos} alt={items.name} />
                  ))}
                </div> */}
              </div>
              <div>
                <p>{items.name}</p>
                <p>{items.price}</p>
              </div>
            </article>
          ))}
        </aside>
      </section>
    </main>
  );
}
