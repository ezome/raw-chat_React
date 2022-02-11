import { useState, useEffect, useRef, useCallback } from "react";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import styles from "./message-list.module.css";

export const MessageList = () => {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState("");
  const ref = useRef(null);
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
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      addMessageList();
    }
  };

  const handleScrollBottom = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    handleScrollBottom();
  }, [messageList, handleScrollBottom]);

  return (
    <>
      <div ref={ref} className={styles.messages}>
        {messageList.map((message, index) => (
          <p key={index} className={styles.message}>
            <b>{message.author}</b>: {message.text}
          </p>
        ))}
      </div>
      <Input
        fullWidth
        placeholder="Введите сообщение..."
        value={value}
        onChange={handleChange}
        onKeyPress={handlePressInput}
        endAdornment={
          <InputAdornment position="end">
            {value && <Send onClick={addMessageList} />}
          </InputAdornment>
        }
      />
    </>
  );
};
