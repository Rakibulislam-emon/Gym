import { FaInbox, FaUsers, FaClipboardList, FaSearch, FaExclamationCircle } from 'react-icons/fa';

/**
 * EmptyState Component - Beautiful placeholder when no data is available
 * 
 * @param {string} title - Main heading text
 * @param {string} message - Description message
 * @param {object} icon - React icon component from react-icons
 * @param {string} type - Preset type: "noData", "noUsers", "noSubscriptions", "noResults", "error"
 * @param {object} action - Action button config: { label, onClick, icon }
 * @param {string} size - Component size: "sm", "md", "lg"
 * @param {string} className - Additional CSS classes
 */
const EmptyState = ({
  title = "No data available",
  message = "There's nothing to display here yet.",
  icon: CustomIcon,
  type = "noData",
  action = null,
  size = "md",
  className = ""
}) => {

  // Preset configurations for common empty states
  const presets = {
    noData: {
      icon: FaInbox,
      title: "No Data Available",
      message: "There's nothing to display here yet. Check back later!",
      iconColor: "text-gray-400"
    },
    noUsers: {
      icon: FaUsers,
      title: "No Users Found",
      message: "No users match your current filters. Try adjusting your search.",
      iconColor: "text-blue-400"
    },
    noSubscriptions: {
      icon: FaClipboardList,
      title: "No Subscriptions",
      message: "You don't have any active subscriptions yet.",
      iconColor: "text-purple-400"
    },
    noResults: {
      icon: FaSearch,
      title: "No Results Found",
      message: "We couldn't find anything matching your search. Try different keywords.",
      iconColor: "text-orange-400"
    },
    error: {
      icon: FaExclamationCircle,
      title: "Something Went Wrong",
      message: "We encountered an error while loading the data. Please try again.",
      iconColor: "text-red-400"
    }
  };

  // Get preset or use custom values
  const preset = presets[type] || presets.noData;
  const Icon = CustomIcon || preset.icon;
  const displayTitle = title || preset.title;
  const displayMessage = message || preset.message;
  const iconColor = preset.iconColor;

  // Size configurations
  const sizeConfig = {
    sm: {
      icon: 'w-12 h-12',
      title: 'text-lg',
      message: 'text-sm',
      button: 'px-4 py-2 text-sm',
      spacing: 'space-y-2',
      padding: 'py-8'
    },
    md: {
      icon: 'w-16 h-16',
      title: 'text-xl',
      message: 'text-base',
      button: 'px-6 py-2.5 text-base',
      spacing: 'space-y-3',
      padding: 'py-12'
    },
    lg: {
      icon: 'w-24 h-24',
      title: 'text-2xl',
      message: 'text-lg',
      button: 'px-8 py-3 text-lg',
      spacing: 'space-y-4',
      padding: 'py-16'
    }
  };

  const selectedSize = sizeConfig[size] || sizeConfig.md;

  return (
    <div className={`flex flex-col items-center justify-center text-center ${selectedSize.padding} ${className}`}>
      {/* Icon with animation */}
      <div className="relative mb-4">
        {/* Pulsing background circle */}
        <div className={`absolute inset-0 ${iconColor.replace('text-', 'bg-')} opacity-10 rounded-full animate-pulse`} />
        
        {/* Icon */}
        <div className="relative">
          <Icon className={`${selectedSize.icon} ${iconColor} opacity-80`} />
        </div>
      </div>

      {/* Content */}
      <div className={`max-w-md ${selectedSize.spacing}`}>
        {/* Title */}
        <h3 className={`${selectedSize.title} font-bold text-gray-800 dark:text-gray-200`}>
          {displayTitle}
        </h3>

        {/* Message */}
        <p className={`${selectedSize.message} text-gray-600 dark:text-gray-400`}>
          {displayMessage}
        </p>

        {/* Action Button (optional) */}
        {action && (
          <button
            onClick={action.onClick}
            className={`
              mt-6 inline-flex items-center gap-2
              ${selectedSize.button}
              bg-indigo-600 hover:bg-indigo-700
              text-white font-semibold
              rounded-lg shadow-md
              transition-all duration-200
              hover:scale-105 hover:shadow-lg
              active:scale-95
              focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
            `}
          >
            {action.icon && <action.icon className="w-5 h-5" />}
            {action.label}
          </button>
        )}
      </div>
    </div>
  );
};

export default EmptyState;