import {
  getConversationsStart,
  getConversationsSuccess,
  getConversationsError,
  createConversationStart,
  createConversationSuccess,
  createConversationError,
} from "./actions";

export const getConversationsFb = () => async (dispatch, _, api) => {
  const conversations = [];

  try {
    dispatch(getConversationsStart());

    const snapshot = await api.getConversationsApi();

    snapshot.forEach((snap) => {
      conversations.push(snap.val());
    });

    dispatch(getConversationsSuccess(conversations));
  } catch (e) {
    dispatch(getConversationsError(e));
  }
};

export const createConversationFb = (roomId) => async (dispatch, _, api) => {
  try {
    dispatch(createConversationStart());

    await api.createConversationApi(roomId);

    dispatch(createConversationSuccess(roomId));
  } catch (e) {
    dispatch(createConversationError(e));
  }
};
