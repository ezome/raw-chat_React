import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import styler from "./index.module.css";

const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState("");
  const handleChange = (e) => setValue(e.target.value);

  useEffect(() => {
    if (
      messageList.length &&
      messageList[messageList.length - 1].author !== "Bot"
    ) {
      setMessageList([...messageList, { author: "Bot", text: "Test" }]);
    }
  }, [messageList]);

  const addMessageList = (e) => {
    setMessageList([...messageList, { author: "User", text: value }]);
    setValue("");
    e.preventDefault();
  };

  return (
    <div>
      {messageList.map((message) => (
        <p>
          <b>{message.author}</b>: {message.text}
        </p>
      ))}
      <form onSubmit={addMessageList}>
        <input type="text" value={value} onChange={handleChange} />
        <input type="submit" value="Отправить" />
      </form>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
