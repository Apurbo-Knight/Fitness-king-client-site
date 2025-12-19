import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import t1 from "../../assets/Trainer/trainer1.jpg";
import t2 from "../../assets/Trainer/trainer2.jpg";
import t3 from "../../assets/Trainer/trainer3.webp";
import t4 from "../../assets/Trainer/trainer4.jpg";
import t5 from "../../assets/Trainer/trainer5.jpg";
import t6 from "../../assets/Trainer/trainer6.jpg";

const Team = () => {
  return (
    <section className="bg-black md:px-16 py-16 relative">
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Our{" "}
          <span className="text-teal-400 border-b-4 border-teal-400">Team</span>
        </h2>
      </div>

        {/* Custom Navigation Buttons (same as Team) */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
          <button className="test-prev w-12 h-12 rounded-full border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black transition">
            ❮
          </button>
        </div>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
          <button className="test-next w-12 h-12 rounded-full border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black transition">
            ❯
          </button>
        </div>
      {/* Swiper Wrapper */}
      <div className="relative flex justify-center">
        <Swiper
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".test-next",
            prevEl: ".test-prev",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper w-full lg:w-[80%]"
          breakpoints={{
            1200: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 1,
            },
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={t1}
                alt=""
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-4">
                <h3 className="text-xl font-semibold text-teal-400 text-center">
                  Emily Smith
                </h3>
                <p className="text-sm text-teal-300 text-center mt-1 opacity-0 group-hover:opacity-100 transition">
                  Certified Personal Trainer
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={t4}
                alt=""
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-4">
                <h3 className="text-xl font-semibold text-teal-400 text-center">
                  Michael Johnson
                </h3>
                <p className="text-sm text-teal-300 text-center mt-1 opacity-0 group-hover:opacity-100 transition">
                  Cardiovascular Fitness Expert
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={t3}
                alt=""
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-4">
                <h3 className="text-xl font-semibold text-teal-400 text-center">
                  Harry Porter
                </h3>
                <p className="text-sm text-teal-300 text-center mt-1 opacity-0 group-hover:opacity-100 transition">
                  Flexibility & Yoga Instructor
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={t2}
                alt=""
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-4">
                <h3 className="text-xl font-semibold text-teal-400 text-center">
                  Jessica Brown
                </h3>
                <p className="text-sm text-teal-300 text-center mt-1 opacity-0 group-hover:opacity-100 transition">
                  Weightlifting Coach
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 5 */}
          <SwiperSlide>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={t5}
                alt=""
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-4">
                <h3 className="text-xl font-semibold text-teal-400 text-center">
                  Alex Rodriguez
                </h3>
                <p className="text-sm text-teal-300 text-center mt-1 opacity-0 group-hover:opacity-100 transition">
                  Strength & Conditioning Specialist
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 6 */}
          <SwiperSlide>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={t6}
                alt=""
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-4">
                <h3 className="text-xl font-semibold text-teal-400 text-center">
                  John Doe
                </h3>
                <p className="text-sm text-teal-300 text-center mt-1 opacity-0 group-hover:opacity-100 transition">
                  Senior Fitness Instructor
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
