import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Table } from 'flowbite-react';
import React from 'react';

const AllNewsletter = () => {
    const {data:subscribers=[]} = useQuery({
        queryKey: [''],
        queryFn: async () => {
            const res = await axios.get('https://assignment-12-server-iota-ruby.vercel.app/newsletter');
            return res.data;
        }
    })
    console.log(subscribers);
    // console.log(data);
    return (
        <div>
            <h2 className='font-semibold text-white text-5xl mb-10 text-center '>All <span className='text-teal-400 border-b-4 border-teal-400'>Subscribers: {subscribers.length}</span></h2>
            <div className="overflow-x-auto">
                  <Table className='' striped>
                    <Table.Head>
                      <Table.HeadCell className="bg-slate-900 text-teal-600">Subscriber Name</Table.HeadCell>
                      <Table.HeadCell className="bg-slate-900 text-teal-600">Subscriber Email</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                      {subscribers?.map((subscriber) => (
                        <Table.Row 
                          key={subscriber?._id}
                          className="bg-white dark:border-gray-700 dark:bg-gray-800"
                        >
                          <Table.Cell className="bg-slate-800 border-t-2 border-teal-400 text-teal-600">
                            {subscriber?.name}
                          </Table.Cell>
                          <Table.Cell className="bg-slate-800 border-t-2 border-teal-400 text-teal-600">{subscriber?.email}</Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table>
                </div>
        </div>
    );
};

export default AllNewsletter;