import { FaUserPlus, FaClock, FaCheckCircle, FaBan } from 'react-icons/fa';
/* eslint-disable react/prop-types */

export default function RecentActivity({ subscriptions, users }) {
  // Get user name by email
  const getUserNameByEmail = (email) => {
    const user = users.find(u => u.email === email);
    return user?.username || 'Unknown User';
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now - date;
    const diffInMins = Math.floor(diffInMs / 60000);
    const diffInHours = Math.floor(diffInMs / 3600000);
    const diffInDays = Math.floor(diffInMs / 86400000);

    if (diffInMins < 1) return 'Just now';
    if (diffInMins < 60) return `${diffInMins} min${diffInMins > 1 ? 's' : ''} ago`;
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    if (diffInDays < 7) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });
  };

  // Sort by createdAt (newest first) and take last 10
  const recentActivities = [...subscriptions]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 10);

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Recent Activity</h3>
          <p className="text-gray-400 text-sm">Latest subscription activities</p>
        </div>
        <div className="bg-indigo-500/20 p-2 rounded-lg">
          <FaClock className="text-indigo-400 text-xl" />
        </div>
      </div>

      {/* Activity List */}
      {recentActivities.length > 0 ? (
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div 
              key={activity._id || index}
              className="flex items-start gap-4 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              {/* Icon */}
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                activity.status === 'active' 
                  ? 'bg-green-500/20 text-green-400' 
                  : 'bg-red-500/20 text-red-400'
              }`}>
                {activity.status === 'active' ? (
                  <FaCheckCircle className="text-lg" />
                ) : (
                  <FaBan className="text-lg" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold truncate">
                      {getUserNameByEmail(activity.email)}
                    </p>
                    <p className="text-gray-400 text-sm truncate">
                      {activity.email}
                    </p>
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap">
                    {formatDate(activity.createdAt)}
                  </span>
                </div>

                <div className="mt-2 flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full">
                    <FaUserPlus className="text-[10px]" />
                    {activity.subscriptionPlan?.name || 'Plan'}
                  </span>
                  <span className={`inline-flex items-center px-2 py-1 text-xs rounded-full ${
                    activity.status === 'active'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {activity.status === 'active' ? 'Active' : 'Blocked'}
                  </span>
                  <span className="text-gray-500 text-xs">
                    ${activity.subscriptionPlan?.price || 0}/mo
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-gray-500">
          <FaClock className="text-5xl mb-4 text-gray-600" />
          <p className="text-lg font-semibold">No Recent Activity</p>
          <p className="text-sm text-gray-400 mt-1">Subscription activities will appear here</p>
        </div>
      )}

      {/* View All Link */}
      {recentActivities.length > 0 && (
        <div className="mt-6 pt-4 border-t border-gray-700 text-center">
          <button className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold transition-colors duration-200">
            View All Activity →
          </button>
        </div>
      )}
    </div>
  );
}

