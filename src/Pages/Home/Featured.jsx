import { motion } from "framer-motion";

import nutra from "../../assets/nutra.jpeg";
import yoga from "../../assets/yoga.jpeg";
import beginner from "../../assets/beginner.jpeg";
import masterB from "../../assets/masterB.webp";
import hybrid from "../../assets/hybrid.jpeg";
import group from "../../assets/group.jpg";

const features = [
  {
    title: "Nutrition for Growth",
    desc: "Personalized meal strategies for muscle gain, fat loss, and overall health.",
    img: nutra,
  },
  {
    title: "Mobility & Flexibility",
    desc: "Yoga and Pilates programs designed to improve flexibility and joint health.",
    img: yoga,
  },
  {
    title: "Basics in Bodybuilding",
    desc: "Beginner-friendly programs to build strength and endurance step by step.",
    img: beginner,
  },
  {
    title: "Mastery in Bodybuilding",
    desc: "Advanced training techniques focused on strength, symmetry, and discipline.",
    img: masterB,
  },
  {
    title: "Hybrid Training Zone",
    desc: "Multi-discipline workouts combining strength, cardio, and functional training.",
    img: hybrid,
  },
  {
    title: "Group Challenges",
    desc: "Community-driven fitness challenges with motivation, rewards, and fun.",
    img: group,
  },
];

const Featured = () => {
  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black py-24 px-6 md:px-16 xl:px-32">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="text-gray-400 uppercase tracking-widest text-sm">
          What We Offer
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-2">
          <span className="text-white">Our </span>
          <span className="text-teal-400 relative">
            Features
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-teal-400 rounded-full"></span>
          </span>
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-gray-900/70 backdrop-blur rounded-2xl p-8 
                       border border-teal-500/20 hover:border-teal-400
                       transition-all duration-300"
          >
            {/* Image */}
            <div className="relative w-28 h-28 mx-auto mb-6">
              <div
                className="absolute inset-0 rounded-full bg-teal-400 blur-xl 
                           opacity-20 group-hover:opacity-40 transition"
              ></div>
              <img
                src={item.img}
                alt={item.title}
                className="relative w-full h-full object-cover rounded-full 
                           border border-teal-500/30
                           group-hover:scale-110 transition duration-300"
              />
            </div>

            {/* Text */}
            <h3 className="text-xl font-semibold text-teal-400 mb-3 text-center">
              {item.title}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed text-center">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
