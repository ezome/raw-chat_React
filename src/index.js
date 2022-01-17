import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import styler from "./index.module.css";

function Message({ text }) {
  return <p>{text}</p>;
}

const App = () => {
  const text = "LALALA";

  return (
    <div className={styler.box}>
      <h1>AlALAL</h1>
      <Message text={text} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
