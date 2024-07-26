import news from "/src/data/news.json";
import { ArrowRight } from "lucide-react";
import Button from "../../components/Button";
import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function Arrivals() {
  const [hover, setHover] = useState(null);

  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);
  const dragX = useMotionValue(0);
  const constraintsRef = useRef({ left: 0, right: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const totalWidth = containerRef.current.scrollWidth;
      const visibleWidth = containerRef.current.offsetWidth;
      setContainerWidth(totalWidth);
      constraintsRef.current = { left: -Math.max(totalWidth - visibleWidth, 0), right: 0 };
    }
  }, [news]);

  const handleEnter = (id) => setHover(id);
  const handleLeave = () => setHover(null);

  return (
    <section className="ml-mobile lg:ml-desktop mt-16">
      <h2>Nouveautés</h2>
      <div ref={containerRef} className="overflow-hidden">
        <motion.div
          className="flex"
          drag="x"
          dragConstraints={constraintsRef.current}
          style={{ x: dragX }}
        >
          {news.map((item, index) => (
            <div key={index} className="w-60 lg:w-96 flex-shrink-0 p-2">
              <div
                className="cursor-pointer"
                onMouseEnter={() => handleEnter(item.id)}
                onMouseLeave={handleLeave}
              >
                <img
                  draggable={false}
                  src={hover === item.id ? item.image2 : item.image}
                  alt={item.name}
                  className="block w-full"
                />
                <div>
                  <p>{item.name}</p>
                  <span>€ {item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        <ArrowRight color="#fafafa" className="absolute right-8 bg-950 rounded-full p-1 lg:size-8" />
      </div>
      <div className="w-full flex justify-center lg:justify-start mt-10 lg:mt-5">
        <Button style="flatButton" text="Discover New Arrivals" />
      </div>
    </section>
  );
}
