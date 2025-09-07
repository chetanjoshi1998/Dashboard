import React, { useState } from "react";
import { Search, Bell } from "lucide-react";

const Header = () => {
  const [notifications] = useState(3);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Analytics Dashboard
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <button className="relative p-2 text-gray-400 hover:text-gray-500">
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-xs text-white">
                  {notifications}
                </span>
              )}
            </button>

            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <span className="text-sm font-medium text-gray-700">
                Admin User
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
