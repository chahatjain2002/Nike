const initialState = {
  apidata: [],
  wishlist: ["roshan"],
  cart: ["singh"],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "API_CALLING":
      return { ...state, apidata: action.value };
  }
};

export { initialState, reducer };
