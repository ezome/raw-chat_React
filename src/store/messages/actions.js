import { SEND_MESSAGE, DELETE_MESSAGE_BY_ID, VALUE_MESSAGE } from "./types";

export const sendMessage = (roomId, message) => {
  return {
    type: SEND_MESSAGE,
    payload: { roomId, message },
  };
};

export const deleteMessage = (roomId, messageId) => {
  return {
    type: DELETE_MESSAGE_BY_ID,
    payload: { roomId, messageId },
  };
};

export const valueMessage = (roomId, messageValue) => {
  return {
    type: VALUE_MESSAGE,
    payload: { roomId, messageValue },
  };
};
