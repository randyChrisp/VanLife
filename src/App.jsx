import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About.jsx";
// import Nav from "./components/Nav";
import Header from "./components/Header";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import "./server";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
