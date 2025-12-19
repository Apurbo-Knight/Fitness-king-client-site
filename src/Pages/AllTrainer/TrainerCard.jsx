import React from "react";
import { Link } from "react-router-dom";

const TrainerCard = ({ trainer }) => {
  const { _id, img, name, years_of_experience, time_slot } = trainer || {};

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg border-2 border-teal-400 bg-gray-900">
      {/* Trainer Image */}
      <img
        src={img}
        alt={name}
        className="w-full h-72 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4 transition-all duration-500 group-hover:bg-black/70">
        {/* Name */}
        <h2 className="text-xl font-bold text-teal-400 mb-1">{name}</h2>

        {/* Experience */}
        <p className="text-gray-200 text-sm mb-1">
          <span className="font-semibold">{years_of_experience}</span> years of experience
        </p>

        {/* Time Slots */}
        <p className="text-gray-200 text-sm mb-3">
          <span className="font-semibold">{time_slot}</span> Available
        </p>

        {/* Button */}
        <Link
          to={`/trainerDetails/${_id}`}
          className="inline-block w-full text-center py-2 rounded-lg bg-teal-400 border border-teal-600 text-gray-900 font-semibold hover:bg-teal-600 transition duration-300"
        >
          Know More
        </Link>
      </div>
    </div>
  );
};

export default TrainerCard;
