import React, { useReducer, useState } from "react";
import { HomeDiv } from "../Styles/Homepage.styles";
import Body from "./Body";
import Header from "./Header";
import ProductPage from "./ProductPage";

// ===== initial state (for reducer hook) =====
const InitialState = {
  categoryExpanded: false,
  popularExpanded: false,
  topDealsExpanded: false,
  viewProductPage: false,
};

// // ========= Reducer Callback func ========
const reducer = (state, action) => {
  switch (action.type) {
    case "ACTION_CATEGORY_EXPAND":
      return { ...state, categoryExpanded: true };

    case "ACTION_POPULAR_EXPAND":
      return { ...state, popularExpanded: true };

    case "ACTION_TOP_DEALS_EXPAND":
      return { ...state, topDealsExpanded: true };

    case "ACTION_VIEW_PRODUCT_PAGE":
      return { ...state, viewProductPage: true };

    case "ACTION_RESET_EXPAND":
      return {
        ...state,
        categoryExpanded: false,
        popularExpanded: false,
        topDealsExpanded: false,
        viewProductPage: false,
      };

    default:
      break;
  }
};

function Homepage() {
  //========= useReducer hook ======
  const [expand, dispatch] = useReducer(reducer, InitialState);

  // ========= useState Hook ========
  const [ProductPageData, setProductPageData] = useState(null);

  // ====== All Event handlers for the children components ====
  const handleCategoryExpand = (e) => {
    dispatch({
      type: "ACTION_CATEGORY_EXPAND",
    });
  };

  const handlePopularExpand = (e) => {
    dispatch({
      type: "ACTION_POPULAR_EXPAND",
    });
  };

  const handleTopDealsExpand = (e) => {
    dispatch({
      type: "ACTION_TOP_DEALS_EXPAND",
    });
  };

  const handleProductPageExpand = (eachItem) => {
    dispatch({
      type: "ACTION_VIEW_PRODUCT_PAGE",
    });
    setProductPageData(eachItem);
  };

  const handleResetExpand = (e) => {
    dispatch({
      type: "ACTION_RESET_EXPAND",
    });
  };

  const AllActions = {
    forCategory: handleCategoryExpand,
    forPopular: handlePopularExpand,
    forTopDeals: handleTopDealsExpand,
    forViewProductPage: handleProductPageExpand,
    forReset: handleResetExpand,
  };

  return (
    <HomeDiv>
      <Header expansionObj={expand} arrowLeftAction={AllActions.forReset} />

      {/* <ProductPage/> */}
      {expand.viewProductPage ? (
        <ProductPage
          isFromHomepage={true}
          dataForProductPage={ProductPageData}
        />
      ) : (
        <Body expansionObj={expand} expandFunctions={AllActions} />
      )}
    </HomeDiv>
  );
}

export default Homepage;
