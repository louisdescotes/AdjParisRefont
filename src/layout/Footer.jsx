import logo from '/logo/logo.png'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default function Footer() {
  return (
    <footer className="px-8 py-8 mt-24 lg:mt-32">
      <div className="flex flex-col gap-12">
        <div>
        <img src={logo} alt="Logo de l'entreprise"/>
        </div>
        <div className="flex flex-col gap-2">
        <Link to="/">Accueil</Link>
        <Link to="/Collection">Collection</Link>
        </div>
      </div>
    </footer>
  )
}
