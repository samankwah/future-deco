import { heroBg } from "../../../assets";

const Hero = () => {
  return (
    <div
      className="flex items-center h-screen"
      style={{ backgroundColor: "#D4EAF5" }}
    >
      <div className="w-1/2 flex flex-col align-middle justify-end">
        <div className="w-2/3 ml-auto">
          <h1 className="text-5xl text-gray-600 font-light">Best Design of</h1>
          <span className="text-5xl text-gray-950 font-bold">
            Furniture Collections
          </span>
          <p className="font-light text-xl w-2/3 text-gray-600">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia
          </p>
          <button
            style={{ color: "#267AA4" }}
            className="bg-white  text-md font-bold p-3 px-5 my-5 border capitalize rounded-full shadow-lg hover:shadow-xl"
          >
            DISCOVER
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <img src={heroBg} alt="hero background" className="w-full h-screen" />
      </div>
    </div>
  );
};

export default Hero;
