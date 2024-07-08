import AboutImage from "../../../assets/images/bg_4.jpg";

const About = () => {
  return (
    <div
      className="h-[650px] bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${AboutImage}) ` }}
    >
      <div className=" container w-[70%] mx-auto flex justify-center align-middle">
        <div className="w-[50%]"></div>
        <div className="w-[50%] flex flex-col gap-4 px-3 justify-center align-middle">
          <small className="text-lg font-semibold text-gray-400">
            ABOUT FUTURE DECO
          </small>
          <h4 className="text-4xl font-medium text-gray-800">
            Quality makes the Beliefs for Customers
          </h4>
          <p className="text-xl text-gray-400 ">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <div className="flex justify-start items-center gap-5 cursor-pointer mt-4">
            <button className="ripple bg-orange-500 text-white p-6 rounded-full focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <p className="text-[#CF7500] font-bold ">Watch Video</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
