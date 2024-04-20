import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Hero from "../src/Components/Hero.jsx";
import Category from "../src/Components/Category.jsx";
import Products from "../src/Components/Products.jsx";
import Navbar from "../src/Components/Navbar.jsx";
import DogMid from "./Components/DogMid.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";

import Modals from "./Components/Modals.jsx";
import Cart from "./Components/Cart.jsx";
import User from "./Components/User.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Modals/>
      <User/>
      <Cart/>
      <Hero />
      <Category />
      <DogMid />
      <Products />
      <Testimonials />
      <Contact />
      <Footer/>
    </>
  );
}
export default App;
