import About from "./components/about";
import Collection from "./components/collection";
import Features from "./components/features";
import Hero from "./components/hero";
import Services from "./components/services";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Services />
      <About />
      <Collection />
    </div>
  );
};

export default Landing;
