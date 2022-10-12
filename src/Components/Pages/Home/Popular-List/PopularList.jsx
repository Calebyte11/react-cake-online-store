import React from "react";
import { FavButton, PopularListContainer } from "./PopularList.styles";
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
} from "../../../../Assets/Images/Images";
import { BsStarFill, BsHeartFill,BsHeart } from "react-icons/bs";

import { useDispatch } from "react-redux";
import {
  actionViewPageCategorially,
  actionViewProductPage,
} from "../../../../State Management/Redux/Ducks/PagesNavigationReducer";

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
    IsPopularPageActive: true,
  };

  const Liked = false;

  //========== Reading State &  Dispatch with React-redux Hooks ==========
  const dispatch = useDispatch();

  // ======= Event Handlers =======
  const handleViewMore = (popularArr, activeStatus) => {
    dispatch(actionViewPageCategorially(popularArr, activeStatus));
  };

  const ProductImgClickHandler = (eachItem) => {
    dispatch(actionViewProductPage(eachItem));
  };

  // ================== CONDITIONAL RENDERING ===========
  return (
    <PopularListContainer>
      <section>
        <span>Popular</span>
        <button onClick={() => handleViewMore(popularArr, activeStatus)}>
          View more{" "}
        </button>
      </section>

      <ul>
        {popularArr.map((eachItem) => {
          return (
            <li key={eachItem.ImgSrc} liked ={Liked}>
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

                  <FavButton liked={Liked}>
                    {Liked? <BsHeartFill/> : <BsHeart/> }
                  </FavButton>
                </section>

                <section>
                  <div>
                    <section>
                    <button>
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </button>
                    <span>| 19 ratings</span>
                    </section>
                  </div>
                  <h5>₦3,000</h5>
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
