import Button from "../../components/Button"

export default function NewLetter() {
  return (
    <section className="ml-mobile lg:ml-desktop mt-16 lg:mt-32">
      <div className="flex flex-col gap-2 max-w-80">
      <h3>S'abonner à la news letter</h3>
      <input type="text" placeholder="Email" 
      className=""
      />
      </div>
      <hr className="mt-1 mb-3.5 max-w-80"/>
        <Button style="flatButton" text="S'inscrire" /> 
    </section>
  )
}
