import React from "react";
import { useLocation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const PaymentPage = () => {
  const location = useLocation();
  const { bookedData } = location.state || {};
  console.log(bookedData);

  return (
    <div className="min-h-screen bg-black pt-24 px-4 md:px-16 text-white">
      <Helmet>
        <title>Fitness King | Payment</title>
      </Helmet>

      {/* Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-12">
        Complete Your{" "}
        <span className="text-teal-400 border-b-4 border-teal-400">
          Payment
        </span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Payment Details Card */}
        <div className="flex-1 bg-gray-900 rounded-2xl shadow-lg p-8 border border-teal-400 hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold mb-6 text-center text-teal-400">
            Payment Details
          </h3>

          {/* User Info */}
          <div className="flex items-center gap-4 border-b border-teal-400 pb-4 mb-4">
            <img
              src={bookedData?.userImage}
              alt={bookedData?.userName}
              className="w-16 h-16 rounded-full border-2 border-teal-400 object-cover"
            />
            <div>
              <p className="text-white font-semibold">{bookedData?.userName}</p>
              <p className="text-teal-400 text-sm">{bookedData?.userEmail}</p>
            </div>
          </div>

          {/* Trainer Info */}
          <div className="mb-4">
            <h4 className="text-teal-400 font-semibold mb-2 text-center">Trainer</h4>
            <div className="flex items-center gap-4 justify-center">
              <img
                src={bookedData?.trainer?.img}
                alt={bookedData?.trainer?.name}
                className="w-16 h-16 rounded-full border-2 border-teal-400 object-cover"
              />
              <p className="text-white font-medium">{bookedData?.trainer?.name}</p>
            </div>
          </div>

          {/* Class & Package Info */}
          <div className="text-center mt-6 space-y-2">
            <p className="text-white font-medium">
              Class Time: <span className="text-teal-400">{bookedData?.slot}</span>
            </p>
            <p className="text-white font-medium">
              Package: <span className="text-teal-400">{bookedData?.packageName}</span>
            </p>
            <p className="text-white font-medium">
              Price: <span className="text-teal-400 font-bold text-lg">${bookedData?.packagPrice}</span>
            </p>
          </div>
        </div>

        {/* Checkout Form Card */}
        <div className="flex-1 bg-gray-900 rounded-2xl shadow-lg p-8 border border-teal-400 hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold mb-6 text-center text-teal-400">Payment</h3>
          <Elements stripe={stripePromise}>
            <CheckoutForm bookedData={bookedData} price={bookedData?.packagPrice} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
