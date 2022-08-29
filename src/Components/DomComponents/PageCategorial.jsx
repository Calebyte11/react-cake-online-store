import React, { useState } from "react";
import { BsStarFill, BsHeartFill } from "react-icons/bs";
import ProductPage from "./ProductPage";
import {
  PriNavList,
  PageCategorialContainer,
  PagePrimaryNav,
  TwoColumnListContainer,
} from "../Styles/PageCategorial.styles";




//==================== FUNCTIONAL COMPONENT =====================
function PageCategorial(props) {
  // ======= the useState ========
  const [ProductPageData, setProductPageData] = useState(null);

  const [Navigator, setNavigator] = useState([
    { name: "Popular", active: false || props.isPopularPageActive },
    { name: "Top Deals", active: false || props.isTopDealsPageActive },
    { name: "Cakes", active: false },
    { name: "Pizza", active: false },
    { name: "Shawarma", active: false },
    { name: "Hamburger", active: false },
    { name: "Doughnuts", active: false },
    { name: "Pies & Rolls", active: false },
    { name: "Chicken & Chips", active: false },
    { name: "Cake Parfait", active: false },
  ]);

  //=========== props Destructuring ==========
  const ArrofObj = props.ArrofObj;

  // ========== Event Handlers ========
  const ProductImgClickHandler = (eachItem) => {
    // console.log(eachItem);
    setProductPageData(eachItem);
  };

  const NavClickHandler = (EachNav) => {
    // console.log(EachNav);

    setNavigator(
      Navigator.map((Navs) => {
        if (Navs.name === EachNav.name) {
          return { ...EachNav, active: true };
        } else if (Navs.name !== EachNav.name) {
          return { ...Navs, active: false };
        } else {
          return Navs;
        }
      })
    );
  };

  //===================== CONDITIONAL RENDERING ==================
  if (ProductPageData === null) {
    return (
      <PageCategorialContainer>
        <PagePrimaryNav>
          <ul>
            {Navigator.map((EachNav) => {
              return (
                <PriNavList
                  key={EachNav.name}
                  active={EachNav.active}
                  onClick={() => NavClickHandler(EachNav)}
                >
                  <h3>{EachNav.name}</h3>
                  <span></span>
                </PriNavList>
              );
            })}
          </ul>
        </PagePrimaryNav>

        <TwoColumnListContainer>
          <ul>
            {ArrofObj.map((eachItem) => {
              return (
                <li key={eachItem.ImgSrc}>
                  <h5>-40%</h5>
                  <img
                    src={eachItem.ImgSrc}
                    alt="Cakes"
                    onClick={(e) => {
                      ProductImgClickHandler(eachItem);
                    }}
                  />

                  <div>
                    <section>
                      <div>
                        <h4>product name</h4>
                        <h6>category</h6>
                      </div>

                      <button>
                        <BsHeartFill />
                      </button>
                    </section>

                    <div>
                      <h4>#3,000</h4>
                      <h5>#4,500</h5>
                    </div>

                    <section>
                      <div>
                        <button>
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                        </button>
                      </div>

                      <span>| 19 ratings</span>
                    </section>
                  </div>
                </li>
              );
            })}
          </ul>
        </TwoColumnListContainer>
      </PageCategorialContainer>
    );
  } else if (ProductPageData !== null) {
    return (
      <ProductPage
        isFromHomepage={false}
        dataForProductPage={ProductPageData}
      />
    );
  }
}

export default PageCategorial;
