import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const FeaturedClass = () => {
  const { data: classes = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:1000/class");
      return res.data;
    },
  });

  return (
    <div>
      <div className="bg-black pb-10">
        <h2 className="text-2xl xl:text-5xl text-center text-white  ">
          Featured{" "}
          <span className="text-teal-400 border-b-4 border-teal-400">
            Classes
          </span>
        </h2>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-5  xl:px-40">
            {classes?.slice(0,6).map((classItem) => (
              <div
                key={classItem._id}
                className="  overflow-hidden group rounded-md shadow-lg"
              >
                <img
                  src={classItem.image}
                  alt=""
                  className="w-full  group-hover:transform group-hover:scale-110 duration-500 rounded-md "
                />
                <div className="p-4 bg-black">
                  <h3 className="font-semibold text-xl  text-teal-400">
                    {classItem.name}  <span className="text-black bg-teal-400 px-1 rounded-full"> {classItem.count}</span>
                  </h3>
                  <p className=" text-teal-400">{classItem.details}</p>
                  <p className=" text-teal-400">
                    {classItem.classDuration} Hours Class Duration
                  </p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedClass;
