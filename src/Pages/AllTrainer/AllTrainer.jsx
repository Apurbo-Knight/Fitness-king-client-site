import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TrainerCard from "./TrainerCard";
import { Helmet } from "react-helmet-async";

const AllTrainer = () => {
  const { data: trainers = [] } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axios.get(
        "https://assignment-12-server-iota-ruby.vercel.app/users"
      );
      return res.data;
    },
  });

  const mainTrainers = trainers.filter((trainer) => trainer.role === "trainer");

  return (
    <div className="bg-black min-h-screen pt-28 lg:pt-32 pb-16">
      <Helmet>
        <title>Fitness King | All Trainers</title>
      </Helmet>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl text-center font-bold text-white mb-12">
        Our{" "}
        <span className="text-teal-400 border-b-4 border-teal-400">
          Trainers
        </span>
      </h2>

      {/* Trainers Grid */}
      <div className="w-full lg:w-[85%] mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {mainTrainers?.map((trainer) => (
            <TrainerCard key={trainer._id} trainer={trainer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTrainer;
