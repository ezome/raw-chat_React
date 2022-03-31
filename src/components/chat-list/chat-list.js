import { List, Fab } from "@mui/material";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Chat } from "./chat";
import {
  createConversation,
  deleteConversation,
  conversationsSelector,
} from "../../store/conversations";
import AddIcon from "@mui/icons-material/Add";

export const ChatList = () => {
  const conversations = useSelector(conversationsSelector);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { roomId } = useParams();

  const createConversationByName = () => {
    let name = prompt("Введите название комнаты");
    let isValidName = !conversations.includes(name);
    if (name && isValidName) {
      dispatch(createConversation(name));
      setTimeout(() => navigate(`/chat/${name}`));
    } else {
      alert("Не валидная комната");
    }
  };

  const deleteConversationByName = useCallback(
    (conversation) => {
      dispatch(deleteConversation(conversation));
      setTimeout(() => navigate("/chat"));
    },
    [dispatch, navigate]
  );

  return (
    <List component="nav">
      {conversations.map((chat, index) => (
        <Link key={index} to={`/chat/${chat}`}>
          <Chat
            title={chat}
            selected={roomId === chat}
            deleteConversationByName={deleteConversationByName}
          />
        </Link>
      ))}
      <Fab size="small" aria-label="add" onClick={createConversationByName}>
        <AddIcon />
      </Fab>
    </List>
  );
};
