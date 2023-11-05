import About from "../About/About";
import Sliders from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Sliders></Sliders>
      <Services></Services>
      <About></About>
      <Contact></Contact>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
