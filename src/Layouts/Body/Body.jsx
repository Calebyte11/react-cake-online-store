import React from "react";
import CategoryList from "../../Components/Pages/Home/Category-List/CategoryList";
import { BodyDiv } from "./Body.styles";
import PopularList from "../../Components/Pages/Home/Popular-List/PopularList";
import TopDealsList from "../../Components/Pages/Home/TopDeals-List/TopDealsList.jsx";
// import PageCategorial from "../../Components/Pages/Page-Categorially/PageCategorial";

import { useSelector } from "react-redux";
import CartPage from "../../Components/Pages/Cart-Page/CartPage";
// import { actionViewPageCategorially } from "../Redux/Ducks/PagesNavigationReducer";



// ==================THE FUNCTIONAL COMPONENT ===============
function Body(props) {

  // ========== Reading State &  Dispatch with React-redux Hooks =========
  const expansionStateObj = useSelector((state) => state.pagesNavigation);

  // ======== Event Handlers =========

  // ======================== CONDITIONAL RENDERING ======================
  if (expansionStateObj.viewPageCategorially) {
    return (
      <BodyDiv isExpanded={expansionStateObj}>
        {/* <PageCategorial/> */}
        <CartPage/>
      </BodyDiv>
    );
  } else {
    return (
      <BodyDiv isExpanded={expansionStateObj}>
        <CategoryList />
        <PopularList />
        <TopDealsList />
      </BodyDiv>
    );
  }
}

export default Body;
