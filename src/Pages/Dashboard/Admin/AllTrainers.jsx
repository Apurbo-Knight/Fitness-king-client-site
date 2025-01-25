import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Table } from "flowbite-react";
// import { FaDeleteLeft } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AllTrainers = () => {
  const { data: trainers = [],refetch } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axios.get("https://assignment-12-server-iota-ruby.vercel.app/users");
      return res.data;
    },
  });
  const mainTrainers = trainers.filter((trainer) => trainer.role === "trainer");
  console.log(trainers);
  
  const handleMakeMember = (trainer) => {
    axios.patch(`https://assignment-12-server-iota-ruby.vercel.app/users/member/${trainer._id}`)
    .then((res) => {
      console.log(res.data);
      if(res.data.modifiedCount){
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Trainer Removed Succeessfull",
          showConfirmButton: false,
          timer: 1500
        });
      }
        
    })
  }

  return (
    <div className="overflow-x-auto">
      <Helmet>
                      <title>
                          Fitness king | Trainers List
                      </title>
                  </Helmet>
      <h2 className="text-center text-5xl text-white mt-5 mb-10">All <span className="text-teal-400 border-b-4 border-teal-400">Trainers</span></h2>
      <Table striped>
        <Table.Head>
          <Table.HeadCell className="bg-slate-900 text-teal-600">Trainer Name</Table.HeadCell>
          <Table.HeadCell className="bg-slate-900 text-teal-600">Available Slots</Table.HeadCell>
          <Table.HeadCell className="bg-slate-900 text-teal-600">Experience</Table.HeadCell>
          <Table.HeadCell className="bg-slate-900 text-teal-600">Image</Table.HeadCell>
          <Table.HeadCell className="bg-slate-900 text-teal-600">
            <span className=""></span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {mainTrainers?.map((trainer) => (
            <Table.Row
              key={trainer?._id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="bg-slate-800 border-t-2 border-teal-400 whitespace-nowrap font-medium text-teal-500 dark:text-white">
                {trainer?.name}
              </Table.Cell>
              <Table.Cell className="bg-slate-800 border-t-2 border-teal-400 text-teal-600">{trainer?.time_slot}</Table.Cell>
              <Table.Cell className="bg-slate-800 border-t-2 border-teal-400 text-teal-600">{trainer?.years_of_experience} Years</Table.Cell>
              <Table.Cell className="bg-slate-800 border-t-2 border-teal-400 text-teal-600">
                <img
                  className="w-20 rounded-full border-2 border-teal-400"
                  src={trainer?.img}
                />
              </Table.Cell>
              <Table.Cell className="bg-slate-800 border-t-2 border-teal-400 text-teal-600">
                <button onClick={()=>handleMakeMember((trainer))}>
                  <FaTrash className="text-red-600 size-5"></FaTrash>
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default AllTrainers;
