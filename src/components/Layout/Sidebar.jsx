import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LayoutDashboard, Package, ShoppingCart, Users, BarChart2, Settings, LogOut, Leaf, X } from "lucide-react";
import { logout } from "../../store/slices/authSlice";
import "./Sidebar.css";

const navItems = [
  { path: "/dashboard", icon: <LayoutDashboard size={20} />, label: "Dashboard" },
  { path: "/products", icon: <Package size={20} />, label: "Products" },
  
];

const Sidebar = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((s) => s.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      {open && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <Leaf size={22} />
            <span>Urban Harvest</span>
          </div>
          <button className="sidebar-close" onClick={onClose}><X size={20} /></button>
        </div>

        <nav className="sidebar-nav">
          <p className="nav-section-label">Main Menu</p>
          {navItems.slice(0, 2).map((item) => (
            <NavLink key={item.path} to={item.path} className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} onClick={onClose}>
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
         
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-user">
            <div className="user-avatar-sm">{user?.avatar}</div>
            <div className="user-info-sm">
              <span className="user-name-sm">{user?.name}</span>
              <span className="user-role-sm">{user?.role}</span>
            </div>
          </div>
          <button className="logout-btn" onClick={handleLogout} title="Sign out">
            <LogOut size={18} />
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
