import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Table } from "flowbite-react";
import { Helmet } from "react-helmet-async";

const BookedTrainer = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const { data: bookedTrainers = [] } = useQuery({
    queryKey: ["bookedTrainers", email], // Include email in queryKey for dependency tracking
    queryFn: async () => {
      const res = await axios.get(`https://assignment-12-server-iota-ruby.vercel.app/payment/${email}`);
      return res.data;
    },
  });
  console.log(bookedTrainers);
  return (
    <div>
      <Helmet>
                      <title>
                          Fitness king | Booked Trainers
                      </title>
                  </Helmet>
      <h2 className="text-center text-white font-semibold text-5xl mb-4">
        Booked{" "}
        <span className="text-teal-400 border-b-4 border-teal-400">
          Trainer
        </span>
      </h2>
      {bookedTrainers === 0 ? 
        <Table striped>
          <Table.Head>
            <Table.HeadCell className="bg-slate-900 text-teal-600">
              Image
            </Table.HeadCell>
            <Table.HeadCell className="bg-slate-900 text-teal-600">
              Name
            </Table.HeadCell>
            <Table.HeadCell className="bg-slate-900 text-teal-600">
              Slot
            </Table.HeadCell>
            <Table.HeadCell className="bg-slate-900 text-teal-600">
              Package
            </Table.HeadCell>
            <Table.HeadCell className="bg-slate-900 text-teal-600">
              Price
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {bookedTrainers.map((bookedTrainer) => (
              <Table.Row
                key={bookedTrainer?._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="bg-slate-800 border-t-2 border-teal-400 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <img
                    className="w-16 rounded-full border-2 border-teal-400"
                    src={bookedTrainer?.trainerImage}
                    alt=""
                  />
                </Table.Cell>
                <Table.Cell className="bg-slate-800 border-t-2 border-teal-400 text-teal-600">
                  <p>{bookedTrainer?.trainerName}</p>
                </Table.Cell>
                <Table.Cell className="bg-slate-800 border-t-2 border-teal-400 text-teal-600">
                  <p>{bookedTrainer?.slot}</p>
                </Table.Cell>
                <Table.Cell className="bg-slate-800 border-t-2 border-teal-400 text-teal-600">
                  <p>{bookedTrainer?.package}</p>
                </Table.Cell>
                <Table.Cell className="bg-slate-800 border-t-2 border-teal-400 text-teal-600">
                  <p>${bookedTrainer?.price}</p>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
       : 
        <div className="h-96 font-semibold text-teal-400 text-2xl flex justify-center items-center uppercase">
          <h2>You haven't booked a trainer yet.</h2>
        </div>
      }
    </div>
  );
};

export default BookedTrainer;
