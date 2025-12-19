import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet-async";

const CommunityPage = () => {
  const queryClient = useQueryClient();

  // Fetch forums
  const { data: forums = [] } = useQuery({
    queryKey: ["forums"],
    queryFn: async () => {
      const res = await axios.get(
        "https://assignment-12-server-iota-ruby.vercel.app/forums"
      );
      return res.data;
    },
  });

  // Mutation for updating likes/dislikes
  const updateCounts = useMutation({
    mutationFn: async ({ id, action }) => {
      const res = await axios.patch(
        `https://assignment-12-server-iota-ruby.vercel.app/patch/forums/${id}`,
        { action }
      );
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["forums"]);
    },
  });

  const handleLike = (id) => updateCounts.mutate({ id, action: "like" });
  const handleDislike = (id) => updateCounts.mutate({ id, action: "dislike" });

  return (
    <div className="bg-black min-h-screen px-4 md:px-36 py-10">
      <Helmet>
        <title>Fitness King | Community</title>
      </Helmet>

      <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-10">
        All{" "}
        <span className="text-teal-400 border-b-4 border-teal-400">Forums</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {forums.map((forum) => (
          <div
            key={forum?._id}
            className="bg-gray-900 border-2 border-teal-400 rounded-xl shadow-lg p-5 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={forum?.image || "/placeholder.png"}
                alt={forum?.title || "Forum"}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-teal-400"
              />
              <div>
                <h3 className="text-teal-400 font-semibold text-lg md:text-xl">
                  {forum?.name || "Guest User"}
                </h3>
                <p className="text-teal-300 text-sm md:text-base">{forum?.role || "Member"}</p>
              </div>
            </div>

            <h4 className="text-teal-400 font-bold text-lg md:text-xl mb-2">
              {forum?.title || "Untitled Forum"}
            </h4>
            <p className="text-teal-300 text-sm md:text-base mb-4">
              {forum?.description || "No description provided."}
            </p>

            <div className="flex justify-between mt-auto gap-2">
              <button
                onClick={() => handleLike(forum._id)}
                className="flex-1 bg-teal-700 hover:bg-green-600 transition-colors text-white px-3 py-2 rounded-lg font-semibold"
              >
                👍 Like ({forum?.likeCount || 0})
              </button>
              <button
                onClick={() => handleDislike(forum._id)}
                className="flex-1 bg-teal-700 hover:bg-red-700 transition-colors text-white px-3 py-2 rounded-lg font-semibold"
              >
                👎 Dislike ({forum?.dislikeCount || 0})
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;
