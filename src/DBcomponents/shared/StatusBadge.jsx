/* eslint-disable react/prop-types */
import { FaBan, FaCheckCircle } from "react-icons/fa";

/**
 * StatusBadge Component - Display subscription/user status with color-coded badges
 *
 * @param {string} status - Status value: "active" or "blocked"
 * @param {string} size - Badge size: "sm", "md", "lg"
 * @param {boolean} showIcon - Whether to show icon (default: true)
 * @param {string} className - Additional CSS classes
 */
const StatusBadge = ({
  status = "active",
  size = "md",
  showIcon = true,
  className = "",
}) => {
  // Normalize status to lowercase
  const normalizedStatus = status?.toLowerCase();

  // Configuration for different statuses
  const statusConfig = {
    active: {
      bgColor: "bg-green-100",
      textColor: "text-green-800",
      borderColor: "border-green-300",
      icon: FaCheckCircle,
      label: "Active",
      dotColor: "bg-green-500",
    },
    blocked: {
      bgColor: "bg-red-100",
      textColor: "text-red-800",
      borderColor: "border-red-300",
      icon: FaBan,
      label: "Blocked",
      dotColor: "bg-red-500",
    },
    pending: {
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-800",
      borderColor: "border-yellow-300",
      icon: FaCheckCircle,
      label: "Pending",
      dotColor: "bg-yellow-500",
    },
    expired: {
      bgColor: "bg-gray-100",
      textColor: "text-gray-800",
      borderColor: "border-gray-300",
      icon: FaBan,
      label: "Expired",
      dotColor: "bg-gray-500",
    },
  };

  // Get configuration for current status (default to active if unknown)
  const config = statusConfig[normalizedStatus] || statusConfig.active;
  const Icon = config.icon;

  // Size configurations
  const sizeClasses = {
    sm: {
      container: "px-2 py-1 text-xs",
      icon: "w-3 h-3",
      dot: "w-2 h-2",
    },
    md: {
      container: "px-3 py-1.5 text-sm",
      icon: "w-4 h-4",
      dot: "w-2.5 h-2.5",
    },
    lg: {
      container: "px-4 py-2 text-base",
      icon: "w-5 h-5",
      dot: "w-3 h-3",
    },
  };

  const sizeClass = sizeClasses[size] || sizeClasses.md;

  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        ${config.bgColor} 
        ${config.textColor} 
        ${config.borderColor}
        ${sizeClass.container}
        font-semibold
        rounded-full
        border
        transition-all duration-200
        hover:shadow-md
        ${className}
      `}
    >
      {/* Pulsing dot indicator */}
      <span className="relative flex">
        <span
          className={`absolute inline-flex h-full w-full rounded-full ${config.dotColor} opacity-75 animate-ping`}
        ></span>
        <span
          className={`relative inline-flex rounded-full ${sizeClass.dot} ${config.dotColor}`}
        ></span>
      </span>

      {/* Icon (optional) */}
      {showIcon && Icon && <Icon className={sizeClass.icon} />}

      {/* Status Label */}
      <span>{config.label}</span>
    </span>
  );
};

export default StatusBadge;
