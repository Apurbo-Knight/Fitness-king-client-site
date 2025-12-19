import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button, Modal, Table } from "flowbite-react";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEye } from "react-icons/fa";

const ActivityLogPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const { data: trainer = [] } = useQuery({
    queryKey: ["trainer"],
    queryFn: async () => {
      const res = await axios.get(
        "https://assignment-12-server-iota-ruby.vercel.app/beATrainer"
      );
      return res.data;
    },
  });

  const handleOpenModal = (trainerData) => {
    setSelectedTrainer(trainerData);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedTrainer(null);
  };

  return (
    <div className="bg-black min-h-screen px-4 md:px-12 py-8">
      <Helmet>
        <title>Fitness King | Activity Log</title>
      </Helmet>

      <h2 className="text-center text-teal-400 font-bold text-4xl md:text-5xl mb-2">
        Activity Log
      </h2>
      <p className="text-center text-teal-400 mb-8 text-lg md:text-xl">
        These people want to be trainers
      </p>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <Table className="min-w-full border border-gray-700">
          <Table.Head className="bg-gray-900">
            <Table.HeadCell className="text-teal-400 bg-slate-800">Image</Table.HeadCell>
            <Table.HeadCell className="text-teal-400 bg-slate-800">Name</Table.HeadCell>
            <Table.HeadCell className="text-teal-400 bg-slate-800">Slot</Table.HeadCell>
            <Table.HeadCell className="text-teal-400 bg-slate-800">Status</Table.HeadCell>
            <Table.HeadCell className="text-teal-400 bg-slate-800">Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y divide-gray-700">
            {trainer.map((singleTrainer) => (
              <Table.Row
                key={singleTrainer?._id}
                className="bg-gray-900 hover:bg-gray-800 transition-colors rounded-md"
              >
                <Table.Cell className="py-3 px-2">
                  <img
                    className="w-14 h-14 rounded-full border-2 border-teal-400"
                    src={singleTrainer?.profileImage}
                    alt={singleTrainer?.fullName}
                  />
                </Table.Cell>
                <Table.Cell className="text-teal-200 font-medium">{singleTrainer?.fullName}</Table.Cell>
                <Table.Cell className="text-teal-200">{singleTrainer?.availableTime}</Table.Cell>
                <Table.Cell>
                  <span className="px-3 py-1 rounded-full bg-gray-800 text-teal-400 font-semibold">
                    {singleTrainer?.status}
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    color="teal"
                    size="sm"
                    onClick={() => handleOpenModal(singleTrainer)}
                  >
                    <FaEye />
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      {/* Modal */}
      <Modal
        dismissible
        show={openModal}
        onClose={handleCloseModal}
        className="bg-gray-900 text-white"
      >
        <Modal.Header className="text-teal-400">Trainer Details</Modal.Header>
        <Modal.Body className="text-gray-200 space-y-2">
          {selectedTrainer && (
            <>
              <p className="text-gray-500"><span className="font-semibold text-gray-900">Slot:</span> {selectedTrainer.availableTime}</p>
              <p className="text-gray-500"><span className="font-semibold text-gray-900">Name:</span> {selectedTrainer.fullName}</p>
              <p className="text-gray-500"><span className="font-semibold text-gray-900">Status:</span> {selectedTrainer.status}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ActivityLogPage;
