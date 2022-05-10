import { useEffect, useRef, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import {
  messagesSelectorByRoomId,
  sendMessageFb,
  getMessagesFb,
} from "../../store/messages";
import { Message } from "./message";
import styles from "./message-list.module.css";

export const MessageList = () => {
  const ref = useRef(null);
  const { roomId } = useParams();

  const messages = useSelector(messagesSelectorByRoomId(roomId));
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const send = useCallback(
    (message, author = "User") => {
      if (message) {
        dispatch(sendMessageFb(roomId, { author, message }));
        setValue("");
      }
    },
    [dispatch, roomId]
  );

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

  useEffect(() => {
    dispatch(getMessagesFb());
  }, [dispatch]);

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
        onChange={(e) => setValue(e.target.value)}
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
