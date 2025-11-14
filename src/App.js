import React, { useState, useEffect } from 'react';
import MetricCard from './components/MetricCard';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import DataTable from './components/DataTable';
import Calendar from './components/Calendar';
import './styles/App.css';

function App() {
  const [dashboardData] = useState({
    metrics: {
      totalFollowers: 12543,
      engagementRate: 4.2,
      totalPosts: 156,
      avgLikes: 342
    },
    followerGrowth: [
      { date: '2025-11-01', followers: 12000 },
      { date: '2025-11-02', followers: 12100 },
      { date: '2025-11-03', followers: 12200 },
      { date: '2025-11-04', followers: 12250 },
      { date: '2025-11-05', followers: 12300 },
      { date: '2025-11-06', followers: 12400 },
      { date: '2025-11-07', followers: 12543 }
    ],
    engagementData: [
      { name: 'Mon', likes: 320, comments: 45, shares: 28 },
      { name: 'Tue', likes: 380, comments: 52, shares: 31 },
      { name: 'Wed', likes: 410, comments: 61, shares: 35 },
      { name: 'Thu', likes: 390, comments: 58, shares: 29 },
      { name: 'Fri', likes: 450, comments: 67, shares: 42 },
      { name: 'Sat', likes: 480, comments: 72, shares: 48 },
      { name: 'Sun', likes: 420, comments: 63, shares: 38 }
    ],
    platformData: [
      { name: 'Instagram', value: 45 },
      { name: 'Facebook', value: 25 },
      { name: 'Twitter', value: 20 },
      { name: 'LinkedIn', value: 10 }
    ],
    posts: [
      { id: 1, title: 'Product Launch', likes: 450, comments: 67, shares: 42, date: '2025-11-07' },
      { id: 2, title: 'Weekly Tips', likes: 320, comments: 45, shares: 28, date: '2025-11-06' },
      { id: 3, title: 'Customer Story', likes: 580, comments: 89, shares: 56, date: '2025-11-05' }
    ],
    scheduledContent: [
      { id: 1, title: 'Holiday Campaign', date: '2025-11-15', platform: 'Instagram' },
      { id: 2, title: 'Product Update', date: '2025-11-18', platform: 'Facebook' },
      { id: 3, title: 'Industry Report', date: '2025-11-20', platform: 'LinkedIn' }
    ]
  });

  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Social Media Dashboard</h1>
        <div className="date-range-selector">
          <select>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
          </select>
        </div>
      </header>

      <div className="metrics-grid">
        <MetricCard title="Total Followers" value={12543} change={+5.2} />
        <MetricCard title="Engagement Rate" value={"4.2%"} change={+1.8} />
        <MetricCard title="Total Posts" value={156} change={+12} />
        <MetricCard title="Avg. Likes" value={342} change={+3.4} />
      </div>

      <div className="charts-grid">
        <div className="chart-container">
          <h3>Follower Growth</h3>
          <LineChart data={dashboardData.followerGrowth} />
        </div>
        <div className="chart-container">
          <h3>Engagement Metrics</h3>
          <BarChart data={dashboardData.engagementData} />
        </div>
        <div className="chart-container">
          <h3>Platform Distribution</h3>
          <PieChart data={dashboardData.platformData} />
        </div>
      </div>

      <div className="tables-grid">
        <div className="table-container">
          <h3>Recent Posts Performance</h3>
          <DataTable data={dashboardData.posts} />
        </div>
        <div className="table-container">
          <h3>Content Calendar</h3>
          <Calendar data={dashboardData.scheduledContent} />
        </div>
      </div>
    </div>
  );
}

export default App;