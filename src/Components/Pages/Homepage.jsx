import React from "react";
import { HomeDiv } from "../Styles/Homepage.styles";
import Body from "./Body";
import Header from "./Header";
import ProductPage from "./ProductPage";

import { useSelector } from 'react-redux';



function Homepage() {

  //=========  ==========
  const navigationStateObj = useSelector(state => state.pagesNavigation);

  // ========= useState Hook ========
  // const [ProductPageData, setProductPageData] = useState(null);


  return (
    <HomeDiv>
      <Header />
      {navigationStateObj.viewProductPage ? (
        <ProductPage
          isFromHomepage={true}
          dataForProductPage={navigationStateObj.productPageDetails.pageData}
        />
      ) : (
        <Body/>
      )}
    </HomeDiv>
  );
}

export default Homepage;
