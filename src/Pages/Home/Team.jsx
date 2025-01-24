import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import t1 from "../../assets/Trainer/trainer1.jpg"
import t2 from "../../assets/Trainer/trainer2.jpg"
import t3 from "../../assets/Trainer/trainer3.webp"
import t4 from "../../assets/Trainer/trainer4.jpg"
import t5 from "../../assets/Trainer/trainer5.jpg"
import t6 from "../../assets/Trainer/trainer6.jpg"

const Team = () => {
  return (
    <div className="bg-black py-10 lg:py-16 ">
      <div className="text-white text-center ">
        <p className="text-3xl md:text-5xl  mb-20">
          Our <span className="text-teal-400 border-b-4 border-teal-400">Team</span>{" "}
        </p>
      </div>
      <div>
        <Swiper
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={`mySwiper w-full lg:w-[80%] overflow-scroll   `}
          breakpoints={{
            // when window width is >= 1200px (for large screens)
            1200: {
              slidesPerView: 3,
            },
            // when window width is >= 992px (for medium-sized screens)
            992: {
              slidesPerView: 2,
            },
            // when window width is >= 768px (for small screens)
            768: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <div className="group">
              <div className="parent shadow-md  relative group-hover:transform group-hover:scale-105 duration-500 ">
                <img src={t1} alt="" className="w-full rounded-t-md h-80 object-cover" />
              </div>
              <div className="child bg-black bg-opacity-70 text-teal-400  py-2 px-4 w-full  mx-auto absolute bottom-2  rounded-t-md text-center ">
                <h1 className="text-xl font-semibold"> 
                Emily Smith
                </h1>
                <p className="text-sm mt-1  text-teal-400 group-hover:text-tral-400 hidden group-hover:block duration-500 ">
                Certified Personal Trainer
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group">
              <div className="parent shadow-md  relative group-hover:transform group-hover:scale-105 duration-500 ">
                <img src={t4} alt="" className="w-full rounded-t-md h-80 object-cover" />
              </div>
              <div className="child bg-black bg-opacity-70 text-teal-400  py-2 px-4 w-full  mx-auto absolute bottom-2  rounded-t-md text-center ">
                <h1 className="text-xl font-semibold"> 
                Michael Johnson
                </h1>
                <p className="text-sm mt-1 text-teal-400 group-hover:text-teal-400 hidden group-hover:block duration-500 ">
                Cardiovascular Fitness Expert
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group">
              <div className="parent shadow-md  relative group-hover:transform group-hover:scale-105 duration-500 ">
                <img src={t3} alt="" className="w-full rounded-t-md h-80 object-cover" />
              </div>
              <div className="child bg-black bg-opacity-70 text-teal-400  py-2 px-4 w-full  mx-auto absolute bottom-2  rounded-t-md text-center ">
                <h1 className="text-xl font-semibold"> 
                Harry Porter
                </h1>
                <p className="text-sm mt-1 text-teal-400 group-hover:text-teal-400 hidden group-hover:block duration-500 ">
                Flexibility and Yoga Instructor
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group">
              <div className="parent shadow-md  relative group-hover:transform group-hover:scale-105 duration-500 ">
                <img src={t2} alt="" className="w-full rounded-t-md h-80 object-cover" />
              </div>
              <div className="child bg-black bg-opacity-70 text-teal-400  py-2 px-4 w-full  mx-auto absolute bottom-2  rounded-t-md text-center ">
                <h1 className="text-xl font-semibold"> 
                Jessica Brown
                </h1>
                <p className="text-sm mt-1 text-teal-400 group-hover:text-teal-400 hidden group-hover:block duration-500 ">
                Weightlifting Coach
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group">
              <div className="parent shadow-md  relative group-hover:transform group-hover:scale-105 duration-500 ">
                <img src={t5} alt="" className="w-full rounded-t-md h-80 object-cover" />
              </div>
              <div className="child bg-black bg-opacity-70 text-teal-400  py-2 px-4 w-full  mx-auto absolute bottom-2  rounded-t-md text-center ">
                <h1 className="text-xl font-semibold"> 
                Alex Rodriguez
                </h1>
                <p className="text-sm mt-1 text-teal-400 group-hover:text-teal-400 hidden group-hover:block duration-500 ">
                Strength and Conditioning Specialist
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="group">
              <div className="parent shadow-md  relative group-hover:transform group-hover:scale-105 duration-500 ">
                <img src={t6} alt="" className="w-full rounded-t-md h-80 object-cover" />
              </div>
              <div className="child bg-black bg-opacity-70 text-teal-400  py-2 px-4 w-full  mx-auto absolute bottom-2  rounded-t-md text-center ">
                <h1 className="text-xl font-semibold"> 
                John Doe
                </h1>
                <p className="text-sm mt-1 text-teal-400 group-hover:text-teal-400 hidden group-hover:block duration-500 ">
                Senior Fitness Instructor
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
