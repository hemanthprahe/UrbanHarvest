import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Login from "./components/Auth/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Products from "./components/Products/Products";
import ProtectedRoute from "./components/Common/ProtectedRoute";
import "./styles/global.css";

// Simple placeholder for unbuilt pages
const ComingSoon = ({ title }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "60vh", gap: "12px", color: "#5a7a5a" }}>
    <span style={{ fontSize: "3rem" }}>🚧</span>
    <h2 style={{ fontFamily: "Syne, sans-serif", color: "#1a2e1a" }}>{title}</h2>
    <p style={{ fontSize: "0.9rem" }}>This page is under construction.</p>
  </div>
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
          <Route path="/orders" element={<ProtectedRoute><ComingSoon title="Orders" /></ProtectedRoute>} />
          <Route path="/users" element={<ProtectedRoute><ComingSoon title="Customers" /></ProtectedRoute>} />
          <Route path="/analytics" element={<ProtectedRoute><ComingSoon title="Analytics" /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><ComingSoon title="Settings" /></ProtectedRoute>} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;