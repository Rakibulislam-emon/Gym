import { FaCrown, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

export default function HeroSubscriptionCard({ subscription, userName }) {
  const { subscriptionPlan, status, createdAt } = subscription;
  const { name, price, features } = subscriptionPlan;

  // Calculate days since subscription
  const subscriptionDate = new Date(createdAt);
  const daysSinceJoin = Math.floor((new Date() - subscriptionDate) / (1000 * 60 * 60 * 24));

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-xl p-6 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-indigo-600 rounded-xl">
            <FaCrown className="text-white text-xl" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Your Membership</h2>
            <p className="text-gray-400">Active Plan</p>
          </div>
        </div>
        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
          status === 'active' 
            ? 'bg-green-900 text-green-300 border border-green-700' 
            : 'bg-red-900 text-red-300 border border-red-700'
        }`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      {/* Plan Details */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-3xl font-bold text-white mb-2">{name}</h3>
          <p className="text-4xl font-bold text-indigo-400 mb-1">${price}<span className="text-lg text-gray-400">/month</span></p>
          <div className="flex items-center text-gray-400 text-sm">
            <FaCalendarAlt className="mr-2" />
            <span>Member for {daysSinceJoin} days</span>
          </div>
        </div>
        
        {/* Features */}
        <div className="space-y-2">
          <h4 className="text-lg font-semibold text-white mb-3">Plan Features:</h4>
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500 flex-shrink-0" />
              <span className={`text-gray-300 ${index === 0 ? 'font-semibold text-orange-400' : ''}`}>
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-xl transition duration-200">
          Upgrade Plan
        </button>
        <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-xl transition duration-200 border border-gray-600">
          Manage Billing
        </button>
      </div>
    </div>
  );
}