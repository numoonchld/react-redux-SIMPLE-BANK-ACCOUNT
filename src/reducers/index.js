import { combineReducers } from "redux";

const accountReducer = (initialBalance = 0, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return initialBalance + action.payload;
    case "WITHDRAW":
      return initialBalance - action.payload;
    default:
      return initialBalance;
  }
};

const reducers = combineReducers({ account: accountReducer });
export default reducers;
