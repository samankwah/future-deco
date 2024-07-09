import About from "./components/about";
import Collection from "./components/collection";
import Features from "./components/features";
import Hero from "./components/hero";
import Services from "./components/services";
import Testimonials from "./components/testimonials";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Features />
      <About />
      <Collection />
      <Testimonials />
      <Services />
    </div>
  );
};

export default Landing;
