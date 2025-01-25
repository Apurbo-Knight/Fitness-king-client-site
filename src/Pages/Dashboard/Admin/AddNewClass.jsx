import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosing_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddNewClass = () => {
  const { data: trainers = [] } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axios.get("https://assignment-12-server-iota-ruby.vercel.app/users");
      return res.data;
    },
  });
  const mainTrainers = trainers.filter((trainer) => trainer.role === "trainer");
  console.log(mainTrainers);

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axios.post(image_hosing_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const classData = {
        name: data.name,
        classDuration: data.classDuration,
        details: data.details,
        image: res.data.data.url,
        trainersData: mainTrainers,
      };
      const classRes = await axios.post(
        "https://assignment-12-server-iota-ruby.vercel.app/class",
        classData
      );
      console.log(classRes.data);
      if (classRes.data.insertedId) {
        // show popUp
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "New Class Added",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };

  return (
    <div>
      <Helmet>
                      <title>
                          Fitness king | Add New Class
                      </title>
                  </Helmet>
      <h2 className="my-5 mb-10 text-center font-semibold text-white sm:text-2xl md:text-4xl lg:text-5xl">
        Add <span className="text-teal-400 border-b-4 border-teal-400">New Class</span>
      </h2>
      <div className="h-[500px] w-[400px] mx-auto bg-teal-600 p-10 rounded-xl">
        <form className="flex-col " onSubmit={handleSubmit(onSubmit)}>
          <label className="text-teal-900 font-semibold">Class Name :</label>
          <input
            type="text"
            placeholder="Enter Class Name"
            className="w-full h-12 rounded-md my-2 bg-teal-900 border-2 border-teal-400"
            {...register("name", { required: true })}
          />
          <label className="text-teal-900 font-semibold">
            Class Duration :
          </label>
          <input
            type="text"
            placeholder="Enter Class Duration"
            required
            className="w-full h-12 rounded-md my-2 bg-teal-900 border-2 border-teal-400"
            {...register("classDuration", { required: true })}
          />
          <label className="text-teal-900 font-semibold">Details :</label>
          <textarea
            type="text"
            placeholder="Enter Details"
            required
            className="w-full h-16 rounded-md my-2 bg-teal-900 border-2 border-teal-400"
            {...register("details", { required: true })}
          />
          <input
            type="file"
            placeholder="Upload Image"
            required
            className="w-full h-16 text-teal-900 font-semibold rounded-md my-2 "
            {...register("image", { required: true })}
          ></input>
          <button className="p-2 bg-teal-600 border border-teal-400 hover:bg-teal-900 rounded-md text-white">
            {" "}
            Add Class
          </button>
          <p className="text-xs mt-2">(Please wait some seconds. Sometimes it takes some time to add classes to database.)</p>
        </form>
      </div>
    </div>
  );
};

export default AddNewClass;
