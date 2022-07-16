import { db } from "./firebase";

export const getConversationsApi = () => {
  return db.ref("conversations").get();
};

export const createConversationApi = (roomId) => {
  return db
    .ref("conversations")
    .child(roomId)
    .set({ title: roomId, value: "" });
};
