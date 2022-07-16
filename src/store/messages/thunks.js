import {
  sendMessage,
  getMessagesStart,
  getMessagesSuccess,
  getMessagesError,
  sendMessageStart,
  sendMessageSuccess,
  sendMessageError,
} from "./actions";

export const sendMessageWithBot = (roomId, message) => (dispatch, getState) => {
  dispatch(sendMessage(roomId, message));

  if (message.author === "User") {
    setTimeout(() => {
      dispatch(
        sendMessage(roomId, {
          author: "Bot",
          message: "Hello from bot thunk",
        })
      );
    }, 500);
  }
};

export const getMessagesFb = () => async (dispatch, _, api) => {
  const messages = {};

  try {
    dispatch(getMessagesStart());

    const snapshot = await api.getMessagesApi();

    snapshot.forEach((snap) => {
      messages[snap.key] = Object.values(snap.val());
    });
    dispatch(getMessagesSuccess(messages));
  } catch (e) {
    dispatch(getMessagesError(e));
  }
};

export const sendMessageFb = (roomId, message) => async (dispatch, _, api) => {
  try {
    dispatch(sendMessageStart());

    await api.sendMessageApi(roomId, message);

    dispatch(sendMessageSuccess(roomId, message));

    if (message.author === "User") {
      setTimeout(() => {
        dispatch(
          sendMessageFb(roomId, {
            author: "Bot",
            message: "Hello from bot thunk",
          })
        );
      }, 500);
    }
  } catch (e) {
    dispatch(sendMessageError(e));
  }
};
