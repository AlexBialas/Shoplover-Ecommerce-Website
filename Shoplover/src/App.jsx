import "./App.css";
import Nav from "../src/components/Nav/Nav";
import Hero from "../src/components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Products />
    </>
  );
}

export default App;
