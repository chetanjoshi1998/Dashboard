import React from "react";
import { Activity } from "lucide-react";
import { RECENT_ACTIVITY } from "../data/mockData";

const ActivityItem = ({ activity }) => {
  const getTypeColor = (type) => {
    switch (type) {
      case "create":
        return "bg-green-100 text-green-800";
      case "update":
        return "bg-blue-100 text-blue-800";
      case "complete":
        return "bg-purple-100 text-purple-800";
      case "add":
        return "bg-yellow-100 text-yellow-800";
      case "generate":
        return "bg-indigo-100 text-indigo-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex items-center space-x-3 py-3 border-b border-gray-100 last:border-b-0">
      <div
        className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(
          activity.type
        )}`}
      >
        {activity.type}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">
          {activity.user}
        </p>
        <p className="text-sm text-gray-500 truncate">{activity.action}</p>
      </div>
      <div className="text-xs text-gray-400">{activity.time}</div>
    </div>
  );
};

const ActivityFeed = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <Activity className="h-5 w-5 text-gray-400" />
      </div>
      <div className="space-y-1 max-h-64 overflow-y-auto">
        {RECENT_ACTIVITY.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
      <button className="w-full mt-4 text-center text-sm text-blue-600 hover:text-blue-700 font-medium">
        View all activity
      </button>
    </div>
  );
};

export default ActivityFeed;
