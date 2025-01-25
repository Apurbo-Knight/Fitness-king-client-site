import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import ImgComp from "./ImgComp";
import { Helmet } from "react-helmet-async";

const AllClassesPage = () => {
  const { data: classes = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axios.get(
        "https://assignment-12-server-iota-ruby.vercel.app/class"
      );
      return res.data;
    },
  });

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate the data to display for the current page
  const totalPages = Math.ceil(classes.length / itemsPerPage);
  const paginatedClasses = classes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-black min-h-screen">
      <Helmet>
        <title>Fitness King | All Classes</title>
      </Helmet>
      <h2 className="text-5xl text-center text-white pt-20 mb-10">
        Our{" "}
        <span className="text-teal-400 border-b-4 border-teal-400">
          Classes
        </span>
      </h2>
      <div className="text-center mb-10">
        <input
          className="bg-teal-900 rounded-md"
          type="text"
          placeholder="Type Class Name"
        />{" "}
        <button className="bg-teal-400 p-2 rounded-md text-white">
          Search
        </button>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
          {paginatedClasses.map((classItem) => (
            <div
              key={classItem._id}
              className="overflow-hidden group rounded-md shadow-lg"
            >
              <div className="w-[550px]">
                <img
                  src={classItem.image}
                  alt=""
                  className="w-full bg-cover group-hover:transform group-hover:scale-110 duration-500 rounded-md"
                />
              </div>
              <div className="p-4 bg-black">
                <h3 className="font-semibold text-xl text-teal-400">
                  {classItem.name}
                </h3>
                <p className="text-teal-400">{classItem.details}</p>
                <p className="text-teal-400">
                  {classItem.classDuration} Hours Class Duration
                </p>
                <p className="flex items-center gap-4 text-teal-400 mt-2 font-semibold text-xl">
                  Trainers{" "}
                  <div className="flex flex-wrap gap-2">
                    {classItem.trainersData.slice(0, 5).map((trainer) => (
                      <ImgComp key={trainer._id} trainer={trainer}></ImgComp>
                    ))}
                  </div>
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination Controls */}
        <div className="flex justify-center mt-10">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`mx-1 px-3 py-1 rounded-md ${
                currentPage === index + 1
                  ? "bg-teal-400 text-white"
                  : "bg-teal-900 text-teal-400"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllClassesPage;
