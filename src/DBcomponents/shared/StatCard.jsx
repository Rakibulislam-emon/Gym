/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import CountUp from "react-countup";

/**
 * StatCard Component - Reusable stat display card with animation
 *
 * @param {string} title - Card title (e.g., "Total Revenue")
 * @param {number} value - Numeric value to display
 * @param {string} prefix - Prefix for value (e.g., "$" for currency)
 * @param {string} suffix - Suffix for value (e.g., "+" for counts)
 * @param {object} icon - React icon component from react-icons
 * @param {string} trend - Trend indicator: "up", "down", or null
 * @param {number} trendValue - Percentage change (e.g., 12.5)
 * @param {string} gradientFrom - Tailwind gradient start color
 * @param {string} gradientTo - Tailwind gradient end color
 * @param {string} iconBg - Background color for icon container
 */
const StatCard = ({
  title = "Stat Title",
  value = 0,
  prefix = "",
  suffix = "",
  icon: Icon,
  trend = null,
  trendValue = 0,
  gradientFrom = "blue-600",
  gradientTo = "blue-400",
  iconBg = "bg-blue-500",
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    // Add entrance animation
    if (cardRef.current) {
      cardRef.current.style.opacity = "0";
      cardRef.current.style.transform = "translateY(20px)";

      setTimeout(() => {
        cardRef.current.style.transition = "all 0.5s ease-out";
        cardRef.current.style.opacity = "1";
        cardRef.current.style.transform = "translateY(0)";
      }, 100);
    }
  }, []);

  // Determine trend color and icon
  const getTrendDisplay = () => {
    if (!trend) return null;

    const isPositive = trend === "up";
    const color = isPositive ? "text-green-500" : "text-red-500";
    const arrow = isPositive ? "↑" : "↓";

    return (
      <span className={`flex items-center text-sm font-semibold ${color}`}>
        <span className="mr-1">{arrow}</span>
        {trendValue}%
      </span>
    );
  };

  return (
    <div
      ref={cardRef}
      className="relative flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
    >
      {/* Icon Container - Floating on top-left */}
      <div
        className={`absolute -mt-4 ml-4 grid h-16 w-16 place-items-center rounded-xl bg-gradient-to-tr from-${gradientFrom} to-${gradientTo} text-white shadow-lg ${iconBg}/40 shadow-lg`}
      >
        {Icon && <Icon className="w-6 h-6 text-white" />}
      </div>

      {/* Content */}
      <div className="p-4 text-right pt-6">
        {/* Title */}
        <p className="block antialiased text-sm leading-normal font-semibold text-gray-600 mb-1">
          {title}
        </p>

        {/* Value with CountUp Animation */}
        <h4 className="block antialiased tracking-normal font-sans text-3xl font-bold leading-snug text-blue-gray-900">
          <CountUp
            start={0}
            end={value}
            duration={2}
            separator=","
            decimals={value % 1 !== 0 ? 2 : 0}
            prefix={prefix}
            suffix={suffix}
          />
        </h4>
      </div>

      {/* Footer with Trend */}
      {trend && (
        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">vs last month</span>
            {getTrendDisplay()}
          </div>
        </div>
      )}

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default StatCard;
