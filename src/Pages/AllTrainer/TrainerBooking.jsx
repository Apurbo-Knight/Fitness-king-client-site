import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
  console.log(trainer);

  console.log(selectedOption?.value);
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
    console.log(bookedData);
    if (bookedData?.trainer) {
        navigate("/paymentPage", { state: { bookedData } });
      }
  

    // Navigate to the new page, passing the bookedData as state
  };

  return (
    <div className="pt-20 bg-black min-h-screen">
      <Helmet>
                      <title>
                          Fitness king | Book Trainer
                      </title>
                  </Helmet>
      <h2 className="text-center text-5xl mb-16 text-white">
        Book{" "}
        <span className="text-teal-400 border-b-2 border-teal-400">
          Trainer
        </span>
      </h2>
      <div className="flex flex-col items-center ">
        <div className="flex flex-col items-center">
          <img
            className="rounded-full w-56 mb-2 border-4 border-teal-400"
            src={trainer?.img}
            alt=""
          />
          <h1 className="font-semibold text-teal-400 text-3xl">
            {trainer?.name}
          </h1>
        </div>
        <div>
          <div className="flex flex-col items-center">
            <p className="text-teal-400 font-semibold text-2xl">
              {trainer?.years_of_experience} years of experience
            </p>
            <p className="text-xl text-teal-400 font-semibold">
              Selected Slot: {slot}
            </p>
            <p className="text-lg text-teal-400 font-semibold">
              {" "}
              <span className="font-bold">"{trainer.specialist_on}"</span>
            </p>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} action="">
        <Select
          className="w-1/3 mx-auto bg-teal-900"
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
        <div className="flex justify-center mt-2">
          <Link >
            <button onClick={handleSubmit} type="submit" className="bg-teal-400 p-2 rounded-md text-white">
              Join Now
            </button>
          </Link>
        </div>
      </form>
      <div className="flex flex-col md:flex-row gap-6 p-6">
        {/* Basic Membership */}
        <div className="border-teal-400 border-2 rounded-lg shadow-md p-4 bg-teal-900 w-full md:w-1/3">
          <h2 className="text-xl font-bold mb-2 text-teal-400">Basic Membership</h2>
          <p className="text-teal-400">- Unlimited access to gym floor during operating hours</p>
          <p className="text-teal-400">- Free orientation session for beginners</p>
          <p className="text-teal-400">- Access to basic cardio and strength machines</p>
          <h2 className="text-lg font-bold mt-4 text-teal-400">$10</h2>
        </div>

        {/* Standard Membership */}
        <div className="border-teal-400 border-2 rounded-lg shadow-md p-4 bg-teal-900 w-full md:w-1/3">
          <h2 className="text-xl font-bold mb-2 text-teal-400">Standard Membership</h2>
          <p className="text-teal-400">- All-day access to the gym, including weekends</p>
          <p className="text-teal-400">
            - Participation in select group classes (e.g., aerobics, pilates)
          </p>
          <p className="text-teal-400">- Complimentary access to locker rooms with towel service</p>
          <h2 className="text-lg font-bold mt-4 text-teal-400">$50</h2>
        </div>

        {/* Premium Membership */}
        <div className="border-teal-400 border-2 rounded-lg shadow-md p-4 bg-teal-900 w-full md:w-1/3">
          <h2 className="text-xl font-bold mb-2 text-teal-400">Premium Membership</h2>
          <p className="text-teal-400">- 24/7 access to the gym</p>
          <p className="text-teal-400">- Unlimited participation in all group classes</p>
          <p className="text-teal-400">- Personal trainer sessions and advanced equipment access</p>
          <h2 className="text-lg font-bold mt-4 text-teal-400">$100</h2>
        </div>
      </div>
    </div>
  );
};

export default TrainerBooking;
