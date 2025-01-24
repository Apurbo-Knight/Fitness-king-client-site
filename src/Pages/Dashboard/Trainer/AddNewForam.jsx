import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useRole from "../../../Hooks/useRole";

const AddNewForam = () => {
  const { user } = useContext(AuthContext);
  const [role] = useRole();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const forumData = {
      title,
      description,
      name:user.displayName,
      email: user.email,
      image: user.photoURL,
      role: role,
      likeCount: 0,
      dislikeCount: 0,
    };
    console.log(forumData);

    const res = await axios.post("http://localhost:1000/forums", forumData);
    if (res.data.insertedId) {
      // show popUp
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Forum Added",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <h2 className="my-5 text-center mb-10  text-gray-100 text-5xl">Add a New <span className="border-b-4 border-teal-400 text-teal-400">Forum</span></h2>
      <div className="max-w-md mx-auto p-6  shadow-lg rounded-md bg-teal-900">
        {message && <p className="mb-4 text-green-600">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-medium mb-2 text-teal-400">Title</label>
            <input
              type="text"
              className="w-full px-3 py-2  rounded-md bg-teal-600 border-2 border-teal-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2 text-teal-400">Description</label>
            <textarea
              className="w-full px-3 py-2  rounded-md bg-teal-600 border-2 border-teal-400"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-900 border border-teal-400 text-teal-400 py-2 rounded-md "
          >
            Add Forum
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewForam;
