import "./App.css";
import Nav from "../src/components/Nav/Nav";
import Hero from "../src/components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
    </>
  );
};

export default App;
