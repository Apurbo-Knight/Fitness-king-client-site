import { Swiper, SwiperSlide } from "swiper/react";
import r1 from "../../assets/testimonials/r1.jpeg";
import r2 from "../../assets/testimonials/r2.jpeg";
import r3 from "../../assets/testimonials/r3.jpeg";
import r4 from "../../assets/testimonials/r4.jpeg";
import r5 from "../../assets/testimonials/r5.jpeg";
import r6 from "../../assets/testimonials/r6.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="bg-black px-5">
      <h2 className="md:text-5xl text-2xl text-center mb-20">
        <span className="text-white">Our </span>{" "}
        <span className="text-teal-400 border-b-4 border-teal-400">Testimonials</span>
      </h2>
      <div>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="bg-black">
          <div className="p-5 border-2 border-teal-400 sm:w-6/12 md:w-4/12 mx-auto rounded-xl">
            <div className=" flex justify-center rounded-full">
              <img
                className="w-36 h-36 rounded-full object-cover"
                src={r6}
                alt=""
              />
            </div>
            <p className="text-teal-400 text-2xl text-center">Alex Johnson</p>
            <h3 className="text-white text-justify">
              I've been a member for over a year, and I'm consistently impressed
              with the gym's commitment to cleanliness and hygiene. The
              equipment is well-maintained, and the staff ensures a safe workout
              environment. 
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <div className="p-5 border-2 border-teal-400 sm:w-6/12 md:w-4/12 mx-auto rounded-xl">
            <div className=" flex justify-center rounded-full">
              <img
                className="w-36 h-36 rounded-full object-cover"
                src={r5}
                alt=""
              />
            </div>
            <p className="text-teal-400 text-2xl text-center">Chris Thompson</p>
            <h3 className="text-white text-justify">
              The variety of classes offered here is fantastic! From
              high-intensity workouts to relaxing yoga sessions, there's
              something for everyone. The instructors are friendly and skilled,
              creating a positive and inclusive environment. 
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <div className="p-5 border-2 border-teal-400 sm:w-6/12 md:w-4/12 mx-auto rounded-xl">
            <div className=" flex justify-center rounded-full">
              <img
                className="w-36 h-36 rounded-full object-cover"
                src={r4}
                alt=""
              />
            </div>
            <p className="text-teal-400 text-2xl text-center">
              {" "}
              Michael Turner
            </p>
            <h3 className="text-white text-justify">
              I joined this gym to kickstart my fitness journey, and it exceeded
              my expectations. The trainers are knowledgeable, the atmosphere is
              motivating, and the facilities are top-notch. I've seen incredible
              results, and I highly recommend it
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <div className="p-5 border-2 border-teal-400 sm:w-6/12 md:w-4/12 mx-auto rounded-xl">
            <div className=" flex justify-center rounded-full">
              <img
                className="w-36 h-36 rounded-full object-cover"
                src={r3}
                alt=""
              />
            </div>
            <p className="text-teal-400 text-2xl text-center">
              Emily Rodriguez
            </p>
            <h3 className="text-white text-justify">
              Joining this gym was a game-changer for me. The personalized
              training plans helped me achieve my fitness goals faster than I
              thought possible. The trainers are not only experts but also
              supportive mentors. 
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <div className="p-5 border-2 border-teal-400 sm:w-6/12 md:w-4/12 mx-auto rounded-xl">
            <div className=" flex justify-center rounded-full">
              <img
                className="w-36 h-36 rounded-full object-cover"
                src={r2}
                alt=""
              />
            </div>
            <p className="text-teal-400 text-2xl text-center">Sarah Davis</p>
            <h3 className="text-white text-justify">
              The gym's community is amazing! It feels like a family, and the
              camaraderie among members is motivating. The group classes are
              energetic, and I've made friends who share my fitness journey.
              It's not just a gym; it's a supportive community.
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <div className="p-5 border-2 border-teal-400 sm:w-6/12 md:w-4/12 mx-auto rounded-xl">
            <div className=" flex justify-center rounded-full">
              <img
                className="w-36 h-36 rounded-full object-cover"
                src={r1}
                alt=""
              />
            </div>
            <p className="text-teal-400 text-2xl text-center">Jessica White</p>
            <h3 className="text-white text-justify">
              I appreciate the flexibility in membership options. Whether you're
              a beginner or an experienced gym-goer, there's a plan for you. The
              staff is friendly, and the facilities are well-equipped. It's a
              gym that caters to all levels of fitness enthusiasts.
            </h3>
          </div>
        </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
