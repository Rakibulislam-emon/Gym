/* eslint-disable react/prop-types */
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
// import PropTypes from 'prop-types';

export default function SubscriptionPieChart({ subscriptions }) {
  // Calculate active and blocked counts
  const activeCount = subscriptions.filter(sub => sub.status === 'active').length;
  const blockedCount = subscriptions.filter(sub => sub.status === 'blocked').length;

  // Prepare data for pie chart
  const data = [
    { name: 'Active', value: activeCount, color: '#10b981' },
    { name: 'Blocked', value: blockedCount, color: '#ef4444' }
  ];

  // Calculate percentages
  const total = activeCount + blockedCount;
  const activePercentage = total > 0 ? ((activeCount / total) * 100).toFixed(1) : 0;
  const blockedPercentage = total > 0 ? ((blockedCount / total) * 100).toFixed(1) : 0;

  // Custom label to show percentages on slices
  const renderLabel = (entry) => {
    const percent = ((entry.value / total) * 100).toFixed(0);
    return `${percent}%`;
  };

  // Custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 border border-gray-700 p-3 rounded-lg shadow-lg">
          <p className="text-white font-semibold">{payload[0].name}</p>
          <p className="text-gray-300">Count: {payload[0].value}</p>
          <p className="text-gray-300">
            Percentage: {((payload[0].value / total) * 100).toFixed(1)}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-2">Subscription Status</h3>
        <p className="text-gray-400 text-sm">Distribution of active vs blocked members</p>
      </div>

      {/* Chart */}
      {total > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderLabel}
              outerRadius={100}
              innerRadius={60}
              fill="#8884d8"
              dataKey="value"
              animationBegin={0}
              animationDuration={800}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value, entry) => (
                <span className="text-gray-300">{value}: {entry.payload.value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <div className="flex items-center justify-center h-64 text-gray-500">
          <p>No subscription data available</p>
        </div>
      )}

      {/* Stats Summary */}
      <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-700">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <span className="text-gray-400 text-sm">Active</span>
          </div>
          <p className="text-2xl font-bold text-white">{activeCount}</p>
          <p className="text-green-500 text-sm font-semibold">{activePercentage}%</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <span className="text-gray-400 text-sm">Blocked</span>
          </div>
          <p className="text-2xl font-bold text-white">{blockedCount}</p>
          <p className="text-red-500 text-sm font-semibold">{blockedPercentage}%</p>
        </div>
      </div>
    </div>
  );
}

// SubscriptionPieChart.propTypes = {
//   subscriptions: PropTypes.arrayOf(
//     PropTypes.shape({
//       status: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };