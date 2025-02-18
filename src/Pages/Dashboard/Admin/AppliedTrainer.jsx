import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet-async";

const AppliedTrainer = () => {
  const { data: trainer = [] } = useQuery({
    queryKey: ["trainer"], // Include email in queryKey for dependency tracking
    queryFn: async () => {
      const res = await axios.get("https://assignment-12-server-iota-ruby.vercel.app/beATrainer");
      return res.data;
    },
  });
  console.log(trainer);
  return (
    <div className="p-4">
      <Helmet>
                      <title>
                          Fitness king | Applied Trainers
                      </title>
                  </Helmet>
      <h2 className=" font-semibold mb-10 text-center text-5xl text-white">Applied <span className="
      text-teal-400 border-b-4 border-teal-400">Trainer</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainer.map((singleTrainer, index) => (
          <div
            key={index}
            className="border border-teal-400 rounded-lg shadow-md overflow-hidden bg-black"
          >
            <img
              src={singleTrainer.profileImage}
              alt={`${singleTrainer.fullName}'s profile`}
              className="rounded-full h-20 w-20 mx-4 mt-4 border-2 border-teal-400"
            />
            <div className="p-4">
              <h3 className="text-lg text-teal-400 font-bold mb-2">
                {singleTrainer.fullName}
              </h3>
              <p className="text-gray-600">
                <span className="font-semibold">Age:</span> {singleTrainer.age}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Available Time:</span>{" "}
                {singleTrainer.availableTime}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Other Info:</span>{" "}
                {singleTrainer.otherInfo}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Skills:</span>{" "}
                {singleTrainer.skills.join(", ")}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Available Days:</span>{" "}
                {singleTrainer.availableDays.join(", ")}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Status:</span>{" "}
                <span
                  className={`${
                    singleTrainer.status === "pending"
                      ? "text-yellow-700"
                      : "text-green-900"
                  } font-medium`}
                >
                  {singleTrainer.status}
                </span>
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href={`mailto:${singleTrainer.email}`}
                  className="text-teal-400 hover:underline"
                >
                  {singleTrainer.email}
                </a>
              </p>
            </div>
            <div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedTrainer;
