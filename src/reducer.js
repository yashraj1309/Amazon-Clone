export const initialState = {
  basket: [],
  userId: "",
  userInput: "",
  cartTotal: 0
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      }
      return {
        ...state,
        basket: newBasket
      };
    case "ADD_USERID":
      return {
        ...state,
        userId: action.item
      };
    case "ADD_USERINPUT":
      return {
        ...state,
        userInput: action.item
      };
    case "ADD_CART_TOTAL":
      return {
        ...state,
        cartTotal: action.item
      };
    default:
      return state;
  }
};
