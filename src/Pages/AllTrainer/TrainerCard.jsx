import React from "react";
import { Link } from "react-router-dom";

const TrainerCard = ({ trainer }) => {
  const { _id, img, name, years_of_experience, time_slot } = trainer || {};
  return (
    <div>
      <div className="lg:m-5 group relative border-2 border-teal-400 rounded-md">
        <img src={img} alt="" className="rounded-t-md" />
        <div className="absolute bottom-0 w-full ">
          <div className=" w-full h-full  border-b-[3rem] group-hover:border-b-[110px] duration-500 border-b-teal-400">
            <h1 className="absolute  group-hover:right-0 group-hover:duration-300 2xl:text-xl font-semibold p-2 text-white ">
              {name}
            </h1>
          </div>
          <p className="absolute bottom-[4.5rem] p-2 text-white opacity-0 group-hover:opacity-100 group-hover:duration-300 group-hover:delay-300 ">
            <span className="font-semibold">{time_slot} </span>
            Available time slots
          </p>
          <p className="absolute bottom-[3rem]  p-2 text-white opacity-0 group-hover:opacity-100 group-hover:duration-300 group-hover:delay-300 ">
            <span className="font-semibold">{years_of_experience}</span> years
            of experience
          </p>
          <div className="mb-4 absolute bottom-[.05rem] w-full ">
            <Link
              to={`/trainerDetails/${_id}`}
              className="rounded-md px-4 mx-2 py-2   text-gray-200  bg-teal-400  border border-teal-600 hover:bg-teal-600 duration-200  opacity-0 group-hover:opacity-100 group-hover:duration-300 group-hover:delay-300 "
            >
              Know more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
