import { useQuery } from "@tanstack/react-query";
import { FaCheckCircle, FaClock, FaCrown } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import EmptyState from "../shared/EmptyState";
import LoadingSpinner from "../shared/LoadingSpinner";

export default function SubscriptionLists() {
  const { user } = useAuth();
  const axios = useAxios();
  const { data: subscriptions = [], isLoading } = useQuery({
    queryKey: ["subscriptions"],
    queryFn: async () => {
      const response = await axios.get("/subscriptions");
      return response.data;
    },
  });

  const matchedEmail = subscriptions.filter((sub) => sub.email === user?.email);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!matchedEmail.length) {
    return (
      <EmptyState
        title="No Subscriptions Found"
        message="You don't have any active subscriptions."
        actionText="View Plans"
        onAction={() => (window.location.href = "/membership")}
      />
    );
  }

  return (
    <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4  py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white  mb-2">
              Your Subscriptions
            </h1>
            <p className="text-gray-400">
              Manage all your active plans and memberships
            </p>
          </div>
    
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {matchedEmail.map((sub) => (
              <div
                key={sub._id}
                className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition duration-200"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-indigo-600 rounded-lg">
                      <FaCrown className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {sub.subscriptionPlan.name}
                    </h3>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      sub.status === "active"
                        ? "bg-green-900 text-green-300 border border-green-700"
                        : "bg-red-900 text-red-300 border border-red-700"
                    }`}
                  >
                    {sub.status.charAt(0).toUpperCase() + sub.status.slice(1)}
                  </span>
                </div>
    
                {/* Price */}
                <div className="text-center mb-6 p-4 bg-gray-750 rounded-xl">
                  <span className="text-4xl font-bold text-white">
                    ${sub.subscriptionPlan.price}
                  </span>
                  <span className="text-gray-400 text-lg ml-2">/month</span>
                </div>
    
                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {sub.subscriptionPlan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <FaCheckCircle
                        className={`flex-shrink-0 ${
                          index === 0 ? "text-orange-500" : "text-green-500"
                        }`}
                      />
                      <span
                        className={`text-gray-300 ${
                          index === 0 ? "font-semibold" : ""
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
    
                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <FaClock />
                    <span>
                      Joined {new Date(sub.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition duration-200">
                    Manage
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}
