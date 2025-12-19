import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import r1 from "../../assets/testimonials/r1.jpeg";
import r2 from "../../assets/testimonials/r2.jpeg";
import r3 from "../../assets/testimonials/r3.jpeg";
import r4 from "../../assets/testimonials/r4.jpeg";
import r5 from "../../assets/testimonials/r5.jpeg";
import r6 from "../../assets/testimonials/r6.jpg";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Alex Johnson",
    img: r6,
    text: "I've been a member for over a year, and I'm consistently impressed with the gym's commitment to cleanliness and hygiene. The equipment is well-maintained, and the staff ensures a safe workout environment.",
  },
  {
    name: "Chris Thompson",
    img: r5,
    text: "The variety of classes offered here is fantastic! From high-intensity workouts to relaxing yoga sessions, there's something for everyone. The instructors are friendly and skilled, creating a positive and inclusive environment.",
  },
  {
    name: "Michael Turner",
    img: r4,
    text: "I joined this gym to kickstart my fitness journey, and it exceeded my expectations. The trainers are knowledgeable, the atmosphere is motivating, and the facilities are top-notch. I've seen incredible results, and I highly recommend it.",
  },
  {
    name: "Emily Rodriguez",
    img: r3,
    text: "Joining this gym was a game-changer for me. The personalized training plans helped me achieve my fitness goals faster than I thought possible. The trainers are not only experts but also supportive mentors.",
  },
  {
    name: "Sarah Davis",
    img: r2,
    text: "The gym's community is amazing! It feels like a family, and the camaraderie among members is motivating. The group classes are energetic, and I've made friends who share my fitness journey. It's not just a gym; it's a supportive community.",
  },
  {
    name: "Jessica White",
    img: r1,
    text: "I appreciate the flexibility in membership options. Whether you're a beginner or an experienced gym-goer, there's a plan for you. The staff is friendly, and the facilities are well-equipped. It's a gym that caters to all levels of fitness enthusiasts.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-black py-24 pl-2 md:px-16 xl:px-32">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="text-gray-400 uppercase tracking-widest text-sm">
          What Our Clients Say
        </span>
        <h2 className="text-2xl md:text-5xl font-extrabold mt-2">
          <span className="text-white">Our </span>
          <span className="text-teal-400 border-b-4 border-teal-400">
            Testimonials
          </span>
        </h2>
      </motion.div>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 1.5 },
          992: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        className="mySwiper flex justify-center items-center"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-900/70 backdrop-blur-md rounded-2xl
                         border border-teal-500/20 shadow-lg p-6 max-w-[350px] md:max-w-[400px] w-full
                         transition-transform duration-300 hover:scale-105 mx-2"
            >
              {/* Image */}
              <div className="flex justify-center mb-4">
                <img
                  className="w-36 h-36 rounded-full object-cover border-2 border-teal-400"
                  src={item.img}
                  alt={item.name}
                />
              </div>

              {/* Name */}
              <p className="text-teal-400 text-2xl text-center font-semibold mb-2">
                {item.name}
              </p>

              {/* Text */}
              <h3 className="text-gray-300 text-sm md:text-base text-justify">
                {item.text}
              </h3>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
