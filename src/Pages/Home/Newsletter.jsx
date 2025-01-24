import axios from "axios";
import React from "react";

const Newsletter = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = e.target;
    const name = formData.name.value;
    const email = formData.email.value;
    const newsletterValue = { name, email };
    console.log(newsletterValue);
    formData.reset();
    const newsRes = await axios.post("http://localhost:1000/newsletter", newsletterValue);
    console.log(newsRes);	
  }
  return (
    <div className="md:flex justify-center items-center bg-black p-10">
      <div className="flex-1">
        <h1 className="text-gray-100 font-semibold text-3xl md:text-5xl ">
          Make a  <span className="border-b-4 text-teal-400 border-teal-400">Subscription</span>
        </h1>
        <p className="text-sm text-gray-400 mt-2">
          Unlock exclusive content and updates – subscribe today for a richer
          experience!
        </p>
      </div>
      {/* Form */}
      <div className="flex-1 ">
        <form onSubmit={handleSubmit} className="">
          <div className="">
            <label>
              <span className="label-text text-teal-400 font-semibold ">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered w-full text-teal-400 border-2 border-teal-400 rounded-md bg-teal-900 my-2"
              required
            />
          </div>
          <div >
            <label >
              <span className="label-text text-teal-400 font-semibold ">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full text-teal-400 border-2 border-teal-400 rounded-md bg-teal-900 my-2"
              required
            />
          </div>
          <div className=" mt-6">
            <button className=" bg-teal-900 w-full text-teal-400 border-2 border-teal-400 p-2 rounded-md">Subscribe Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
