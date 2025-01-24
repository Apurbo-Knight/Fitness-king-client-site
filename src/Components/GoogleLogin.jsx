import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                image: result.user?.photoURL,
                role: "member"
            }
            axios.post('http://localhost:1000/users',userInfo)
            .then(res=>{
                console.log(res.data);
                navigate('/');
            })
        })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}><FaGoogle></FaGoogle></button>
        </div>
    );
};

export default GoogleLogin;