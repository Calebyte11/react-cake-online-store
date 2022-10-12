import React from "react";
import { HomeDiv } from "./Homepage.styles";
import Body from "../../../../Layouts/Body/Body";
import Header from "../../../../Layouts/Header/Header";
import ProductPage from "../../Product-Page/ProductPage";

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
