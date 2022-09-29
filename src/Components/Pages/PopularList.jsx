import React, {  } from "react";
import { PopularListContainer } from "../Styles/PopularList.styles";
import {
  BlackForestCake,
  PepperoniPizza,
  ChristmasChic,
  ChocoParfait,
  WedCake,
  Tiramisu,
  VanillaIce,
  WhiteCake,
  Sharwama,
  Doughs,
  CheesePizza,
  CupCakePop,
} from "../Images/Images";
import { BsStarFill, BsHeartFill } from "react-icons/bs";

import { useDispatch } from 'react-redux';
import { actionViewPageCategorially, actionViewProductPage } from "../Redux/Ducks/PagesNavigationReducer"



const popularArr = [
  { ImgSrc: WhiteCake },
  { ImgSrc: Sharwama },
  { ImgSrc: CheesePizza },
  { ImgSrc: CupCakePop },
  { ImgSrc: BlackForestCake },
  { ImgSrc: PepperoniPizza },
  { ImgSrc: ChristmasChic },
  { ImgSrc: ChocoParfait },
  { ImgSrc: WedCake },
  { ImgSrc: Tiramisu },
  { ImgSrc: VanillaIce },
  { ImgSrc: Doughs },
];



// ======================== THE FUNCTIONAL COMPONENT =====================
function PopularList(props) {

  const activeStatus = {
    IsPopularPageActive: true
  }

  //========== Reading State &  Dispatch with React-redux Hooks ==========
  const dispatch = useDispatch()

  // ======= Event Handlers =======
  const handleViewMore = (popularArr, activeStatus) => {
    
    dispatch( actionViewPageCategorially(popularArr, activeStatus));
  };

  const ProductImgClickHandler = (eachItem) => {
    dispatch( actionViewProductPage(eachItem));
  };

  // ================== CONDITIONAL RENDERING ===========
    return (
      <PopularListContainer>
        <section>
          <span>Popular</span>
          <button onClick={() => handleViewMore(popularArr, activeStatus)}>View more </button>
        </section>

        <ul>
          {popularArr.map((eachItem) => {
            return (
              <li key={eachItem.ImgSrc}>
                <img
                  src={eachItem.ImgSrc}
                  onClick={(e) => {
                    ProductImgClickHandler(eachItem);
                  }}
                  alt="Cakes"
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

                    <h5>$44.00</h5>
                  </section>
                </div>
              </li>
            );
          })}
        </ul>
      </PopularListContainer>
    );

}

export default PopularList;
