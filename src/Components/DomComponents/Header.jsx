import React from "react";
import {
  Button,
  HeaderDiv,
  LogoSection1,
  SearchDiv,
} from "../Styles/Header.styles";
import { BsPersonCircle, BsArrowLeftShort } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { MdOutlineShoppingCart, MdSearch } from "react-icons/md";
import { Logo } from "../Images/Images";


//============ FUNCTIONAL COMPONENT ============
function Header(props) {
  //==== Events Handlers =====
  const arrowLeftHandler = (e) => {
    props.arrowLeftAction();
  };

  // ==========Props Object Destructuring =========
  const expansionObj = props.expansionObj;
  // console.log(expansionObj);

  // ========== RENDERING OF JSX ==========
  return (
    <HeaderDiv>
      <LogoSection1>
        <section>
          {expansionObj.categoryExpanded ||
          expansionObj.popularExpanded ||
          expansionObj.topDealsExpanded ||
          expansionObj.viewProductPage ? (
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
          {expansionObj.categoryExpanded ||
          expansionObj.popularExpanded ||
          expansionObj.topDealsExpanded ||
          expansionObj.viewProductPage ? (
            <Button size={"29px"}>
              <MdSearch />
            </Button>
          ) : null}
          <Button>
            <BsPersonCircle />
          </Button>
          <Button>
            <MdOutlineShoppingCart />
          </Button>
        </section>
      </LogoSection1>

      {expansionObj.categoryExpanded ||
      expansionObj.popularExpanded ||
      expansionObj.topDealsExpanded ||
      expansionObj.viewProductPage ? null : (
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
