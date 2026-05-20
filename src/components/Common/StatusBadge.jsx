import React from "react";
import "./StatusBadge.css";

const statusMap = {
  Delivered: "badge--green",
  "In Transit": "badge--blue",
  Pending: "badge--amber",
  Cancelled: "badge--red",
  Available: "badge--green",
  "Out of Stock": "badge--red",
};

const StatusBadge = ({ status }) => {
  return (
    <span className={`badge ${statusMap[status] || "badge--grey"}`}>{status}</span>
  );
};

export default StatusBadge;
