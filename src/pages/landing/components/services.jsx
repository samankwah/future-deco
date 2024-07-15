import React from "react";
import { PiCalculatorThin } from "react-icons/pi";
import { PiGear } from "react-icons/pi";

const steps = [
  {
    id: 1,
    title: "Get A Free Quote",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia.",
    icon: <PiCalculatorThin />,
  },
  {
    id: 2,
    title: "Production",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia.",
    icon: <PiGear />,
  },
  {
    id: 3,
    title: "Delivery & Assembly",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia.",
    icon: "package", // You can replace this with an actual icon
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <small className="text-lg font-semibold text-gray-400">
          PRODUCTION FLOWS
        </small>
        <h2 className="text-4xl font-semibold mb-8">How it Works</h2>
        <div className="flex justify-around items-center">
          {steps.map((step) => (
            <div key={step.id} className="text-center px-4">
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center bg-white rounded-full shadow-md">
                <img
                  src={`icons/${step.icon}.svg`}
                  alt={step.title}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md shadow-md mr-4">
            Learn More
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md">
            Get A Request
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
