import React from "react";
import ReactDOM from "react-dom";
// import { ThemeProvider, createTheme } from "@mui/material";
import { Layout, MessageList, ChatList } from "./components";
import "./index.css";
import "./global.css";
// import styler from "./index.module.css";

ReactDOM.render(
  <React.StrictMode>
    <Layout chats={<ChatList />} messages={<MessageList />} />
  </React.StrictMode>,
  document.getElementById("root")
);
