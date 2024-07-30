import Button from "../../components/Button";
import Carousel from "../../components/Carousel";
import news from "/src/data/news.json"

export default function Arrivals() {
  return (
    <section className="ml-mobile lg:ml-desktop mt-16">
      <h2>Nouveautés</h2>
      <Carousel 
      data= {news}
      />
      <div className="w-full flex justify-center lg:justify-start mt-10 lg:mt-5">
        <Button style="flatButton" text="Discover New Arrivals" />
      </div>
    </section>
  );
}
