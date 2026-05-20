import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./AppLayout.css";

const AppLayout = ({ children, title }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-layout">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="app-main">
        <Header onMenuToggle={() => setSidebarOpen(true)} title={title} />
        <main className="app-content">{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;
