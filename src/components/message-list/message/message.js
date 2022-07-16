import { useDispatch } from "react-redux";
import { deleteMessage } from "../../../store/messages";
import styles from "./message.module.css";

export function Message({ message, roomId }) {
  const dispatch = useDispatch();

  return (
    <p
      className={styles.message}
      onClick={() => dispatch(deleteMessage(roomId, message.id))}
    >
      <b>{message.author}</b>: {message.message}
    </p>
  );
}
