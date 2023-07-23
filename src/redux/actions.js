export const UPDATE_CONTENT = "UPDATE_CONTENT";

export const updateContent = (content) => {
  return {
    type: UPDATE_CONTENT,
    payload: content
  };
};
