import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

const images = [
  "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
  "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
  "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png",
  "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png",
  "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png",
  "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png",
];

const Home = () => {
  return (
    <>
      <div className="home-container">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="vans">Find your van</Link>
      </div>
      <Carousel images={images} />
    </>
  );
};

export default Home;
