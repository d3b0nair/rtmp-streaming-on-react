import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INTIAL_STATE = {
  isSignedIn: null,
  userId: null,
  userName: null,
  userImg: null,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload.userId,
        userName: action.payload.userName,
        userImg: action.payload.userImg,
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userId: null,
        userName: null,
        userImg: null,
      };
    default:
      return state;
  }
};
