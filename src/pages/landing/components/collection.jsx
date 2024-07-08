import gallery1 from "../../../assets/images/gallery-1.jpg";
import gallery2 from "../../../assets/images/gallery-2.jpg";
import gallery3 from "../../../assets/images/gallery-3.jpg";
import gallery4 from "../../../assets/images/gallery-4.jpg";
import gallery5 from "../../../assets/images/gallery-5.jpg";
import gallery6 from "../../../assets/images/gallery-6.jpg";
const Collection = () => {
  return (
    <>
      <div className="flex flex-col text-center align-middle justify-center items-center mt-36">
        <small className="text-lg font-semibold text-gray-400">
          ABOUT FUTURE DECO
        </small>
        <h4 className="text-4xl font-medium text-gray-800">
          Furniture Collection
        </h4>
      </div>
      <div>
        <div className="my-20">
          <div className="grid grid-cols-4 gap-2 px-3">
            <div className="col-span-1  text-white ">
              <img
                src={gallery1}
                alt=""
                className="w-full h-[360px] bg-cover bg-center bg-no-repeat"
              />
            </div>
            <div className="col-span-1  text-white ">
              <img
                src={gallery2}
                alt=""
                className="w-full h-[360px] bg-cover bg-center bg-no-repeat"
              />
            </div>
            <div className="col-span-2 text-white ">
              <img
                src={gallery3}
                alt=""
                className="w-full h-[360px] bg-cover bg-center bg-no-repeat "
              />
            </div>
          </div>
          <div className="grid grid-cols-9 gap-2 px-3 mt-2">
            <div className="col-span-4  text-white ">
              <img
                src={gallery4}
                alt=""
                className="w-full h-[360px] bg-cover bg-center bg-no-repeat"
              />
            </div>
            <div className="col-span-2  text-white ">
              <img
                src={gallery5}
                alt=""
                className="w-full h-[360px] bg-cover bg-center bg-no-repeat"
              />
            </div>
            <div className="col-span-3 text-white">
              <img
                src={gallery6}
                alt=""
                className="w-full h-[360px] bg-cover bg-center bg-no-repeat"
              />
            </div>
          </div>
          <div className="bg-[#D4EAF5] py-20">
            <div className="flex flex-col text-center align-middle justify-center items-center my-8 ">
              <small className="text-lg font-semibold text-gray-400">
                GREAT REVIEWS FOR OUR SERVICES
              </small>
              <h4 className="text-4xl font-medium text-gray-800">
                Technical Statistics
              </h4>
            </div>
            <div className="w-[60%] mx-auto conatiner grid grid-cols-4 gap-5">
              <div className="flex flex-col align-middle justify-center items-center p-4 gap-2">
                <h1 className="text-5xl font-bold text-gray-800">20</h1>
                <p className="font-bold text-gray-400 text-sm">
                  YEARS OF EXPERIENCE
                </p>
              </div>
              <div className="flex flex-col align-middle justify-center items-center p-4 gap-4">
                <h1 className="text-5xl font-bold text-gray-800">23,200</h1>
                <p className="font-bold text-gray-400 text-sm">
                  HAPPY CUSTOMERS
                </p>
              </div>
              <div className="flex flex-col align-middle justify-center items-center p-4 gap-4">
                <h1 className="text-5xl font-bold text-gray-800">8,850</h1>
                <p className="font-bold text-gray-400 text-sm">
                  PROJECTS COMPLETED
                </p>
              </div>
              <div className="flex flex-col align-middle justify-center items-center p-4 gap-4">
                <h1 className="text-5xl font-bold text-gray-800">23</h1>
                <p className="font-bold text-gray-400 text-sm">AWARDS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
