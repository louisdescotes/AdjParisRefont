import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Collection from "./pages/Collection";
import ViewProduct from "./pages/ViewProduct";

export default function App() {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/ViewProduct" element={<ViewProduct />} />
      </Routes>
    </Router>
  );
}
