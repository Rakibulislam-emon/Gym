import {  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
/* eslint-disable react/prop-types */

/**
 * RevenueChart Component - Shows revenue trend over the last 6 months
 * 
 * @param {array} subscriptions - Array of subscription objects from API
 * @param {string} className - Additional CSS classes
 */
const RevenueChart = ({ subscriptions = [], className = "" }) => {
  
  // Process subscription data to calculate monthly revenue
  const processRevenueData = () => {
    const monthlyRevenue = {};
    const months = [];
    
    // Get last 6 months
    for (let i = 5; i >= 0; i--) {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      const monthKey = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      months.push(monthKey);
      monthlyRevenue[monthKey] = 0;
    }
    
    // Calculate revenue for each month
    subscriptions.forEach(sub => {
      if (sub.createdAt && sub.subscriptionPlan?.price) {
        const subDate = new Date(sub.createdAt);
        const monthKey = subDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
        
        // eslint-disable-next-line no-prototype-builtins
        if (monthlyRevenue?.hasOwnProperty(monthKey)) {
          monthlyRevenue[monthKey] += sub.subscriptionPlan.price;
        }
      }
    });
    
    // Format data for recharts
    return months.map(month => ({
      month: month.split(' ')[0], // Just month name (e.g., "Jan")
      revenue: monthlyRevenue[month],
      fullMonth: month
    }));
  };

  const data = processRevenueData();

  // Calculate total and average revenue
  const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0);
  const avgRevenue = totalRevenue / data.length;
  const maxRevenue = Math.max(...data.map(item => item.revenue));

  // Custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 shadow-xl">
          <p className="text-white font-semibold text-sm mb-1">
            {payload[0].payload.fullMonth}
          </p>
          <p className="text-green-400 font-bold text-lg">
            ${payload[0].value.toLocaleString()}
          </p>
          <p className="text-gray-400 text-xs mt-1">
            {payload[0].value > avgRevenue ? '↑ Above average' : '↓ Below average'}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-800">Revenue Trend</h3>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Last 6 Months</span>
          </div>
        </div>
        
        {/* Stats */}
        <div className="flex gap-6 mt-4">
          <div>
            <p className="text-xs text-gray-500">Total Revenue</p>
            <p className="text-2xl font-bold text-gray-800">${totalRevenue.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Average/Month</p>
            <p className="text-2xl font-bold text-indigo-600">${avgRevenue.toFixed(0).toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Peak Month</p>
            <p className="text-2xl font-bold text-purple-600">${maxRevenue.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="month" 
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area 
            type="monotone" 
            dataKey="revenue" 
            stroke="#6366f1" 
            strokeWidth={3}
            fill="url(#colorRevenue)" 
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>

      {/* No Data Message */}
      {data.every(item => item.revenue === 0) && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 rounded-xl">
          <div className="text-center">
            <p className="text-gray-500 font-medium">No revenue data available</p>
            <p className="text-gray-400 text-sm">Data will appear once subscriptions are created</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RevenueChart;