import React from "react";
import { useSelector } from "react-redux";
import { Menu, Bell, Search } from "lucide-react";
import "./Header.css";

const Header = ({ onMenuToggle, title }) => {
  const user = useSelector((s) => s.auth.user);

  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-toggle" onClick={onMenuToggle}>
          <Menu size={22} />
        </button>
        <h2 className="header-title">{title}</h2>
      </div>

      
      <div className="header-right">
        <button className="notif-btn">
          <Bell size={20} />
          <span className="notif-dot" />
        </button>
        <div className="header-profile">
          <div className="profile-avatar">{user?.avatar}</div>
          <div className="profile-info">
            <span className="profile-name">{user?.name}</span>
            <span className="profile-role">{user?.role}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
