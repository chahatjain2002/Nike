const initialState = {
  apidata: [],
  wishlist: [],
  cartList: [],
  searched_txt: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "API_CALLING":
      return { ...state, apidata: action.value };
    case "SEARCHED_TXT":
      return { ...state, searched_txt: action.value };
    case "CART":
      return { ...state, cartList: new Set([...state.cartList, action.value]) };
    case "WISH":
      return { ...state, wishlist: new Set([...state.wishlist, action.value]) };
  }
};

export { initialState, reducer };
