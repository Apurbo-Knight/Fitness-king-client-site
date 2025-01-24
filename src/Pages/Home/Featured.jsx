import nutra from "../../assets/nutra.jpeg"
import yoga from "../../assets/yoga.jpeg"
import beginner from "../../assets/beginner.jpeg"
import masterB from "../../assets/masterB.webp"
import hybrid from "../../assets/hybrid.jpeg"
import group from "../../assets/group.jpg"


const Featured = () => {
  return (
    <div className="bg-black px-24 p-20">
      <h2 className="text-center text-2xl md:text-5xl py-10">
        <span className="text-white">Our </span>
        <span className="text-teal-400 border-b-4 border-teal-400">Features</span>
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="text-center text-white border-2 border-transparent hover:border-teal-400 rounded-md duration-500 p-2 pt-6 ">
          <img
            
            src={nutra}
            alt=""
            className="w-32 h-32 mx-auto rounded-full hover:transform hover:scale-125 duration-500 "
          />
          <h1 className="text-2xl font-semibold my-3 text-teal-400 ">
            Nutrition for Growth
          </h1>
          <p className="text-sm text-gray-400 ">
            Providing dietary strategies to support fitness goals. Meal plans
            tailored for muscle gain, fat loss, or general health.
          </p>
        </div>
        <div className=" text-center text-white border-2 border-transparent hover:border-teal-400 rounded-md duration-500 p-2 pt-6 ">
          <img
            src={yoga}
            alt=""
            className="w-32 h-32 mx-auto rounded-full hover:transform hover:scale-125 duration-500 "
          />
          <h1 className="text-2xl font-semibold my-3 text-teal-400 ">
            Mobility & Flexibility
          </h1>
          <p className="text-sm text-gray-400 ">
            Enhancing range of motion and joint health. Yoga and Pilates classes
            tailored for mobility.
          </p>
        </div>
        <div className="text-center text-white border-2 border-transparent hover:border-teal-400 rounded-md duration-500 p-2 pt-6 ">
          <img
            src={beginner}
            alt=""
            className="w-32 h-32 mx-auto rounded-full hover:transform hover:scale-125 duration-500 "
          />
          <h1 className="text-2xl font-semibold my-3 text-teal-400 ">
            Basics in Bodybuilding
          </h1>
          <p className="text-sm text-gray-400 ">
            Building a solid foundation in fitness for beginners. Step-by-step
            programs to build strength and endurance gradually.
          </p>
        </div>
        <div className="text-center text-white border-2 border-transparent hover:border-teal-400 rounded-md duration-500 p-2 pt-6 ">
          <img
            src={masterB}
            alt=""
            className="w-32 h-32 mx-auto rounded-full  hover:transform hover:scale-125 duration-500 "
          />
          <h1 className="text-2xl font-semibold my-3 text-teal-400 ">
            Mastery in Bodybuilding
          </h1>
          <p className="text-sm text-gray-400 ">
            Building strength and physique through discipline and advanced
            techniques.
          </p>
        </div>
        <div className="text-center text-white border-2 border-transparent hover:border-teal-400 rounded-md duration-500 p-2 pt-6 ">
          <img
            src={hybrid}
            alt=""
            className="w-32 h-32 mx-auto rounded-full bg-cover hover:transform hover:scale-125 duration-500 "
          />
          <h1 className="text-2xl font-semibold my-3 text-teal-400 ">
            Hybrid Training Zone
          </h1>
          <p className="text-sm text-gray-400 ">
            Combining multiple disciplines for a versatile fitness approach.
            Access to multi-functional equipment.
          </p>
        </div>
        <div className="text-center text-white border-2 border-transparent hover:border-teal-400 rounded-md duration-500 p-2 pt-6 ">
          <img
            src={group}
            alt=""
            className="w-32 h-32 mx-auto rounded-full bg-cover hover:transform hover:scale-125 duration-500 "
          />
          <h1 className="text-2xl font-semibold my-3 text-teal-400 "> Group Challenges </h1>
          <p className="text-sm text-gray-400 ">
            Building camaraderie and encouraging participation. Monthly fitness
            challenges with rewards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
