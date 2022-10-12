//======= String Constants =========
const ACTION_ADD_TO_CART = "cake-online-store/CartFeature/ACTION_ADD_TO_CART";
const ACTION_REMOVE_FROM_CART =
  "cake-online-store/CartFeature/ACTION_REMOVE_FROM_CART";

//====== Initial State ============
const InitialState = [];

//====== The Main Reducer to be exported Defaultly =========
const CartReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTION_ADD_TO_CART:
      return [...state, action.newItem];

    case ACTION_REMOVE_FROM_CART:
      return state.filter(
        (item) =>
          item.ProductImgSrc !== action.deletedItem.ProductImgSrc
      );

    default:
      return state;
  }
};

export default CartReducer;

//====== Action Creators =========
export const actionAddToCart = (newItemArg) => {
  return {
    type: ACTION_ADD_TO_CART,
    newItem: newItemArg,
  };
};

export const actionRemoveFromCart = (deletedItemArg) => {
    return {
        type: ACTION_REMOVE_FROM_CART,
        deletedItem: deletedItemArg
    };
};
