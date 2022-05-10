import { List, Fab } from "@mui/material";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Chat } from "./chat";
import {
  deleteConversation,
  conversationsSelector,
  createConversationFb,
} from "../../store/conversations";
import AddIcon from "@mui/icons-material/Add";

export const ChatList = () => {
  const conversations = useSelector(conversationsSelector);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { roomId } = useParams();

  const createConversationByName = () => {
    let name = prompt("Введите название комнаты");
    let isValidName = !conversations.find(
      (conversation) => conversation.title === name
    );
    if (name && isValidName) {
      dispatch(createConversationFb(name));
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
      {conversations.map(({ title, value }, index) => (
        <Link key={index} to={`/chat/${title}`}>
          <Chat
            title={title}
            selected={roomId === title}
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
