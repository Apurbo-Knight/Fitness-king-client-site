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

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="bg-black min-h-screen py-5 md:py-10 px-4 md:px-36">
      <Helmet>
        <title>Fitness King | All Classes</title>
      </Helmet>

      <h2 className="text-4xl md:text-5xl text-center text-white pt-20 mb-12 font-bold">
        Our {" "}
        <span className="text-teal-400 border-b-4 border-teal-400">
          Classes
        </span>
      </h2>

      

      {/* Classes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedClasses.map((classItem) => (
          <div
            key={classItem._id}
            className="bg-teal-900/70 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
          >
            <img
              src={classItem.image}
              alt={classItem.name}
              className="w-full h-40 md:h-48 object-cover"
            />
            <div className="p-3 md:p-4">
              <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-1">
                {classItem.name}
              </h3>
              <p className="text-teal-200 text-sm mb-1 md:mb-1">
                {classItem.details.length > 60
                  ? classItem.details.slice(0, 60) + "..."
                  : classItem.details}
              </p>
              <p className="text-teal-400 text-sm font-semibold mb-1">
                Duration: {classItem.classDuration} Hours
              </p>
              <div className="flex flex-wrap gap-2 items-center">
                {classItem.trainersData.slice(0, 5).map((trainer) => (
                  <ImgComp key={trainer._id} trainer={trainer} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12 gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded-md font-semibold ${
              currentPage === index + 1
                ? "bg-teal-400 text-black"
                : "bg-teal-900 text-teal-400 border border-teal-400"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllClassesPage;
