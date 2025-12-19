import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;

  const { data: users = {} } = useQuery({
    queryKey: ["trainers", email],
    queryFn: async () => {
      const res = await axios.get(
        `https://assignment-12-server-iota-ruby.vercel.app/users/role/${email}`
      );
      return res.data;
    },
    enabled: !!email,
  });

  return (
    <div className="bg-black min-h-screen flex flex-col items-center px-4 py-12">
      <Helmet>
        <title>Fitness King | Profile</title>
      </Helmet>

      <div className="bg-gray-900 border-2 border-teal-400 rounded-2xl shadow-lg p-8 md:p-12 w-full max-w-sm flex flex-col items-center gap-4">
        <img
          className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-teal-400 shadow-md"
          src={user?.photoURL}
          alt={user?.displayName}
        />

        <h2 className="text-teal-400 text-xl md:text-2xl font-semibold">
          {user?.displayName}
        </h2>
        <p className="text-teal-200 text-sm md:text-base">{user?.email}</p>
        <span className="bg-gray-800 text-teal-400 px-3 py-1 rounded-full font-medium">
          {users?.role || "Member"}
        </span>
      </div>

      <h2 className="text-teal-400 font-semibold text-center text-2xl md:text-4xl mt-12">
        Thank you for staying with us
      </h2>
    </div>
  );
};

export default Profile;
