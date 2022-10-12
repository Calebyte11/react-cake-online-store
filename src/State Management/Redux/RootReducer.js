import { combineReducers } from "redux";
import pagesNavReducer from "./Ducks/PagesNavigationReducer";
import CartReducer from "./Ducks/CartReducer"

//========= The RootReducer combining all Reducers ========
const rootReducer = combineReducers({
    pagesNavigation: pagesNavReducer,
    cartData : CartReducer,
});


export default rootReducer;