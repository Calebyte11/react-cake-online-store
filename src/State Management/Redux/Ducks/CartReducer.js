//======= String Constants =========
const ACTION_ADD_TO_CART = "cake-online-store/CartFeature/ACTION_ADD_TO_CART";

const ACTION_REMOVE_FROM_CART =
  "cake-online-store/CartFeature/ACTION_REMOVE_FROM_CART";

const ACTION_INCREASE_PRODUCT_QUANTITY =
  "cake-online-store/CartFeature/ACTION_INCREASE_PRODUCT_QUANTITY";
const ACTION_DECREASE_PRODUCT_QUANTITY =
  "cake-online-store/CartFeature/ACTION_DECREASE_PRODUCT_QUANTITY";

//====== Initial State ============
const InitialState = [];

//====== The Main Reducer to be exported Defaultly =========
const CartReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTION_ADD_TO_CART:
      return [...state, action.newItem];

    case ACTION_REMOVE_FROM_CART:
      return state.filter(
        (item) => item.ProductImgSrc !== action.deletedItem.ProductImgSrc
      );

    case ACTION_INCREASE_PRODUCT_QUANTITY:
      return state.map((item) => {
        if (item.ProductImgSrc === action.targetedItem.ProductImgSrc) {
          return Object.assign({}, item, {
            ...action.targetedItem,
            ProductQty: action.targetedItem.ProductQty + 1,
          });
        } else {
          return item;
        }
      });

    case ACTION_DECREASE_PRODUCT_QUANTITY:
      return state.map((item) => {
        if (item.ProductImgSrc === action.targetedItem.ProductImgSrc) {
          return Object.assign({}, item, {
            ...action.targetedItem,
            ProductQty: action.targetedItem.ProductQty - 1,
          });
        } else {
          return item;
        }
      });

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
    deletedItem: deletedItemArg,
  };
};

export const actionIncreaseProductQty = (targetedItemArg) => {
  return {
    type: ACTION_INCREASE_PRODUCT_QUANTITY,
    targetedItem: targetedItemArg,
  };
};

export const actionDecreaseProductQty = (targetedItemArg) => {
  return {
    type: ACTION_DECREASE_PRODUCT_QUANTITY,
    targetedItem: targetedItemArg,
  };
};
