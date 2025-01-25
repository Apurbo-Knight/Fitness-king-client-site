import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

const TrainerDetails = () => {
  const { id } = useParams();
  const {
    data: trainer,
    isloading,
    refetch,
  } = useQuery({
    queryKey: ["trainer", id],
    queryFn: async () => {
      const res = await axios.get(`https://assignment-12-server-iota-ruby.vercel.app/users/${id}`);
      return res.data;
    },
  });
  if (isloading) {
    return <Spinner aria-label="Extra large spinner example" size="xl" />;
  }
  console.log(trainer);
  return (
    <div className="bg-black sm: pt-24 min-h-screen">
      <div className="pb-16  sm:w-[100%] mx-auto">
        {/* //second section */}
        <div className=" items-center justify-center sm:flex sm:justify-between w-full md:w-[60%] mx-auto py-12 px-2 ">
          <div>
            <div className=" text-white ">
              <div className=" w-[12rem] rounded-full border-2 border-teal-400  mb-5">
                <img
                  src={trainer?.img}
                  alt=""
                  className="w-full rounded-full "
                />
              </div>
              <h1 className="text-3xl font-semibold text-teal-400">
                {trainer?.name}
              </h1>
            </div>
            <div className="sm:text-white  ">
              <div className="sm:text-center">
                <span className=" text-3xl font-semibold text-teal-400 ">
                  {trainer?.years_of_experience} 
                </span>
                <p>years of eperience</p>
              </div>
              <div className="sm:text-center">
                <span className=" text-3xl text-teal-400 font-semibold ">
                  {trainer?.time_slot} slots
                </span>
                <p className="text-lg">Available</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <p className="text-teal-400"> Available Slots:</p>
            <div className=" text-xl text-teal-400 font-extrabold ">
              {trainer?.slots_are?.map((slot, index) => (
                <li key={index} className="list-none">
                  <button className=" my-3 ">
                    <Link
                      to={`/bookingTrainer/${trainer._id}/${slot}`}
                      className="px-4 py-2 hover:text-white bg-gray-200 hover:bg-teal-400 rounded-md duration-500 "
                    >
                      {slot}
                    </Link>
                  </button>
                </li>
              ))}
            </div>
          </div>
        </div>

        <div className="sm:flex items-center justify-center mt-6 lg:mt-16 ">
          <Link
            to={"/beATrainer"}
            className="px-5 py-2 rounded-md text-white hover:text-teal-400 bg-teal-400 hover:bg-white duration-500  "
          >
            Become a Trainer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainerDetails;
