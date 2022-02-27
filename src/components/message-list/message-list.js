import { useState, useEffect, useRef, useCallback } from "react";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import styles from "./message-list.module.css";

export const MessageList = () => {
  const [messageList, setMessageList] = useState({});
  const [value, setValue] = useState("");
  // const [draft, setDraft] = useState({});
  const ref = useRef(null);
  const handleChange = (e) => setValue(e.target.value);

  const { roomId } = useParams();

  const addMessageList = useCallback(
    (message, author = "User") => {
      if (message) {
        setMessageList((state) => ({
          ...state,
          [roomId]: [...(state[roomId] ?? []), { author, message }],
        }));
        setValue("");
      }
    },
    [roomId]
  );

  // useEffect(() => {
  //   setDraft({
  //     ...draft,
  //     [roomId]: value,
  //   });
  // }, [draft, roomId, value]);

  useEffect(() => {
    const messages = messageList[roomId] ?? [];
    const lastMessage = messages[messages.length - 1];

    if (messages.length && lastMessage.author !== "Bot") {
      setTimeout(() => {
        addMessageList("test", "Bot");
      }, 500);
    }
  }, [messageList, roomId, addMessageList]);

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      addMessageList(value);
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

  const messages = messageList[roomId] ?? [];

  return (
    <>
      <div ref={ref} className={styles.messages}>
        {messages.map((message, index) => (
          <p key={index} className={styles.message}>
            <b>{message.author}</b>: {message.message}
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
            {value && <Send onClick={() => addMessageList(value)} />}
          </InputAdornment>
        }
      />
    </>
  );
};
