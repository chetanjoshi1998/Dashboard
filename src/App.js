import React, { useState } from "react";
import Header from "../src/components/Header";
import StatCard from "../src/components/StatCard";
import SalesChart from "../src/components/SalesChart";
import CategoryChart from "../src/components/CategoryChart";
import PerformanceChart from "../src/components/PerformanceChart";
import ActivityFeed from "../src/components/ActivityFeed";
import QuickActions from "../src/components/QuickActions";
import { Filter, Download } from "lucide-react";
import { STAT_CARDS_DATA } from "../src/utils/constants";

const App = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("7d");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Time Range Selector */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold text-gray-900">Overview</h2>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {STAT_CARDS_DATA.map((card, index) => (
            <StatCard key={index} {...card} />
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <SalesChart />
          <CategoryChart />
        </div>

        {/* Performance and Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <PerformanceChart />
          </div>
          <ActivityFeed />
        </div>

        <QuickActions />
      </main>
    </div>
  );
};

export default App;
