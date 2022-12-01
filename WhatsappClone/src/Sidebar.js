import React from "react";
import { Avatar } from "@material-ui/core";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Sidebar.css";
import { IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <SearchOutlined />
        <input placeholder="Search or start a new chat" type="text"></input>
      </div>
      <div className="sidebar__chats"></div>
    </div>
  );
}

export default Sidebar;
