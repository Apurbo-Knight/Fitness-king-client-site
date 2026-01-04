import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bannerBG from "../../assets/1.png";

const Banner = () => {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${bannerBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-4 md:px-0 max-w-4xl"
      >
        {/* Small badge */}
        <span
          className="inline-block mb-6 px-4 py-1 text-sm tracking-widest 
                         text-teal-400 border border-teal-400/40 rounded-full"
        >
          FITNESS & WELLNESS
        </span>

        <h1
          className="text-white text-3xl md:text-6xl font-extrabold 
                       leading-tight mb-4"
        >
          Be Happier, Healthier <br />
          <span className="text-teal-400">And Stronger</span>
        </h1>

        <p className="text-gray-200 mb-10 md:text-xl max-w-2xl mx-auto">
          Achieve your health and fitness goals at any stage of life with expert
          coaching and modern training programs.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/allClassesPage"
            className="px-8 py-4 rounded-full font-semibold 
                       bg-teal-400 text-black 
                       hover:bg-white hover:text-teal-500 
                       transition duration-300 shadow-lg"
          >
            Our Classes
          </Link>

          <Link
            to="/community"
            className="px-8 py-4 rounded-full font-semibold 
                       border border-white/50 text-white 
                       hover:bg-white hover:text-black 
                       transition duration-300"
          >
            Join Now
          </Link>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black"></div>
    </section>
  );
};

export default Banner;
