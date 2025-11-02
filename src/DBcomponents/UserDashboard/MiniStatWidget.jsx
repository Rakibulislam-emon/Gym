import { FaDumbbell, FaFire, FaCalendarCheck, FaHeart } from 'react-icons/fa';
import CountUp from 'react-countup';

export default function MiniStatWidget({ type, value, label, trend }) {
  const getIcon = () => {
    switch (type) {
      case 'workouts':
        return <FaDumbbell className="text-blue-400" />;
      case 'calories':
        return <FaFire className="text-orange-400" />;
      case 'sessions':
        return <FaCalendarCheck className="text-green-400" />;
      case 'streak':
        return <FaHeart className="text-red-400" />;
      default:
        return <FaDumbbell className="text-indigo-400" />;
    }
  };

  const getTrendColor = () => {
    if (!trend) return 'text-gray-400';
    return trend > 0 ? 'text-green-400' : 'text-red-400';
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-gray-600 transition duration-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm mb-1">{label}</p>
          <div className="text-2xl font-bold text-white">
            <CountUp end={value} duration={2} />
          </div>
          {trend !== undefined && (
            <p className={`text-xs ${getTrendColor()} mt-1`}>
              {trend > 0 ? '+' : ''}{trend}% from last week
            </p>
          )}
        </div>
        <div className="p-3 bg-gray-700 rounded-lg">
          {getIcon()}
        </div>
      </div>
    </div>
  );
}