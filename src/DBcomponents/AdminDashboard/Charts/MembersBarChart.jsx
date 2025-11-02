/* eslint-disable react/prop-types */
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import PropTypes from 'prop-types';

export default function MembersBarChart({ subscriptions }) {
  // Process data to group by month
  const processMonthlyData = () => {
    // Create a map to store member counts per month
    const monthlyData = {};

    subscriptions.forEach(sub => {
      if (sub.createdAt) {
        const date = new Date(sub.createdAt);
        const monthYear = date.toLocaleDateString('en-US', { 
          month: 'short', 
          year: 'numeric' 
        });

        if (monthlyData[monthYear]) {
          monthlyData[monthYear] += 1;
        } else {
          monthlyData[monthYear] = 1;
        }
      }
    });

    // Convert to array and sort by date
    const dataArray = Object.entries(monthlyData).map(([month, count]) => ({
      month,
      members: count,
      date: new Date(month)
    }));

    // Sort by date (oldest to newest)
    dataArray.sort((a, b) => a.date - b.date);

    // Take last 6 months only
    return dataArray.slice(-6).map(({ month, members }) => ({
      month,
      members
    }));
  };

  const chartData = processMonthlyData();

  // Custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 border border-gray-700 p-4 rounded-lg shadow-lg">
          <p className="text-white font-semibold mb-1">{payload[0].payload.month}</p>
          <p className="text-indigo-400 font-bold text-lg">
            {payload[0].value} New Member{payload[0].value !== 1 ? 's' : ''}
          </p>
        </div>
      );
    }
    return null;
  };

  // Calculate total and average
  const totalMembers = chartData.reduce((sum, item) => sum + item.members, 0);
  const avgPerMonth = chartData.length > 0 ? (totalMembers / chartData.length).toFixed(1) : 0;

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">Member Growth</h3>
        <p className="text-gray-400 text-sm">New members joining over the last 6 months</p>
      </div>

      {/* Chart */}
      {chartData.length > 0 ? (
        <>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="month" 
                stroke="#9ca3af"
                tick={{ fill: '#9ca3af', fontSize: 12 }}
              />
              <YAxis 
                stroke="#9ca3af"
                tick={{ fill: '#9ca3af', fontSize: 12 }}
                allowDecimals={false}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(99, 102, 241, 0.1)' }} />
              <Legend 
                wrapperStyle={{ paddingTop: '20px' }}
                formatter={() => <span className="text-gray-300">New Members</span>}
              />
              <Bar 
                dataKey="members" 
                fill="#6366f1"
                radius={[8, 8, 0, 0]}
                animationBegin={0}
                animationDuration={800}
              />
            </BarChart>
          </ResponsiveContainer>

          {/* Stats Summary */}
          <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-700">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">Total (6 months)</p>
              <p className="text-2xl font-bold text-white">{totalMembers}</p>
              <p className="text-indigo-400 text-xs mt-1">New Members</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">Average/Month</p>
              <p className="text-2xl font-bold text-white">{avgPerMonth}</p>
              <p className="text-indigo-400 text-xs mt-1">Members</p>
            </div>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-64 text-gray-500">
          <div className="text-center">
            <svg 
              className="w-16 h-16 mx-auto mb-4 text-gray-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
              />
            </svg>
            <p>No membership data available</p>
          </div>
        </div>
      )}
    </div>
  );
}

MembersBarChart.propTypes = {
  subscriptions: PropTypes.arrayOf(
    PropTypes.shape({
      createdAt: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
      ])
    })
  ).isRequired,
};