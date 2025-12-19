import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";

const FeaturedClass = () => {
  const {
    data: classes = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axios.get(
        "https://assignment-12-server-iota-ruby.vercel.app/class"
      );
      return res.data;
    },
  });

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black py-24 px-6 md:px-16 xl:px-32">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="text-gray-400 uppercase tracking-widest text-sm">
          Popular Programs
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-2">
          <span className="text-white">Featured </span>
          <span className="text-teal-400 relative">
            Classes
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-teal-400 rounded-full"></span>
          </span>
        </h2>
      </motion.div>

      {/* Loading State */}
      {isLoading && (
        <p className="text-center text-gray-400 text-lg">
          Loading featured classes...
        </p>
      )}

      {/* Error State */}
      {isError && (
        <p className="text-center text-red-400 text-lg">
          Failed to load classes. Please try again later.
        </p>
      )}

      {/* Cards */}
      {!isLoading && !isError && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {classes.slice(0, 6).map((classItem, index) => (
            <motion.div
              key={classItem._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-900/70 rounded-2xl overflow-hidden
                         border border-teal-500/20 hover:border-teal-400
                         transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={classItem.image}
                  alt={classItem.name}
                  className="w-full h-56 object-cover 
                             group-hover:scale-110 transition duration-500"
                />
                {/* Badge */}
                <span className="absolute top-4 right-4 bg-teal-400 text-black 
                                 text-sm font-semibold px-3 py-1 rounded-full">
                  {classItem.count} Seats
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-teal-400 mb-2">
                  {classItem.name}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {classItem.details}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">
                    ⏱ {classItem.classDuration} Hours
                  </span>

                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedClass;
