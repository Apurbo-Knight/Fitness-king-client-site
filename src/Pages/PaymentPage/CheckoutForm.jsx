import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios, { Axios } from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const CheckoutForm = ({ price, bookedData }) => {
  const { user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTreansactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  console.log(price);

  useEffect(() => {
    if(price>0){
      axios
      .post("http://localhost:1000/create-payment-intent", { price })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTreansactionId(paymentIntent.id);
        const payment = {
          customerEmail: user?.email,
          customerImage: user?.photoURL,
          customerName: user.displayName,
          trainerName: bookedData.trainer.name,
          trainerImage: bookedData.trainer.img,
          price: price,
          package: bookedData.packageName,
          slot: bookedData.slot,
          transactionId: paymentIntent.id,
        };
        const res = await axios.post("http://localhost:1000/payment", payment);
        console.log("payment saved", res);
        if(res.data?.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment Successfull",
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#38B2AC",
              "::placeholder": {
                color: "#38B2AC",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button className="bg-teal-400 px-2 rounded-md my-10 text-gray-100 font-semibold" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {transactionId && (
        <p className="text-teal-400"> your Transaction ID: {transactionId} </p>
      )}
    </form>
  );
};

export default CheckoutForm;
