import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const { data:users={} } = useQuery({
    queryKey: ["trainers", email],  // Include email in queryKey for dependency tracking
    queryFn: async () => {
      const res = await axios.get(`http://localhost:1000/users/role/${email}`);
      return res.data;
    },
    enabled: !!email,
  });
//   console.log(user);
  return (
    <div className="flex items-center flex-col">
      <div className="flex flex-col items-center justify-center rounded-xl border-2 border-teal-400 w-3/4 md:w-1/4 h-60 gap-2">
        <img
          className="rounded-full w-20 h-20 border-2 border-teal-400"
          src={user?.photoURL}
          alt=""
        />
        
        <h2 className="text-teal-400 font-semibold ">{user?.displayName}</h2>
        <h2 className="text-teal-400 font-semibold ">{user?.email}</h2>
        <h2 className="text-teal-400 font-semibold bg-slate-900 px-2 py-1 rounded-2xl">{users?.role}</h2>
      </div>
        <h2 className="text-teal-400 font-semibold sm:text-5xl mt-20">Thank you for staying with us.</h2>
    </div>
  );
};

export default Profile;
