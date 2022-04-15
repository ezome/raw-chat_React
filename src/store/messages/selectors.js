export const messagesSelectorByRoomId = (roomId) => (state) => {
  // console.log("Messages, full");
  return state.messages.messages[roomId] || [];
};
export const messagesValueByRoomId = (roomId) => (state) => {
  // console.log("Messages, value");
  return state.messages.value[roomId] || "";
};
