import { UPDATE_CONTENT } from "./actions";

const initialState = {
  content: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CONTENT:
      return { ...state, content: action.payload };
    default:
      return state;
  }
};

export default reducer;
