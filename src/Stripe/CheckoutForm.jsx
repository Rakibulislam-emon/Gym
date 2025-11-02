import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxios from '../Hooks/useAxios';
import toast from 'react-hot-toast';
// import PaymentSuccessful from './PaymentSuccessful';

// eslint-disable-next-line react/prop-types
export default function CheckoutForm({ info }) {
    console.log('info:', info)
    const axios = useAxios();
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!stripe) return;
    
        const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret");
        if (!clientSecret) return;
    
        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            console.log('Payment Intent:', paymentIntent); // Log payment intent
            if (paymentIntent.status === "succeeded") {
                setMessage("Payment succeeded!");
                // Show success toast
                axios.post('subscriptions', info);
                toast.success("Payment succeeded! Subscription info saved.");
            } else if (paymentIntent.status === "processing") {
                setMessage("Your payment is processing.");
            } else if (paymentIntent.status === "requires_payment_method") {
                setMessage("Your payment was not successful, please try again.");
            } else {
                setMessage("Something went wrong.");
            }
        }).catch((error) => {
            console.error('Error retrieving payment intent:', error);
            setMessage("Error retrieving payment status.");
        });
    }, [axios, info, stripe]);
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            console.error("Stripe.js or Elements not loaded.");
            return;
        }

        setIsLoading(true);

        try {
            console.log('Confirming payment...');
          
           const res = await axios.post('/subscriptions',{info})
           console.log(res.data);
           if(!res.data){
            return toast.error('Something went wrong. Please try again');
           }
           console.log('reached');
            // this code has problems with sending data to server and also with toast

            const { error, paymentIntent } = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: "http://localhost:5173/payment-successful",
                },
            });
            console.log('Payment confirmed:', { error, paymentIntent });

            if (error) {
                console.error('Payment error:', error);
                setMessage(error.message);
                return;
            }
           
        } catch (err) {
            console.error('Unexpected Error:', err);
            setMessage("An unexpected error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    const paymentElementOptions = {
        layout: "tabs",
    };

    return (
        <main className='main'>
            <form id="payment-form" onSubmit={handleSubmit}>
                <PaymentElement id="payment-element" options={paymentElementOptions} />
                <button className='formBtn' disabled={isLoading || !stripe || !elements} id="submit">
                    {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                </button>
                {message && <div id="payment-message">{message}</div>}
            </form>
           {/* <div className='hidden'> <PaymentSuccessful info={info}/></div> */}
        </main>
    );
}
