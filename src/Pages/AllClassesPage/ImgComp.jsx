import React from "react";
import { Link } from "react-router-dom";

const ImgComp = ({trainer}) => {
  return (
    <>
        <Link to={`/trainerDetails/${trainer._id}`}><img className="w-10 rounded-full border-2 border-teal-400 hover:scale-125 duration-300" src={trainer.img} /></Link>
    </>
  );
};

export default ImgComp;
