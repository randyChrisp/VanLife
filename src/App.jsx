import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Layout from "./components/Layout";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import "./server";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";
import HostVanDetail, {
  loader as hostVanDetailLoader,
} from "./pages/Host/HostVanDetail";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import { requireAuth } from "./utils";
import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />
      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => await requireAuth()}
        />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={hostVanDetailLoader}>
          <Route index element={<HostVanInfo />} />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async () => await requireAuth()}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
