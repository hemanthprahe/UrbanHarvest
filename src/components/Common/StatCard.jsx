import React from "react";
import "./StatCard.css";

const StatCard = ({ icon, label, value, change, changeType, color }) => {
  return (
    <div className={`stat-card fade-in stat-card--${color}`}>
      <div className="stat-card-top">
        <div className={`stat-icon stat-icon--${color}`}>{icon}</div>
        <span className={`stat-change ${changeType === "up" ? "change-up" : "change-down"}`}>
          {changeType === "up" ? "↑" : "↓"} {change}
        </span>
      </div>
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

export default StatCard;
