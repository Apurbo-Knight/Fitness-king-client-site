import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button, Modal, Table } from "flowbite-react";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

const ActivityLogPage = () => {
  const [openModal, setOpenModal] = useState(false); // State for managing modal visibility

  const { data: trainer = [] } = useQuery({
    queryKey: ["trainer"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:1000/beATrainer");
      return res.data;
    },
  });

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <h2 className="text-center text-teal-400 font-semibold text-5xl mb-5">
        Activity Log{" "}
      </h2>
      <h2 className="text-center text-teal-400 font-semibold text-2xl mb-5">
        These people want to be trainers.
      </h2>
      <Table striped>
        <Table.Head>
          <Table.HeadCell className="bg-slate-900 text-teal-600">Image</Table.HeadCell>
          <Table.HeadCell className="bg-slate-900 text-teal-600">Name</Table.HeadCell>
          <Table.HeadCell className="bg-slate-900 text-teal-600">Slot</Table.HeadCell>
          <Table.HeadCell className="bg-slate-900 text-teal-600">Status</Table.HeadCell>
          <Table.HeadCell className="bg-slate-900 text-teal-600"></Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {trainer.map((singleTrainer) => (
            <Table.Row
              key={singleTrainer?._id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="bg-slate-800 border-t-2 border-teal-400 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <img
                  className="w-16 rounded-full border-2 border-teal-400"
                  src={singleTrainer?.profileImage}
                  alt=""
                />
              </Table.Cell>
              <Table.Cell className="bg-slate-800 border-t-2 border-teal-400 text-teal-600">
                <p>{singleTrainer?.fullName}</p>
              </Table.Cell>
              <Table.Cell className="bg-slate-800 border-t-2 border-teal-400 text-teal-600">
                <p>{singleTrainer?.availableTime}</p>
              </Table.Cell>
              <Table.Cell className="bg-slate-800 border-t-2 border-teal-400 text-teal-600">
                <span className="rounded-xl bg-slate-900 px-2 py-1">
                  {singleTrainer?.status}
                </span>
              </Table.Cell>
              <Table.Cell className="bg-slate-800 border-t-2 border-teal-400 text-teal-600">
                <Button onClick={handleOpenModal}>
                  <FaEye />
                </Button>
                <Modal dismissible show={openModal} onClose={handleCloseModal}>
                  <Modal.Header>Want To Be A Trainer</Modal.Header>
                  
                  <Modal.Footer>
                    
                    <Button color="gray" onClick={handleCloseModal}>
                      ok
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ActivityLogPage;
