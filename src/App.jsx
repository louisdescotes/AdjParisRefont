import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Collection from "./pages/Collection";
import ViewProduct from "./pages/ViewProduct";

import collection from "/src/data/collections.json";
import { ShopProvider } from "./Hook/ShopContext";

export default function App() {
  const items = collection

  return (
    <ShopProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/ViewProduct" element={<ViewProduct />} />
      </Routes>
    </Router>
    </ShopProvider>
  );
}
