import React, { Children } from 'react';
import useRole from '../Hooks/useRole';
import { Navigate } from 'react-router-dom';
import { Spinner } from 'flowbite-react';

const TrainerRoute = ({children}) => {
    const [role,isLoading] = useRole()

    if(isLoading) return <Spinner aria-label="Extra large spinner example" size="xl" />
    if(role === 'trainer') return children
    
    return <Navigate to='/dashboard' replace='true'></Navigate>
};

export default TrainerRoute;