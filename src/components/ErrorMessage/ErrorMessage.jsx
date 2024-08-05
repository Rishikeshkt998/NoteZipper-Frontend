/* eslint-disable react/prop-types */




const variantClasses = {
  success: "bg-green-100 text-green-800 border-green-400",
  danger: "bg-red-100 text-red-800 border-red-400",
  warning: "bg-yellow-100 text-yellow-800 border-yellow-400",
  info: "bg-blue-100 text-blue-800 border-blue-400",
};

const ErrorMessage = ({ variant = "info", children }) => {
  const variantClass = variantClasses[variant];

  return (
    <div className={`border-l-4 p-4 ${variantClass} rounded-lg`} style={{ fontSize: 20 }}>
      <strong>{children}</strong>
    </div>
  );
};

export default ErrorMessage;