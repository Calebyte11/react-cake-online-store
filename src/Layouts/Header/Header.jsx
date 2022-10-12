import React from "react";
import {
  Button,
  HeaderDiv,
  LogoSection1,
  SearchDiv,
} from "./Header.styles";
import { BsPersonCircle, BsArrowLeftShort } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { MdOutlineShoppingCart, MdSearch } from "react-icons/md";
import { Logo } from "../../Assets/Images/Images";

import { actionResetAllExpand, actionResetViewProductPage } from "../../State Management/Redux/Ducks/PagesNavigationReducer";
import { useSelector, useDispatch } from 'react-redux';




//============ FUNCTIONAL COMPONENT ============
function Header(props) {
  
  //============== Reading State & Dispatch with React-redux Hooks ============
  const expansionStateObj = useSelector((state) => state.pagesNavigation);
  const cartItems = useSelector((state) => state.cartData)

  const dispatch = useDispatch();

  //==== Events Handlers =====
  const arrowLeftHandler = (e) => {
    if(expansionStateObj.viewPageCategorially === true &&  expansionStateObj.viewProductPage === true ){
      dispatch(actionResetViewProductPage())

    } else {
      dispatch(actionResetAllExpand())

    }
    console.log(expansionStateObj);
  };

  // console.log(expansionStateObj);

  // ========== RENDERING OF JSX ==========
  return (
    <HeaderDiv>
      <LogoSection1>
        <section>
          {expansionStateObj.viewPageCategorially ||
          expansionStateObj.viewProductPage ? (
            <Button onClick={arrowLeftHandler} size={"38px"}>
              <BsArrowLeftShort />
            </Button>
          ) : null}

          <Button>
            <FaBars />
          </Button>

          <img src={Logo} alt="Logo" />
        </section>

        <section>
          {expansionStateObj.viewPageCategorially ||
          expansionStateObj.viewProductPage ? (
            <Button size={"29px"}>
              <MdSearch />
            </Button>
          ) : null}

          <Button>
            <BsPersonCircle />
          </Button>

          <Button>
            <MdOutlineShoppingCart/>
            { cartItems.length ? <span>{cartItems.length}</span> : null }
          </Button>
        </section>
      </LogoSection1>

      {expansionStateObj.viewPageCategorially ||
      expansionStateObj.viewProductPage ? null : (
        <SearchDiv>
          <Button>
            <MdSearch />
          </Button>

          <input
            type="text"
            placeholder="search desserts, cakes or pizza e.t.c"
          />
        </SearchDiv>
      )}
    </HeaderDiv>
  );
}

export default Header;
