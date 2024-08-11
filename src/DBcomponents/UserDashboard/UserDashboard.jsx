import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";

export default function UserDashboard() {
    const axios = useAxios();
    const { user } = useAuth();
    console.log('user:', user?.email);

    const { data: subscriptions = [] } = useQuery({
        queryKey: ['subscriptions'],
        queryFn: async () => {
            const response = await axios.get('/subscriptions');
            return response.data;
        },
        refetchInterval: 10000, // refetch every 10 seconds
    });
    const { data: users = [] } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const response = await axios.get('/users');
            return response.data;
        },
        refetchInterval: 10000, // refetch every 10 seconds
    })
    console.log(users);

    // Find the subscription that matches the current user's email
    const userSubscription = subscriptions.find(sub => sub?.email === user?.email);
    console.log('userSubscription:', userSubscription)

    // If no subscription is found, return null or show a message
    if (!userSubscription) {
        return <div>No subscription found for this user.</div>;
    }
    // Destructure the subscription plan details
    const { name, price, features } = userSubscription.subscriptionPlan;

    const userName = users.find(u => u.email === user.email)

    return (
        <section className="py-8 bg-gray-900 min-h-screen">
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    Hello, {userName?.username || "User"}!
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 font-extrabold mb-4 border-b-4 py-4 border-green-400 ">
                    Welcome to your subscription dashboard.
                </p>
            </div>
            <div className="text-white my-8 text-center">
                <p className="text-2xl">CURRENT SUBSCRIPTION ⬇️</p>
            </div>
            <div className="flex flex-col items-center mx-auto p-6 sm:p-8 bg-gray-800 border border-gray-700 rounded-2xl shadow-lg max-w-md mb-8 ">


                <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 ">
                    {name}
                </h2>
                <p className="text-lg sm:text-xl text-center mb-6 text-gray-400">
                    <span className="text-4xl sm:text-5xl font-bold text-white">${price}</span> / Month
                </p>
                <ul className="list-none list-inside mb-6 text-center text-gray-300 space-y-2">
                    {features.map((feature, index) => (
                        <li key={index} className={`text-lg ${index === 0 ? "font-bold text-orange-500" : ""}`}>
                            {feature}
                        </li>
                    ))}
                </ul>
                <p className={`text-sm font-semibold ${userSubscription.status === 'active' ? 'text-green-500' : 'text-red-500'}`}>
                    Status: {userSubscription.status}
                </p>
            </div>




        </section>

    );
}
