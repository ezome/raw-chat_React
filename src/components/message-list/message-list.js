import { useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import {
  messagesSelectorByRoomId,
  sendMessage,
  messagesValueByRoomId,
  valueMessage,
} from "../../store/messages";
import { Message } from "./message";
import styles from "./message-list.module.css";

export const MessageList = () => {
  const ref = useRef(null);
  const { roomId } = useParams();
  const messages = useSelector(messagesSelectorByRoomId(roomId));
  const value = useSelector(messagesValueByRoomId(roomId));
  const dispatch = useDispatch();

  const send = useCallback(
    (message, author = "User") => {
      if (message) {
        dispatch(sendMessage(roomId, { author, message }));
      }
    },
    [dispatch, roomId]
  );

  // useEffect(() => {
  //   const lastMessage = messages[messages.length - 1];

  //   if (messages.length && lastMessage.author !== "Bot") {
  //     setTimeout(() => {
  //       send("test", "Bot");
  //     }, 500);
  //   }
  // }, [messages, roomId, send]);

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      send(value);
    }
  };

  const handleScrollBottom = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    handleScrollBottom();
  }, [messages, handleScrollBottom]);

  return (
    <>
      <div ref={ref} className={styles.messages}>
        {messages.map((message, index) => (
          <Message key={index} message={message} roomId={roomId} />
        ))}
      </div>
      <Input
        fullWidth
        placeholder="Введите сообщение..."
        value={value}
        onChange={(e) => dispatch(valueMessage(roomId, e.target.value))}
        onKeyPress={handlePressInput}
        endAdornment={
          <InputAdornment position="end">
            {value && <Send onClick={() => send(value)} />}
          </InputAdornment>
        }
      />
    </>
  );
};
