import {
  // CREATE_CONVERSATION,
  // DELETE_CONVERSATION,
  GET_CONVERSATIONS_START,
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATIONS_ERROR,
  CREATE_CONVERSATION_START,
  CREATE_CONVERSATION_SUCCESS,
  CREATE_CONVERSATION_ERROR,
} from "./types";

const initialState = {
  conversations: [],
  error: null,
  pending: false,

  errorCreate: null,
  pendingCreate: false,
};

export const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case CREATE_CONVERSATION:
    //   return {
    //     ...state,
    //     conversations: [...state.conversations, action.payload],
    //   };
    // case DELETE_CONVERSATION:
    //   return {
    //     ...state,
    //     conversations: state.conversations.filter(
    //       (conversation) => conversation !== action.payload
    //     ),
    //   };
    case CREATE_CONVERSATION_START:
      return { ...state, pendingCreate: true, errorCreate: null };
    case CREATE_CONVERSATION_SUCCESS:
      return {
        ...state,
        pendingCreate: false,
        conversations: [
          ...state.conversations,
          { title: action.payload, value: "" },
        ],
      };
    case CREATE_CONVERSATION_ERROR:
      return { ...state, pendingCreate: false, errorCreate: action.payload };

    case GET_CONVERSATIONS_START:
      return { ...state, pending: true, error: null };
    case GET_CONVERSATIONS_SUCCESS:
      return { ...state, pending: false, conversations: action.payload };
    case GET_CONVERSATIONS_ERROR:
      return { ...state, pending: false, error: action.payload };
    default:
      return state;
  }
};
