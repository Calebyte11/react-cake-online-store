import { combineReducers } from "redux";
import pagesNavReducer from "./Ducks/PagesNavigationReducer";

//========= The RootReducer combining all Reducers ========
const rootReducer = combineReducers({
    pagesNavigation: pagesNavReducer,
});


export default rootReducer;