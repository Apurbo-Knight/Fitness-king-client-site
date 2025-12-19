import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const Forum = () => {
  const { data: forums = [] } = useQuery({
    queryKey: ["forums"],
    queryFn: async () => {
      const res = await axios.get(
        "https://assignment-12-server-iota-ruby.vercel.app/forums"
      );
      return res.data;
    },
  });

  return (
    <section className="bg-black py-20">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-5xl font-bold text-white">
          Latest{" "}
          <span className="text-teal-400 border-b-4 border-teal-400">
            Forums
          </span>
        </h1>
      </div>

      {/* Forum Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5 md:px-[10%]">
        {forums.slice(0, 6).map((forum) => (
          <div
            key={forum?._id}
            className="group bg-gradient-to-br from-teal-900/80 to-black
                       border border-teal-400/30 rounded-2xl p-6
                       shadow-lg hover:shadow-teal-500/30
                       transition-all duration-300 hover:-translate-y-1"
          >
            {/* User Info */}
            <div className="flex items-center gap-5 mb-5">
              <img
                src={forum?.image}
                alt={forum?.title || "Forum Image"}
                className="w-20 h-20 rounded-full object-cover
                           border-2 border-teal-400"
              />
              <div>
                <h3 className="text-xl font-semibold text-teal-400">
                  {forum?.name || "Guest User"}
                </h3>
                <p className="text-sm text-teal-300">
                  {forum?.role || "Member"}
                </p>
              </div>
            </div>

            {/* Forum Title */}
            <h2 className="text-lg md:text-xl font-bold text-teal-300 mb-3 break-words">
              {forum?.title || "Untitled Forum"}
            </h2>

            {/* Forum Description */}
            <p className="text-sm md:text-base text-teal-200 leading-relaxed break-words">
              {forum?.description || "No description provided."}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Forum;
