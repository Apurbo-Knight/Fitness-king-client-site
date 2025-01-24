import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const ManageSlots = () => {
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
  console.log(users);
    return (
        <div>
            ManageSlots
        </div>
    );
};

export default ManageSlots;