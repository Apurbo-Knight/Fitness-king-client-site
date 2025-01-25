import React from 'react';
import sad from "../../assets/sad.webp"
const Error = () => {
    return (
        <div className="flex flex-col  items-center gap-5 pt-80 bg-black min-h-screen">
        <h2 className="text-5xl font-semibold text-teal-400">Page Not Found</h2>
        <img className="size-10" src={sad} alt="" />
        <p className="text-3xl font-semibold text-teal-400">Go Back To Home</p>
        <button className="px-4 py-3 bg-teal-400 rounded-lg">
          <a href="/">Home</a>
        </button>
      </div>
    );
};

export default Error;