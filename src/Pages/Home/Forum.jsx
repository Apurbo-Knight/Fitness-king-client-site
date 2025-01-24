import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const Forum = () => {
  const { data: forums = [] } = useQuery({
    queryKey: ["forums"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:1000/forums");
      return res.data;
    },
  });

  return (
    <div>
      <div className="  bg-black ">
        <h1 className="md:text-5xl text-2xl  text-white text-center mb-6 py-10 ">
          Latest
          <span className="text-teal-400 border-b-4 border-teal-400">
            {" "}
            Forums
          </span>
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2  gap-6 px-[10%]">
          {forums.slice(0,6).map((forum) => (
            <div
              key={forum?._id}
              className="shadow-lg rounded-lg p-4 bg-teal-900 border-2 border-teal-400"
            >
              <div className="flex items-center gap-5 mb-4 break-words">
                <img
                  src={forum?.image}
                  alt={forum?.title || "Forum Image"}
                  className="w-20 h-20 rounded-full object-cover border-teal-400 border-2"
                />
                <div>
                  <div className="font-semibold text-xl text-teal-400">
                    {forum?.name || "Guest User"}
                  </div>
                  <p className="text-teal-400">{forum?.role || "Member"}</p>
                </div>
              </div>

              <p className="text-xl font-bold mb-2 text-teal-400 break-words">
                {forum?.title || "Untitled Forum"}
              </p>

              <p className="mb-4 text-teal-400 break-words">
                {forum?.description || "No description provided."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forum;
