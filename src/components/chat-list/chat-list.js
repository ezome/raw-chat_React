import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";

export const ChatList = () => {
  const [chats] = useState(["room1", "room2", "room3"]);

  return (
    <List component="nav">
      {chats.map((chat, index) => (
        <ListItem key={index}>
          <ListItemIcon>
            <AccountCircle fontSize="large" />
          </ListItemIcon>
          <div>
            <ListItemText primary={chat} />
          </div>
        </ListItem>
      ))}
    </List>
  );
};
