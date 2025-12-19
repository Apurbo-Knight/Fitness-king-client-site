import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";

const TrainerDetails = () => {
  const { id } = useParams();
  const { data: trainer, isLoading } = useQuery({
    queryKey: ["trainer", id],
    queryFn: async () => {
      const res = await axios.get(
        `https://assignment-12-server-iota-ruby.vercel.app/users/${id}`
      );
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-teal-400">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen pt-28 pb-16 px-4 md:px-0">
      <Helmet>
        <title>Fitness King | Trainer Details</title>
      </Helmet>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">

        {/* Trainer Info */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="w-48 h-48 rounded-full border-4 border-teal-400 overflow-hidden mb-6">
            <img
              src={trainer?.img}
              alt={trainer?.name}
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-teal-400 mb-4">
            {trainer?.name}
          </h1>

          <div className="flex flex-col md:flex-row gap-6 text-white text-lg">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-extrabold text-teal-400">
                {trainer?.years_of_experience}
              </span>
              <p>Years of Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-extrabold text-teal-400">
                {trainer?.time_slot}
              </span>
              <p>Available Slots</p>
            </div>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
          <p className="text-teal-400 text-lg font-semibold mb-4">Available Slots:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {trainer?.slots_are?.map((slot, index) => (
              <Link
                key={index}
                to={`/bookingTrainer/${trainer._id}/${slot}`}
                className="px-4 py-2 bg-gray-200 text-gray-900 rounded-md font-semibold text-center hover:bg-teal-400 hover:text-white transition duration-300"
              >
                {slot}
              </Link>
            ))}
          </div>
          {/* Become a Trainer Button */}
      <div className="flex justify-center mt-12">
        <Link
          to="/beATrainer"
          className="px-6 py-3 rounded-full text-white bg-teal-400 font-semibold hover:bg-white hover:text-teal-400 transition duration-300"
        >
          Become a Trainer
        </Link>
      </div>
        </div>
      </div>

      
    </div>
  );
};

export default TrainerDetails;
