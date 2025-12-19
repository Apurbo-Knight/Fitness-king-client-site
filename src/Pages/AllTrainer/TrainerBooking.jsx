import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const TrainerBooking = () => {
  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState(null);
  const { id, slot } = useParams();
  const navigate = useNavigate();

  const { data: trainer = [] } = useQuery({
    queryKey: ["trainer", slot],
    queryFn: async () => {
      const res = await axios.get(
        `https://assignment-12-server-iota-ruby.vercel.app/trainers/${id}/${slot}`
      );
      return res.data[0];
    },
  });

  const options = [
    { value: "10", label: "Basic" },
    { value: "50", label: "Standard" },
    { value: "100", label: "Premium" },
  ];

  const bookedData = {
    userEmail: user?.email,
    userName: user?.displayName,
    userImage: user?.photoURL,
    trainer,
    slot: slot,
    packageName: selectedOption?.label,
    packagPrice: selectedOption?.value,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookedData?.trainer && selectedOption) {
      navigate("/paymentPage", { state: { bookedData } });
    }
  };

  return (
    <div className="pt-20 bg-black min-h-screen">
      <Helmet>
        <title>Fitness King | Book Trainer</title>
      </Helmet>

      <h2 className="text-center text-4xl md:text-5xl mb-12 text-white font-bold">
        Book{" "}
        <span className="text-teal-400 border-b-2 border-teal-400">
          Trainer
        </span>
      </h2>

      <div className="flex flex-col items-center mb-12">
        <img
          className="rounded-full w-48 md:w-56 mb-4 border-4 border-teal-400"
          src={trainer?.img}
          alt={trainer?.name}
        />
        <h1 className="text-2xl md:text-3xl font-semibold text-teal-400">
          {trainer?.name}
        </h1>
        <p className="text-teal-400 font-medium mt-2">
          {trainer?.years_of_experience} years of experience
        </p>
        <p className="text-teal-400 font-medium mt-1">Slot: {slot}</p>
        <p className="text-teal-400 font-medium mt-1">
          Specialist: <span className="font-bold">{trainer?.specialist_on}</span>
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center mb-16 gap-4"
      >
        <Select
          className="w-64 md:w-80 bg-teal-900 text-white"
          placeholder="Select Package"
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
        <button
          type="submit"
          className="bg-teal-400 hover:bg-teal-500 transition-colors text-black font-semibold px-6 py-2 rounded-md"
        >
          Join Now
        </button>
      </form>

      <div className="grid md:grid-cols-3 gap-6 px-4 md:px-36 pb-12">
        {/* Basic */}
        <div className="bg-teal-900 border-2 border-teal-400 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold text-teal-400 mb-3">Basic Membership</h3>
          <ul className="text-teal-400 mb-4 space-y-1">
            <li>- Unlimited gym access during operating hours</li>
            <li>- Free orientation session for beginners</li>
            <li>- Access to basic cardio and strength machines</li>
          </ul>
          <p className="text-lg font-bold text-teal-400">$10</p>
        </div>

        {/* Standard */}
        <div className="bg-teal-900 border-2 border-teal-400 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold text-teal-400 mb-3">Standard Membership</h3>
          <ul className="text-teal-400 mb-4 space-y-1">
            <li>- All-day access, including weekends</li>
            <li>- Participation in select group classes</li>
            <li>- Locker rooms with towel service</li>
          </ul>
          <p className="text-lg font-bold text-teal-400">$50</p>
        </div>

        {/* Premium */}
        <div className="bg-teal-900 border-2 border-teal-400 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold text-teal-400 mb-3">Premium Membership</h3>
          <ul className="text-teal-400 mb-4 space-y-1">
            <li>- 24/7 gym access</li>
            <li>- Unlimited group classes</li>
            <li>- Personal trainer sessions & advanced equipment</li>
          </ul>
          <p className="text-lg font-bold text-teal-400">$100</p>
        </div>
      </div>
    </div>
  );
};

export default TrainerBooking;
