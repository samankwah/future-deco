/* eslint-disable react/prop-types */
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div
      className={`relative flex flex-col justify-center align-middle gap-4 p-5 rounded-lg ${
        isActive ? "bg-primary text-white" : "bg-white"
      }`}
      style={{ height: "100%" }}
    >
      <div className="quote absolute z- flex align-middle justify-center items-center left-5 -top-4 bg-primary rounded-full size-8">
        <FontAwesomeIcon icon={faQuoteLeft} color="#fff" />
      </div>
      <p
        className={`text-lg ${
          isActive ? "text-white" : "text-gray-700"
        } text-left`}
      >
        {testimonial.message}
      </p>
      <div className="flex gap-2">
        <img
          src={testimonial.customerImage}
          alt={testimonial.name}
          className="size-20"
        />
        <div className="flex flex-col text-left">
          <p
            className={`font-semibold text-lg ${
              isActive ? "text-white" : "text-gray-800"
            }`}
          >
            {testimonial.name}
          </p>
          <p className={`text-sm ${isActive ? "text-white" : "text-gray-800"}`}>
            {testimonial.position}
          </p>
          <p className={`text-sm ${isActive ? "text-white" : "text-gray-800"}`}>
            {testimonial.organization}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
