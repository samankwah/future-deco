import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./MySwiper.css"; // Import the custom CSS
import TestimonialCard from "../../../components/testimonialCard";

const testimonials = [
  {
    name: "Albert Nartey",
    position: "CEO",
    organization: "Gorilla Systems",
    message: "Thanks to Future Deco, my home looks and feels like Paradise!",
    customerImage: "",
  },
  {
    name: "Lisa Wong",
    position: "Marketing Director",
    organization: "Tech Innovators",
    message:
      "Future Deco transformed our office space into a modern, vibrant environment that boosts our productivity.",
    customerImage: "",
  },
  {
    name: "James Smith",
    position: "Product Manager",
    organization: "Creative Minds Inc.",
    message:
      "The innovative designs and quality service provided by Future Deco exceeded our expectations!",
    customerImage: "",
  },
  {
    name: "Maria Garcia",
    position: "Owner",
    organization: "Maria's Cafe",
    message:
      "Our cafe now has a unique and inviting atmosphere, thanks to the wonderful team at Future Deco!",
    customerImage: "",
  },
  {
    name: "Daniel Johnson",
    position: "CTO",
    organization: "Digital Solutions",
    message:
      "The team at Future Deco brought our vision to life with their exceptional design skills.",
    customerImage: "",
  },
  {
    name: "Samantha Brown",
    position: "HR Manager",
    organization: "Enterprise Corp.",
    message:
      "Future Deco's interior design has made our workspace more functional and aesthetically pleasing.",
    customerImage: "",
  },
];

const Testimonials = () => {
  const [centeredSlide, setCenteredSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setCenteredSlide(swiper.realIndex);
  };

  return (
    <div className="flex flex-col text-center align-middle justify-center items-center my-8 w-4/5 mx-auto">
      <small className="text-lg font-semibold text-gray-400">
        TESTIMONIALS
      </small>
      <h4 className="text-4xl font-medium text-gray-800">Happy Customers</h4>
      <div className="container mx-auto py-10 lg:w-4/5">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          onSlideChange={handleSlideChange}
          //   onSwiper={(swiper) => setCenteredSlide(swiper.realIndex)}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
          className="h-[250px]"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className="rounded-lg p-5">
              <TestimonialCard testimonial={t} isActive={centeredSlide === i} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
