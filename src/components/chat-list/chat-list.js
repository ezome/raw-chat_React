import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export const ChatList = () => {
  const [chats] = useState(["room1", "room2", "room3"]);

  const { roomId } = useParams();

  return (
    <List component="nav">
      {chats.map((chat, index) => (
        <Link key={index} to={`/chat/${chat}`}>
          <ListItem selected={roomId === chat}>
            <ListItemIcon>
              <AccountCircle fontSize="large" />
            </ListItemIcon>
            <div>
              <ListItemText primary={chat} />
            </div>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};
