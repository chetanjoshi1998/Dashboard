import React from "react";

const StatCard = ({ title, value, change, icon: Icon, color }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow hover-scale">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
        <p
          className={`text-sm mt-1 ${
            change >= 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {change >= 0 ? "+" : ""}
          {change}% from last period
        </p>
      </div>
      <div className={`p-3 rounded-full ${color} bg-opacity-10`}>
        <Icon className={`h-6 w-6 ${color.replace("bg-", "text-")}`} />
      </div>
    </div>
  </div>
);

export default StatCard;
