import React from "react";
import { useSelector } from "react-redux";
import { ShoppingBag, TrendingUp, Users, Clock } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import AppLayout from "../Layout/AppLayout";
import StatCard from "../Common/StatCard";
import StatusBadge from "../Common/StatusBadge";
import { revenueData } from "../../data/mockData";
import "./Dashboard.css";

const Dashboard = () => {
  const { stats, items: orders } = useSelector((s) => s.orders);
  const recentOrders = orders.slice(0, 6);

  return (
    <AppLayout title="Dashboard">
      <div className="dashboard fade-in">

        {/* User Profile Section */}
        <div className="dash-welcome">
          <div>
            <h1>Good morning, ! 👋</h1>
            <p>Here's what's happening with Urban Harvest today.</p>
          </div>
          <div className="dash-date">
            <span className="date-label">Today</span>
            <span className="date-value">{new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" })}</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <StatCard icon={<ShoppingBag size={22} />} label="Total Orders" value={stats.totalOrders.toLocaleString()} change="12.5%" changeType="up" color="green" />
          <StatCard icon={<TrendingUp size={22} />} label="Revenue" value={`₹${(stats.revenue / 1000).toFixed(0)}K`} change="8.2%" changeType="up" color="amber" />
          <StatCard icon={<Users size={22} />} label="Active Users" value={stats.activeUsers.toLocaleString()} change="5.1%" changeType="up" color="blue" />
          <StatCard icon={<Clock size={22} />} label="Pending Deliveries" value={stats.pendingDeliveries} change="3.4%" changeType="down" color="red" />
        </div>

        {/* Chart + Recent Orders */}
        <div className="dash-grid">
          <div className="dash-chart-card">
            <div className="card-header">
              <h3>Revenue Overview</h3>
              <span className="card-badge">Last 6 Months</span>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4caf50" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#4caf50" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e8df" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#5a7a5a" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#5a7a5a" }} axisLine={false} tickLine={false} tickFormatter={(v) => `₹${v / 1000}K`} />
                <Tooltip formatter={(v) => [`₹${v.toLocaleString()}`, "Revenue"]} contentStyle={{ borderRadius: 10, border: "1px solid #e0e8df", fontSize: 13 }} />
                <Area type="monotone" dataKey="revenue" stroke="#4caf50" strokeWidth={2.5} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="top-products-card">
            <div className="card-header">
              <h3>Order Summary</h3>
            </div>
            <div className="order-summary-list">
              {[
                { label: "Delivered", count: orders.filter(o => o.status === "Delivered").length, color: "var(--green-accent)" },
                { label: "In Transit", count: orders.filter(o => o.status === "In Transit").length, color: "var(--blue)" },
                { label: "Pending", count: orders.filter(o => o.status === "Pending").length, color: "var(--amber)" },
                { label: "Cancelled", count: orders.filter(o => o.status === "Cancelled").length, color: "var(--red)" },
              ].map(item => (
                <div key={item.label} className="summary-row">
                  <div className="summary-dot" style={{ background: item.color }} />
                  <span className="summary-label">{item.label}</span>
                  <div className="summary-bar-wrap">
                    <div className="summary-bar" style={{ width: `${(item.count / orders.length) * 100}%`, background: item.color }} />
                  </div>
                  <span className="summary-count">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="orders-card">
          <div className="card-header">
            <h3>Recent Orders</h3>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="table-wrap">
            <table className="orders-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Items</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, i) => (
                  <tr key={order.id} style={{ animationDelay: `${i * 0.05}s` }} className="fade-in">
                    <td className="order-id">{order.id}</td>
                    <td>
                      <div className="customer-cell">
                        <div className="customer-avatar">{order.avatar}</div>
                        <span>{order.customer}</span>
                      </div>
                    </td>
                    <td className="order-items">{order.items}</td>
                    <td className="order-amount">₹{order.amount}</td>
                    <td><StatusBadge status={order.status} /></td>
                    <td className="order-date">{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </AppLayout>
  );
};

export default Dashboard;
