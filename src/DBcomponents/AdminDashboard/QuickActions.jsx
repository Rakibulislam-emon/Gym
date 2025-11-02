import { FaUserPlus, FaFileExport, FaSyncAlt, FaChartBar } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function QuickActions({ onRefresh }) {
  
  const handleAddMember = () => {
    toast('Add Member feature coming soon!', { icon: '🚀' });
  };

  const handleExportData = () => {
    toast.success('Data exported successfully!');
    // Future: Add actual CSV export logic
  };

  const handleRefresh = () => {
    if (onRefresh) {
      onRefresh();
      toast.success('Dashboard refreshed!');
    }
  };

  const handleViewReports = () => {
    toast('Reports feature coming soon!', { icon: '📊' });
  };

  const actions = [
    {
      id: 1,
      label: 'Add Member',
      icon: FaUserPlus,
      onClick: handleAddMember,
      color: 'indigo',
      gradient: 'from-indigo-600 to-indigo-400'
    },
    {
      id: 2,
      label: 'Export Data',
      icon: FaFileExport,
      onClick: handleExportData,
      color: 'green',
      gradient: 'from-green-600 to-green-400'
    },
    {
      id: 3,
      label: 'Refresh',
      icon: FaSyncAlt,
      onClick: handleRefresh,
      color: 'orange',
      gradient: 'from-orange-600 to-orange-400'
    },
    {
      id: 4,
      label: 'View Reports',
      icon: FaChartBar,
      onClick: handleViewReports,
      color: 'blue',
      gradient: 'from-blue-600 to-blue-400'
    }
  ];

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-1">Quick Actions</h3>
        <p className="text-gray-400 text-sm">Common tasks and shortcuts</p>
      </div>

      {/* Action Buttons Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.id}
              onClick={action.onClick}
              className="group relative flex flex-col items-center justify-center p-6 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {/* Icon with gradient background */}
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${action.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="text-white text-xl" />
              </div>

              {/* Label */}
              <span className="text-white text-sm font-semibold text-center">
                {action.label}
              </span>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gray-600 transition-colors duration-300"></div>
            </button>
          );
        })}
      </div>
    </div>
  );
}