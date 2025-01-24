import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TrainerCard from "./TrainerCard";


const AllTrainer = () => {

  const { data: trainers=[] }= useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:1000/users");
      return res.data;
    },
  });
  const mainTrainers = trainers.filter((trainer) => trainer.role === "trainer");
  
  return (
    <div className="bg-black pt-24 lg:pt-24  py-10  ">
      
      <h2 className="text-5xl text-center text-white mb-10"> Our <span className="text-teal-400 border-b-4 border-teal-400">Trainers</span></h2>

      {/* //SECOND section */}
      <div className="py-10 w-full lg:w-[80%] mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-2 ">
          {mainTrainers?.map((trainer) => (
            <TrainerCard key={trainer._id} trainer={trainer}></TrainerCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTrainer;
