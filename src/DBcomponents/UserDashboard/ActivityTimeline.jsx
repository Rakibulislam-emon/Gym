import { FaDumbbell, FaCalendarAlt, FaCheckCircle, FaStar } from 'react-icons/fa';

export default function ActivityTimeline() {
  // Mock data - in real app, this would come from backend
  const activities = [
    {
      id: 1,
      type: 'workout',
      title: 'Completed Chest Day Workout',
      description: 'Bench press: 3 sets of 10 reps',
      time: '2 hours ago',
      icon: FaDumbbell,
      color: 'text-blue-400'
    },
    {
      id: 2,
      type: 'booking',
      title: 'Yoga Class Booked',
      description: 'Tomorrow at 6:00 PM with Sarah',
      time: '5 hours ago',
      icon: FaCalendarAlt,
      color: 'text-green-400'
    },
    {
      id: 3,
      type: 'achievement',
      title: 'New Personal Record',
      description: 'Deadlift: 225 lbs',
      time: '1 day ago',
      icon: FaStar,
      color: 'text-yellow-400'
    },
    {
      id: 4,
      type: 'checkin',
      title: 'Gym Check-in',
      description: 'Evening session',
      time: '2 days ago',
      icon: FaCheckCircle,
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
      <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={activity.id} className="flex space-x-4">
            {/* Timeline line */}
            {index !== activities.length - 1 && (
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center border border-gray-600">
                  <activity.icon className={`text-sm ${activity.color}`} />
                </div>
                <div className="w-0.5 h-full bg-gray-600 mt-2"></div>
              </div>
            )}
            {index === activities.length - 1 && (
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center border border-gray-600">
                <activity.icon className={`text-sm ${activity.color}`} />
              </div>
            )}
            
            {/* Activity content */}
            <div className="flex-1 pb-4">
              <h4 className="text-white font-semibold">{activity.title}</h4>
              <p className="text-gray-400 text-sm">{activity.description}</p>
              <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}