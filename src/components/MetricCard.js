import React from 'react';

const MetricCard = ({ title, value, change }) => {
  const isPositive = change >= 0;
  
  return (
    <div className="metric-card">
      <div className="metric-title">{title}</div>
      <div className="metric-value">{value}</div>
      <div className={`metric-change ${isPositive ? 'positive' : 'negative'}`}>
        {isPositive ? '↑' : '↓'} {Math.abs(change)}%
      </div>
    </div>
  );
};

export default MetricCard;