/* eslint-disable react/prop-types */
import { useState } from "react";

/**
 * ActionButton Component - Reusable icon button with tooltip and variants
 *
 * @param {object} icon - React icon component from react-icons
 * @param {function} onClick - Click handler function
 * @param {string} variant - Button style: "edit", "delete", "block", "view", "primary", "success", "info"
 * @param {string} tooltip - Tooltip text on hover
 * @param {string} size - Button size: "sm", "md", "lg"
 * @param {boolean} disabled - Disabled state
 * @param {string} className - Additional CSS classes
 * @param {boolean} loading - Show loading spinner
 */
const ActionButton = ({
  icon: Icon,
  onClick,
  variant = "primary",
  tooltip = "",
  size = "md",
  disabled = false,
  className = "",
  loading = false,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Variant configurations
  const variantConfig = {
    edit: {
      bg: "bg-blue-500",
      hoverBg: "hover:bg-blue-600",
      text: "text-white",
      shadow: "shadow-blue-500/50",
      ring: "focus:ring-blue-300",
    },
    delete: {
      bg: "bg-red-500",
      hoverBg: "hover:bg-red-600",
      text: "text-white",
      shadow: "shadow-red-500/50",
      ring: "focus:ring-red-300",
    },
    block: {
      bg: "bg-orange-500",
      hoverBg: "hover:bg-orange-600",
      text: "text-white",
      shadow: "shadow-orange-500/50",
      ring: "focus:ring-orange-300",
    },
    view: {
      bg: "bg-gray-500",
      hoverBg: "hover:bg-gray-600",
      text: "text-white",
      shadow: "shadow-gray-500/50",
      ring: "focus:ring-gray-300",
    },
    primary: {
      bg: "bg-indigo-500",
      hoverBg: "hover:bg-indigo-600",
      text: "text-white",
      shadow: "shadow-indigo-500/50",
      ring: "focus:ring-indigo-300",
    },
    success: {
      bg: "bg-green-500",
      hoverBg: "hover:bg-green-600",
      text: "text-white",
      shadow: "shadow-green-500/50",
      ring: "focus:ring-green-300",
    },
    info: {
      bg: "bg-cyan-500",
      hoverBg: "hover:bg-cyan-600",
      text: "text-white",
      shadow: "shadow-cyan-500/50",
      ring: "focus:ring-cyan-300",
    },
  };

  // Size configurations
  const sizeConfig = {
    sm: "p-1.5 text-sm",
    md: "p-2 text-base",
    lg: "p-3 text-lg",
  };

  const iconSizeConfig = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  const config = variantConfig[variant] || variantConfig.primary;
  const sizeClass = sizeConfig[size] || sizeConfig.md;
  const iconSize = iconSizeConfig[size] || iconSizeConfig.md;

  return (
    <div className="relative inline-block">
      <button
        onClick={onClick}
        disabled={disabled || loading}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`
          ${config.bg}
          ${config.hoverBg}
          ${config.text}
          ${sizeClass}
          rounded-lg
          shadow-md
          ${config.shadow}
          transition-all
          duration-200
          transform
          hover:scale-110
          hover:shadow-lg
          focus:outline-none
          focus:ring-2
          ${config.ring}
          active:scale-95
          disabled:opacity-50
          disabled:cursor-not-allowed
          disabled:hover:scale-100
          ${className}
        `}
        aria-label={tooltip}
      >
        {loading ? (
          <svg
            className={`animate-spin ${iconSize}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          Icon && <Icon className={iconSize} />
        )}
      </button>

      {/* Tooltip */}
      {tooltip && showTooltip && !disabled && (
        <div className="absolute z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-lg -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap animate-fade-in">
          {tooltip}
          {/* Tooltip arrow */}
          <div className="absolute w-2 h-2 bg-gray-900 transform rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
        </div>
      )}
    </div>
  );
};

export default ActionButton;
