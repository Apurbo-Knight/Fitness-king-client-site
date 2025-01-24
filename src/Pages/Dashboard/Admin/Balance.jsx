import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Table } from "flowbite-react";
import React from "react";

const Balance = () => {
  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:1000/payment`);
      return res.data;
    },
  });
  const totalPrice = payments.reduce((sum , payment) =>{
    return sum + parseFloat(payment.price);
  },0)
  console.log(payments);
  return (
    <div className="pt-5">

      <div className="flex justify-between">
        <h2 className="font-semibold text-2xl text-white mb-4">Total <span className="
      text-teal-400 border-b-2 border-teal-400"> Payments: {payments.length}</span> </h2>
        <h2 className="font-semibold text-2xl text-white mb-4">Total <span className="
      text-teal-400 border-b-2 border-teal-400"> Balance: {totalPrice}</span>  </h2>
      </div>
      <div className="overflow">
        <h2 className="text-center text-white font-semibold text-lg mb-4">Last Six <span className="
      text-teal-400 border-b-2 border-teal-400">Transaction</span></h2>
        <Table striped>
          <Table.Head>
            <Table.HeadCell className="bg-slate-900 text-teal-600">Name</Table.HeadCell>
            <Table.HeadCell className="bg-slate-900 text-teal-600">Email</Table.HeadCell>
            <Table.HeadCell className="bg-slate-900 text-teal-600">Transaction ID</Table.HeadCell>
            <Table.HeadCell className="bg-slate-900 text-teal-600">Price</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {payments.map((payment) => (
              <Table.Row
                key={payment._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="bg-slate-800 border-t-2 border-teal-400 whitespace-nowrap font-medium text-teal-500 dark:text-white">
                  <p>{payment.customerName}</p>
                </Table.Cell>
                <Table.Cell className="bg-slate-800 border-t-2 border-teal-400 text-teal-600">
                  <p>{payment.customerEmail}</p>
                </Table.Cell>
                <Table.Cell className="bg-slate-800 border-t-2 border-teal-400 text-teal-600">
                  <p>{payment.transactionId}</p>
                </Table.Cell>
                <Table.Cell className="bg-slate-800 border-t-2 border-teal-400 text-teal-600">
                  <p>${payment.price}</p>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default Balance;
