import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";

export default function SubscriptionLists() {
    const { user } = useAuth()
    const axios = useAxios()
    const { data: subscriptions = [] } = useQuery({
        queryKey: ['subscriptions'],
        queryFn: async () => {
            const response = await axios.get('/subscriptions');
            return response.data;
        },
        refetchInterval: 10000, // refetch every 10 seconds
    });
    const matchedEmail = subscriptions.filter(sub => sub.email === user?.email)

    return (
        <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-8 p-4 max-w-full">
        {matchedEmail ? (
            matchedEmail.map((sub) => (
                <div key={sub._id} className="flex flex-col items-start p-6 bg-gray-800 border border-gray-700 rounded-2xl shadow-lg w-full max-w-md">
                    <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                        {sub.subscriptionPlan.name}
                    </h2>
                    <p className="text-lg sm:text-xl text-center mb-6 text-gray-400">
                        <span className="text-3xl sm:text-4xl font-bold text-white">${sub.subscriptionPlan.price}</span> / Month
                    </p>
                    <ul className="list-none list-inside mb-4 text-gray-300 space-y-2">
                        {sub.subscriptionPlan.features.map((feature, index) => (
                            <li key={index} className={`text-lg ${index === 0 ? "font-bold text-orange-500" : ""}`}>
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <p className={`text-sm font-semibold ${sub.status === 'active' ? 'text-green-500' : 'text-red-500'}`}>
                    Status: {sub.status.charAt(0).toUpperCase() + sub.status.slice(1)}
                </p>
                </div>
            ))
        ) : (
            <div className="col-span-full text-center text-white">
                <p>No subscriptions available.</p>
            </div>
        )}
    </div>
    
    )
}
