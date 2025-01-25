import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import useRole from "../../Hooks/useRole";
import { Helmet } from "react-helmet-async";
// import { AuthContext } from "../../Provider/AuthProvider";

const CommunityPage = () => {
  const queryClient = useQueryClient();
  
  // Fetch forums
  const { data:forums=[]  } = useQuery({
    queryKey: ["forums"],
    queryFn: async () => {
      const res = await axios.get("https://assignment-12-server-iota-ruby.vercel.app/forums");
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
      queryClient.invalidateQueries(["forums"]); // Refetch forums on success
    },
  });

  const handleLike = (id) => {
    updateCounts.mutate({ id, action: "like" });
  };

  const handleDislike = (id) => {
    updateCounts.mutate({ id, action: "dislike" });
  };
  
  

  return (
    <div className="">
      <Helmet>
                      <title>
                          Fitness king | Community
                      </title>
                  </Helmet>
        <div className="mx-auto p-10 bg-black min-h-screen">
      <h1 className="text-5xl  text-white text-center mb-6 pb-10 pt-10">
         All <span className="text-teal-400 border-b-4 border-teal-400"> Forums</span>
      </h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-[10%]">
        {forums.map((forum) => (
          <div
            key={forum?._id}
            className="shadow-lg rounded-lg p-4 bg-teal-900 border-2 border-teal-400"
          >
            <div className="flex items-center gap-5 mb-4 ">
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
            <div className="text-xl font-bold mb-2 text-teal-400">
              {forum?.title || "Untitled Forum"}
            </div>
            <div className="mb-4 text-teal-400">
              {forum?.description || "No description provided."}
            </div>
            <div className="flex justify-between w-full pt-2 border-t border-teal-400 mt-2">
              <button
                onClick={() => handleLike(forum._id)}
                className="bg-teal-900 border border-teal-400 text-white px-4 py-2 rounded hover:bg-green-600 mt-4"
              >
                Like ({forum?.likeCount || 0})
              </button>
              <button
                onClick={() => handleDislike(forum._id)}
                className="bg-teal-900 border border-teal-500 text-white px-4 py-2 rounded hover:bg-red-900 mt-4"
              >
                Dislike ({forum?.dislikeCount || 0})
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CommunityPage;
