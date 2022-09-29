import React from "react";
import CategoryList from "./CategoryList";
import { BodyDiv } from "../Styles/Body.styles";
import PopularList from "./PopularList";
import TopDealsList from "./TopDealsList.jsx";
import PageCategorial from "./PageCategorial";

import { useSelector } from "react-redux";
// import { actionViewPageCategorially } from "../Redux/Ducks/PagesNavigationReducer";



// ==================THE FUNCTIONAL COMPONENT ===============
function Body(props) {

  // ========== Reading State &  Dispatch with React-redux Hooks =========
  const expansionStateObj = useSelector((state) => state.pagesNavigation);

  // const dispatch = useDispatch();

  // ======== Event Handlers =========
  // const viewMoreHandler = (ArrOfPageData, activeStatus) => {
  //   dispatch(actionViewPageCategorially(ArrOfPageData, activeStatus));
  // };


  // ======================== CONDITIONAL RENDERING ======================
  if (expansionStateObj.viewPageCategorially) {
    return (
      <BodyDiv isExpanded={expansionStateObj}>
        <PageCategorial
          // ArrofPageData={expansionStateObj.pageDetails.pageData}
          // activeStatus={expansionStateObj.pageDetails.pageActive}
        />
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
