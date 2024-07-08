import { Link, useLocation } from "react-router-dom";
import K from "../constants";

const Navbar = () => {
  const location = useLocation();
  console.log("Location---->", location.pathname);
  return (
    <div className="bg-transparent w-full absolute">
      <div className="flex justify-between pr-32 py-10 w-2/3 m-auto ">
        <a href="/" className="text-xl font-extrabold text-gray-900">
          Future Deco
        </a>
        <div className="flex gap-x-14 ">
          {K.NAVLINKS.map((item, index) => {
            return (
              <Link
                className={`${
                  location.pathname.includes(`/${item.name.toLowerCase()}`) ||
                  (location.pathname === "/" && item.name === "Home")
                    ? "text-white"
                    : "text-black"
                }`}
                key={index}
                to={item.path}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
