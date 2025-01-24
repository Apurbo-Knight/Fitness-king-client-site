import React from "react";
import about from "../../assets/about.jpg";
import { GoDotFill } from "react-icons/go";
import { GiWeightLiftingUp } from "react-icons/gi";

const About = () => {
  return (
    <div className="bg-black">
      <h2 className="text-center text-2xl md:text-5xl">
        <span className="text-white">About </span>
        <span className="text-teal-400 border-b-4 border-teal-400">FITNESS KING</span>
      </h2>
      <div className="lg:flex items-center py-20 px-10 xl:px-36 gap-10 2xl:gap-36">
        <div className="flex-1 text-justify  mb-10">
          <div className="flex justify-center">
            <GiWeightLiftingUp className="text-teal-400 text-5xl mb-5" />
          </div>
          <ul>
            <p>
              <span className="text-teal-400 font-bold flex items-center -ml-4">
                <GoDotFill className="text-teal-400" />
                Comprehensive Training Options:
              </span>{" "}
              <span className="text-white font-light ">
                From bodybuilding and functional fitness to yoga and endurance,
                we cater to every fitness goal.
              </span>
            </p>
            <p>
              <GoDotFill />
              <span className="text-teal-400 font-bold flex items-center -ml-4">
                <GoDotFill className="text-teal-400" />
                Top-Notch Equipment:
              </span>{" "}
              <span className="text-white font-light ">
                Featuring cutting-edge machines and tools to ensure a safe and
                effective workout experience.
              </span>
            </p>
            <p>
              <GoDotFill />
              <span className="text-teal-400 font-bold flex items-center -ml-4">
                <GoDotFill className="text-teal-400" />
                Supportive Community:
              </span>{" "}
              <span className="text-white font-light ">
                Join a community that celebrates your progress and motivates you
                to keep going.
              </span>
            </p>
            <p>
              <span className="text-teal-400 font-bold flex items-center -ml-4">
                <GoDotFill className="text-teal-400" />
                Expert Guidance:
              </span>{" "}
              <span className="text-white font-light  ">
                Certified trainers and coaches dedicated to helping you master
                the basics and achieve advanced goals.
              </span>
            </p>
            <p>
              <span className="text-teal-400 font-bold flex items-center -ml-4">
                <GoDotFill className="text-teal-400" />
                Holistic Wellness:
              </span>{" "}
              <span className="text-white font-light  ">
                We go beyond physical fitness, offering recovery services,
                nutritional support, and a welcoming community to ensure a
                balanced approach to health.
              </span>
            </p>
            <p>
              <span className="text-teal-400 font-bold flex items-center -ml-4">
                <GoDotFill className="text-teal-400" />A Decade of Expertise:
              </span>{" "}
              <span className="text-white font-light  ">
                With 10 years of experience, we know what works and what
                doesn’t. Our trainers are highly skilled, and our programs are
                backed by proven results.
              </span>
            </p>
          </ul>
        </div>
        <div className="flex-1 border-y-8 hover:border-4 rounded-3xl border-teal-400">
          <img
            className=" rounded-3xl hover:scale-95 duration-500"
            src={about}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
