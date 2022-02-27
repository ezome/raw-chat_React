import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ThemeProvider, createTheme } from "@mui/material";
import { Header } from "./components";
import { ChatPage, ProfilePage } from "./pages";
import { store } from "./store";
import "./index.css";
import "./global.css";
// import styler from "./index.module.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chat/*" element={<ChatPage />} />
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
