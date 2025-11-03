/* eslint-disable react/prop-types */
/**
 * LoadingSpinner Component - Beautiful loading animations for different contexts
 *
 * @param {string} type - Spinner type: "spinner", "dots", "pulse", "bars", "ring"
 * @param {string} size - Spinner size: "sm", "md", "lg", "xl"
 * @param {string} color - Color variant: "primary", "secondary", "white", "gray"
 * @param {string} text - Optional loading text
 * @param {boolean} fullScreen - Show as fullscreen overlay
 * @param {string} className - Additional CSS classes
 */
const LoadingSpinner = ({
  type = "spinner",
  size = "md",
  color = "primary",
  text = "",
  fullScreen = false,
  className = "",
}) => {
  // Size configurations
  const sizeConfig = {
    sm: { spinner: "w-6 h-6", dot: "w-2 h-2", bar: "w-1 h-8" },
    md: { spinner: "w-10 h-10", dot: "w-3 h-3", bar: "w-2 h-12" },
    lg: { spinner: "w-16 h-16", dot: "w-4 h-4", bar: "w-3 h-16" },
    xl: { spinner: "w-24 h-24", dot: "w-6 h-6", bar: "w-4 h-20" },
  };

  // Color configurations
  const colorConfig = {
    primary: "text-indigo-600",
    secondary: "text-orange-500",
    white: "text-white",
    gray: "text-gray-600",
    success: "text-green-500",
    danger: "text-red-500",
  };

  const selectedSize = sizeConfig[size] || sizeConfig.md;
  const selectedColor = colorConfig[color] || colorConfig.primary;

  // Spinner Types
  const spinnerTypes = {
    // Classic spinning circle
    spinner: (
      <svg
        className={`animate-spin ${selectedSize.spinner} ${selectedColor}`}
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
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    ),

    // Bouncing dots
    dots: (
      <div className="flex space-x-2">
        <div
          className={`${selectedSize.dot} ${selectedColor.replace(
            "text-",
            "bg-"
          )} rounded-full animate-bounce`}
          style={{ animationDelay: "0ms" }}
        />
        <div
          className={`${selectedSize.dot} ${selectedColor.replace(
            "text-",
            "bg-"
          )} rounded-full animate-bounce`}
          style={{ animationDelay: "150ms" }}
        />
        <div
          className={`${selectedSize.dot} ${selectedColor.replace(
            "text-",
            "bg-"
          )} rounded-full animate-bounce`}
          style={{ animationDelay: "300ms" }}
        />
      </div>
    ),

    // Pulsing circle
    pulse: (
      <div className="relative">
        <div
          className={`${selectedSize.spinner} ${selectedColor.replace(
            "text-",
            "bg-"
          )} rounded-full animate-ping absolute opacity-75`}
        />
        <div
          className={`${selectedSize.spinner} ${selectedColor.replace(
            "text-",
            "bg-"
          )} rounded-full`}
        />
      </div>
    ),

    // Loading bars
    bars: (
      <div className="flex space-x-1 items-end">
        <div
          className={`${selectedSize.bar} ${selectedColor.replace(
            "text-",
            "bg-"
          )} rounded animate-pulse`}
          style={{ animationDelay: "0ms" }}
        />
        <div
          className={`${selectedSize.bar} ${selectedColor.replace(
            "text-",
            "bg-"
          )} rounded animate-pulse`}
          style={{ animationDelay: "150ms" }}
        />
        <div
          className={`${selectedSize.bar} ${selectedColor.replace(
            "text-",
            "bg-"
          )} rounded animate-pulse`}
          style={{ animationDelay: "300ms" }}
        />
        <div
          className={`${selectedSize.bar} ${selectedColor.replace(
            "text-",
            "bg-"
          )} rounded animate-pulse`}
          style={{ animationDelay: "450ms" }}
        />
      </div>
    ),

    // Ring spinner
    ring: (
      <div
        className={`${
          selectedSize.spinner
        } rounded-full border-4 border-gray-200 border-t-transparent ${selectedColor.replace(
          "text-",
          "border-t-"
        )} animate-spin`}
      />
    ),
  };

  const spinner = spinnerTypes[type] || spinnerTypes.spinner;

  // Content wrapper
  const content = (
    <div
      className={`flex flex-col items-center justify-center gap-4 ${className}`}
    >
      {spinner}
      {text && (
        <p className={`text-sm font-medium ${selectedColor} animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  );

  // Fullscreen overlay
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 backdrop-blur-sm">
        {content}
      </div>
    );
  }

  return content;
};

export default LoadingSpinner;
