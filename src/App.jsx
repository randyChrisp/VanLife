import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Layout from "./components/Layout";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import "./server";
import HostVans from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVanLayout from "./components/HostVanLayout";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVanPhotos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>

              {/* <Route path="vans/:id" element={<HostVanLayout />}>
                <Route index element={<HostVanDetail />} />
              </Route> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
