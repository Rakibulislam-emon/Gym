import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
<<<<<<< HEAD
import CheckoutForm from "./CheckoutForm";
import './Style.css';
import { useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
=======
import { useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import CheckoutForm from "./CheckoutForm";
import "./Style.css";
>>>>>>> 46f2fea72613ec336d24f9a8b2286ba7653abdf3
// import PaymentSuccessful from "./PaymentSuccessful";
// import useAxios from "../Hooks/useAxios";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC);

export default function Payment() {
<<<<<<< HEAD
    const { user } = useAuth();
    // const axios = useAxios();
    const [clientSecret, setClientSecret] = useState("");
    const location = useLocation()
    const { plan } = location.state || {};
    const price = plan?.price;

    const info = {
        email: user?.email,
        subscriptionPlan: plan
    }
    console.log(info);
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://gym-omega-black.vercel.app/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price: price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data?.clientSecret));
    }, [price, user?.email]);
    console.log(clientSecret);
    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div>
            <h1>Payment</h1>
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm info={info} />
                </Elements>
            )}

        </div>
    );
=======
  const { user } = useAuth();
  // const axios = useAxios();
  const [clientSecret, setClientSecret] = useState("");
  const location = useLocation();
  const { plan } = location.state || {};
  const price = plan?.price;

  const info = {
    email: user?.email,
    subscriptionPlan: plan,
  };
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://gym-omega-black.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data?.clientSecret));
  }, [price, user?.email]);
  const appearance = {
    theme: "stripe",
    loader: "never",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
      <div>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm info={info} />
          </Elements>
        )}
      </div>
    
  );
>>>>>>> 46f2fea72613ec336d24f9a8b2286ba7653abdf3
}
