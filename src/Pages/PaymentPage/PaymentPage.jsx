import React from "react";
import { useLocation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// TODO ADD publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const PaymentPage = () => {
  const locaion = useLocation();
  const { bookedData } = locaion.state || {};
  console.log(bookedData);
  return (
    <div className="pt-20  bg-black min-h-screen ">
      <h2 className="text-center font-semibold text-5xl text-gray-400">Make your <span className="text-teal-400 border-b-4 border-teal-400">Payment</span></h2>
      <div className="flex">
        <div className=" flex-1 mt-20 w-1/2 h-[450px] shadow-lg rounded-lg p-6 border border-teal-400 hover:shadow-xl transition-shadow duration-300">
          {/* paymen Deails */}
          <h2 className="text-teal-700 font-bold border-b-2 border-teal-400 pb-6 mb-2 text-2xl text-center">
            Payment Details
          </h2>
          <div>
            <div className="flex items-center justify-center gap-5 border-b-2 border-teal-400 pb-2">
              <img
                className="w-20 border-2 border-teal-400 rounded-full "
                src={bookedData?.userImage}
                alt=""
              />
              <div>
                <h2 className="text-teal-700 font-semibold xl:text-xl">
                  {bookedData.userName}
                </h2>
                <p className="text-teal-700 font-semibold xl:text-xl">
                  {bookedData.userEmail}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-center text-xl mb-5 text-teal-700 font-semibold xl:text-xl">
              Trainer Information
            </h2>
            <div className="flex items-center justify-center gap-5 border-b-2 border-teal-400 pb-2">
              <img
                className="w-20 border-2 border-teal-400 rounded-full"
                src={bookedData?.trainer?.img}
              ></img>
              <h2 className="text-teal-700 font-semibold xl:text-xl">
                {bookedData?.trainer.name}
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-center pt-3">
            <div>
              <h2 className="text-teal-700 font-semibold xl:text-xl">
                Class Time: {bookedData?.slot}
              </h2>
              <h2 className="text-teal-700 font-semibold xl:text-xl">
                Package: {bookedData?.packageName}
              </h2>
              <h2 className="text-teal-700 font-semibold xl:text-xl">
                Price: $ {bookedData?.packagPrice}
              </h2>
            </div>
          </div>
        </div>
        <div className="flex-1 mt-20 w-1/2 p-6">
          {/* payment work */}
          <Elements stripe={stripePromise}>
            <CheckoutForm
              bookedData={bookedData}
              price={bookedData?.packagPrice}
            ></CheckoutForm>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
