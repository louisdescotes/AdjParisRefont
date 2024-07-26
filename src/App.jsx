import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Collection from "./pages/Collection";

export default function App() {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Collection" element={<Collection />} />
      </Routes>
    </Router>
  );
}
