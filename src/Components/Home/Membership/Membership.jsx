import { useNavigate } from "react-router-dom";

export default function Membership() {
    
    const navigate = useNavigate();

    const membershipPlans = [
        {
            id: 1,
            name: "Starter",
            price: 19,
            features: [
                "Basic Membership",
                "Access to one gym location",
                "Basic fitness programs",
                "Limited personal training sessions"
            ]
        },
        {
            id: 2,
            name: "Pro",
            price: 49,
            features: [
                "Premium Membership",
                "Access to multiple gym locations",
                "Advanced fitness programs",
                "Unlimited personal training sessions"
            ]
        },
        {
            id: 3,
            name: "Business",
            price: 99,
            features: [
                "Corporate Membership",
                "Access for employees to all gym locations",
                "Custom fitness programs",
                "Dedicated corporate support"
            ]
        }
    ];

    const handleSubscription = (plan) => {
        // Redirect to payment page with plan details
        navigate('/payment', { state: { plan } });
    };

    return (
        <div className="px-4 py-16">
            <div className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
                <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
            </div>
            <h1 className="text-center font-bold text-5xl">MEMBERSHIP PLANS</h1>
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                <div className="mb-10 space-y-4 px-6 md:px-0">
                    <h2 className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl">Pricing</h2>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    {membershipPlans.map(plan => (
                        <div key={plan.id} className="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
                            <h2 className="text-lg sm:text-xl font-medium text-white mb-2">{plan.name}</h2>
                            <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
                                <span className="text-3xl sm:text-4xl font-bold text-white">${plan.price}</span> / Month
                            </p>
                            <ul className="list-none list-inside mb-6 text-center text-gray-300">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className={index === 0 ? "font-bold text-orange-600" : ""}>{feature}</li>
                                ))}
                            </ul>
                            <button
                                onClick={() => handleSubscription(plan)}
                                className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                            >
                                <span className="relative text-sm font-semibold text-black">Get Started</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
