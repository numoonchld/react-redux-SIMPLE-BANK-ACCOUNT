export const deposit = (amount) => (dispatch) => {
  return dispatch({
    type: "DEPOSIT",
    payload: amount
  });
};

export const withdraw = (amount) => (dispatch) => {
  return dispatch({
    type: "WITHDRAW",
    payload: amount
  });
};
