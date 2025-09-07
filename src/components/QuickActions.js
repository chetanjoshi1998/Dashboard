import React from "react";
import { Mail, Calendar, Award, Users } from "lucide-react";

const QuickActions = () => {
  const actions = [
    { icon: Mail, label: "Send Report", color: "text-blue-600" },
    { icon: Calendar, label: "Schedule Meeting", color: "text-green-600" },
    { icon: Award, label: "View Analytics", color: "text-purple-600" },
    { icon: Users, label: "Manage Users", color: "text-yellow-600" },
  ];

  return (
    <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Quick Actions
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            className="flex items-center justify-center space-x-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <action.icon className={`h-5 w-5 ${action.color}`} />
            <span className="text-sm font-medium">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
