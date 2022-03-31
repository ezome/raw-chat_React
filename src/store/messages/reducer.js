import { nanoid } from "nanoid";
import { SEND_MESSAGE, DELETE_MESSAGE_BY_ID, VALUE_MESSAGE } from "./types";

const initialState = {
  messages: {},
  value: {},
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...(state.messages[action.payload.roomId] ?? []),
            { ...action.payload.message, id: nanoid() },
          ],
        },
        value: {
          ...state.value,
          [action.payload.roomId]: "",
        },
      };
    case DELETE_MESSAGE_BY_ID:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: state.messages[action.payload.roomId].filter(
            (message) => message.id !== action.payload.messageId
          ),
        },
      };
    case VALUE_MESSAGE:
      return {
        ...state,
        value: {
          ...state.value,
          [action.payload.roomId]: action.payload.messageValue,
        },
      };
    default:
      return state;
  }
};
