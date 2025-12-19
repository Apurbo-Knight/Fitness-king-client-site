import React from "react";
import { GoDotFill } from "react-icons/go";
import { GiWeightLiftingUp } from "react-icons/gi";
import { motion } from "framer-motion";
import about from "../../assets/about.jpg";

const features = [
  
  {
    title: "Top-Notch Equipment",
    desc: "Cutting-edge machines and tools to ensure a safe and effective workout experience.",
  },
  {
    title: "Supportive Community",
    desc: "Train in an environment that celebrates progress and keeps you motivated.",
  },
  {
    title: "Expert Guidance",
    desc: "Certified trainers dedicated to helping you master basics and reach advanced goals.",
  },
  {
    title: "Holistic Wellness",
    desc: "Recovery services, nutrition guidance, and balanced fitness programs for total health.",
  },
  {
    title: "A Decade of Expertise",
    desc: "10+ years of experience delivering proven training programs with real results.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-teal-500/10 blur-3xl"></div>

      <div className="relative py-24 px-6 md:px-16 xl:px-32">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="block text-gray-400 uppercase tracking-widest text-sm mb-2">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            <span className="text-white">About </span>
            <span className="text-teal-400 relative inline-block">
              FITNESS KING
              <span className="absolute left-0 -bottom-2 w-full h-1 bg-teal-400 rounded-full"></span>
            </span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="lg:grid grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-10">
              {/* <GiWeightLiftingUp className="text-teal-400 text-6xl" /> */}
            </div>

            <div className="grid gap-6">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-6 rounded-xl bg-gray-900/70 
                             border border-teal-500/20 hover:border-teal-400
                             hover:bg-gray-900 transition-all"
                >
                  <GoDotFill className="text-teal-400 text-xl mt-1" />
                  <div>
                    <h4 className="text-teal-400 font-semibold text-lg mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group mt-16 lg:mt-0"
          >
            <div
              className="absolute inset-0 bg-teal-400 blur-3xl opacity-20 
                            group-hover:opacity-40 transition"
            ></div>
            <img
              src={about}
              alt="Fitness training"
              className="relative rounded-3xl border border-teal-500/30
                         group-hover:scale-95 transition duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
