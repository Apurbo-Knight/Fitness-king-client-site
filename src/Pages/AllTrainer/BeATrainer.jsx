import React, { useContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useRole from "../../Hooks/useRole";
import { Helmet } from "react-helmet-async";

const BeATrainer = () => {
  const { user } = useContext(AuthContext);
  const [role] = useRole()
  console.log(role);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

  const daysOptions = [
    { value: "Sun", label: "Sunday" },
    { value: "Mon", label: "Monday" },
    { value: "Tues", label: "Tuesday" },
    { value: "Wed", label: "Wednesday" },
    { value: "Thu", label: "Thursday" },
    { value: "Fri", label: "Friday" },
    { value: "Sat", label: "Saturday" },
  ];

  const skillsOptions = [
    { value: "Nutrition Coaching", label: "Nutrition Coaching" },
    { value: "Specialized Training Expertise", label: "Specialized Training Expertise" },
    { value: "Group Fitness Instruction", label: "Group Fitness Instruction" },
    { value: "First Aid Certification", label: "First Aid Certification" },
    { value: "Tracking and Program Design", label: "Tracking and Program Design" },
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true); // Set submitting state to true
    const formattedData = {
      ...data,
      skills: data.skills.map((skill) => skill.value),
      availableDays: data.availableDays.map((day) => day.value),
      status: "pending", // Default status
      email: user?.email,
      profileImage: user?.photoURL,
      role:role
    };
    // from data*******************
    console.log(formattedData);
    const beATrainer = await axios.post(" https://assignment-12-server-iota-ruby.vercel.app/beATrainer", formattedData); // Send the data to server
    
    if(beATrainer.data.insertedId){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Requested Submitted",
            showConfirmButton: false,
            timer: 1500
          });
    }
      
    
  };

  return (
    <div className="pt-20 bg-black pb-10">
      <Helmet>
                      <title>
                          Fitness king | Be A Trauner
                      </title>
                  </Helmet>
      <h2 className="text-center font-semibold text-white text-5xl mb-10">
        Be A  <span className="text-teal-400 border-b-4 border-teal-400 ">Trainer</span>
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 bg-teal-600 md:w-1/2 lg:w-1/2 xl:w-1/3 mx-auto rounded shadow-md "
      >
        

        {/* Full Name */}
        <div className="mb-4 ">
          <label className="block mb-1 text-teal-900 font-medium">Full Name</label>
          <input
            type="text"
            {...register("fullName", { required: "Full Name is required" })}
            className="block w-full p-2 border rounded bg-teal-900"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email (Read-Only) */}
        <div className="mb-4">
          <label className="block mb-1 text-teal-900 font-medium">Email</label>
          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="block w-full p-2 border rounded bg-teal-900"
          />
        </div>

        {/* Age */}
        <div className="mb-4">
          <label className="block mb-1 text-teal-900 font-medium">Age</label>
          <input
            type="number"
            {...register("age", {
              required: "Age is required",
              min: 18,
              max: 60,
            })}
            className="block w-full p-2 border rounded bg-teal-900"
          />
          {errors.age && (
            <p className="text-red-500 text-sm">{errors.age.message}</p>
          )}
        </div>

        {/* Skills */}
        <div className="mb-4">
          <label className="block mb-1 text-teal-900 font-medium">Skills</label>
          <Controller
            name="skills"
            control={control}
            rules={{ required: "Select at least one skill" }}
            render={({ field }) => (
              <Select
                {...field}
                isMulti
                options={skillsOptions}
                className="mt-1 bg-teal-600"
              />
            )}
          />
          {errors.skills && (
            <p className="text-red-500 text-sm">{errors.skills.message}</p>
          )}
        </div>

        {/* Available Days */}
        <div className="mb-4">
          <label className="block mb-1 text-teal-900 font-medium">Available Days</label>
          <Controller
            name="availableDays"
            control={control}
            rules={{ required: "Select at least one day" }}
            render={({ field }) => (
              <Select
                {...field}
                isMulti
                options={daysOptions}
                className="mt-1 bg-teal-600"
              />
            )}
          />
          {errors.availableDays && (
            <p className="text-red-500 text-sm">
              {errors.availableDays.message}
            </p>
          )}
        </div>

        {/* Available Time */}
        <div className="mb-4">
          <label className="block mb-1 text-teal-900 font-medium">Available Time</label>
          <input
            type="text"
            {...register("availableTime", {
              required: "Available time is required",
            })}
            className="block w-full p-2 border rounded bg-teal-900"
            placeholder="e.g., 10 AM - 4 PM"
          />
          {errors.availableTime && (
            <p className="text-red-500 text-sm">
              {errors.availableTime.message}
            </p>
          )}
        </div>

        {/* Other Info */}
        <div className="mb-4">
          <label className="block mb-1 text-teal-900 font-medium">Other Info</label>
          <textarea
            {...register("otherInfo")}
            className="block w-full p-2 border rounded bg-teal-900"
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-teal-900 text-white p-2 rounded"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitted" : "Apply"}
        </button>
      </form>
    </div>
  );
};

export default BeATrainer;
