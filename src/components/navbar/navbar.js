import React from "react";
import "./navbar.scss";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import FaceIcon from "@mui/icons-material/Face";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
const navbar = () => {
  return (
    <div className="navbar">
    <div className="wrapper">
      <div className="items">
        <div className="item">
          <LanguageOutlinedIcon className="icon" />
          English
          </div>
        <div className="item">
          <DarkModeOutlinedIcon
            className="icon"
            //onClick={() => dispatch({ type: "TOGGLE" })}
          />
        </div>
        <div className="item">
          <NotificationsActiveIcon className="icon" />
        </div>
        <div className="item">
        <SettingsIcon className="icon" />
        </div>
        <div className="item">
        <FaceIcon className="icon" />
        </div>
      </div>
    </div>
  </div>
  );
};
export default navbar;
