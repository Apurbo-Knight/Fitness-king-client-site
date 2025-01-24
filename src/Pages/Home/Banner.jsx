import { Link } from "react-router-dom";

import bannerBG from "../../assets/1.png";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${bannerBG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[90vh] flex items-center justify-center text-center "
    >
      <div className="px-2 md:px-0">
        <h1 className="text-white text-2xl md:text-5xl font-semibold capitalize mb-4">
          BE HAPPIER HEALTHIER AND STRONGER TO BECOME
        </h1>
        <h2 className="text-teal-400 text-2xl md:text-5xl  font-semibold mb-3">
          THE BEST VERSION OF YOURSELF
        </h2>
        <p className="text-white mb-8 font-semibold md:text-xl capitalize ">
          Achieve your health & fitness goals at any stage.
        </p>
        <Link
          to={"/allClassesPage"}
          className="text-white hover:text-teal-400 bg-teal-400 hover:bg-white hover:border-2 hover:border-teal-400 duration-500 px-5 py-3 rounded-md font-semibold "
        >
          OUR CLASSES
        </Link>
      </div>
    </div>
  );
};

export default Banner;
