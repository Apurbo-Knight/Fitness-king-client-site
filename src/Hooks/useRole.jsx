import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Spinner } from 'flowbite-react';

const useRole = () => {
    const {user,loading} = useContext(AuthContext);
    // if(loading){
    //     return <Spinner aria-label="Extra large spinner example" size="xl" />
    // }
    const {data:role={}, isLoading} = useQuery({
        queryKey:['role', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axios.get(`http://localhost:1000/users/role/${user?.email}`);
            return res.data.role;
        }
    })
    return [role, isLoading]
};

export default useRole;