import Button from "../../components/Button";
import MoreInfo from "../../components/MoreInfo";
import example from "/landing/exemple1.jpg";
import example2 from "/landing/exemple2.jpg";
import example3 from "/landing/exemple3.jpg";

export default function ProductImage() {
  return (
    <section className="flex flex-col lg:flex-row lg:h-1/6 justify-center mx-mobile lg:mx-desktop mt-24 lg:mt-32">
      <aside className="relative lg:grid lg:grid-rows-custom  lg:grid-cols-2 lg:gap-2.5 w-full ">
        <div className=" row-span-2 h-full w-full ">
          <img
            className="h-full w-full object-cover"
            src={example}
            alt=" Mannequin portant le maillot iconique de la marque"
          />

          <MoreInfo
            position={"absolute top-1/3 left-1/4"}
            name="COEUR CHIC Tshirt"
            price="€39,90"
          />

          <div className="lg:flex hidden absolute bottom-12 left-4 flex-col justify-center h-fit items-start gap-4 ">
            <h3 className="max-w-44 text-50">Découvrez les incontournables</h3>
            <Button style={"outlineButton2"} text={"Découvrir"} />
          </div>
        </div>

        <div className="lg:block hidden h-full">
          <img className="h-full w-full object-cover" src={example2} alt="" />

          <MoreInfo
            position={"absolute top-1/4 right-1/4"}
            name="AMOUR Tshirt"
            price="€39,90"
          />
        </div>

        <div className="lg:block hidden h-full">
          <img className="h-full w-full object-cover" src={example3} alt="" />

          <MoreInfo
            position={"absolute bottom-1/4 right-1/4"}
            name="ROMANCE Flower Tshirt"
            price="€39,90"
          />
        </div>
        <div className="lg:hidden mt-4 lg:mt-0 flex flex-col justify-center h-fit items-start gap-4 ">
            <h3 className="max-w-44 ">Découvrez les incontournables</h3>
            <Button style={"outlineButton"} text={"Découvrir"} />
          </div>
      </aside>
    </section>
  );
}
