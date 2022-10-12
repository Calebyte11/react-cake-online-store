import { createPortal } from "react-dom";
import React from "react";
import {
  BtnSpan,
  ButtonDiv,
  DeliveryDiv,
  ExpandedDiv,
  MiddleBodyOfExpand,
  MinusBtn,
  ModalContentsDiv,
  OverlayDiv,
  PlusBtn,
  TopOfExpanded,
} from "../Styles/AddToCartModal.styles";
import { BuyButton } from "../../Pages/Product-Page/ProductPage.styles";
import { FaMinus, FaPlus } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import { MdOutlineAddShoppingCart } from "react-icons/md";

function AddToCartModal(props) {
  //==== Destructuring the Props =====
  const {
    ImgSrc,
    AddToCartHandler,
    CloseHandler,
    PlusHandler,
    MinusHandler,
    ProductQty,
  } = props;

  //===== The Root for the Portals  =====
  const PortalRoot = document.getElementById("portals-root");

  return createPortal(
    <OverlayDiv>
      <ModalContentsDiv>
        <ExpandedDiv>
          <TopOfExpanded>
            <img src={ImgSrc} alt="Product Img" />
            <span>₦3,000</span>
            <button onClick={CloseHandler}>
              <BsXLg />
            </button>
          </TopOfExpanded>

          <MiddleBodyOfExpand>
            <BtnSpan>Quantity</BtnSpan>

            <ButtonDiv>
              <MinusBtn countStopped = {ProductQty === 1? true : false} onClick={MinusHandler}>
                <FaMinus />
              </MinusBtn>

              <BtnSpan>{ProductQty}</BtnSpan>

              <PlusBtn countStopped = {ProductQty === 20? true : false}  onClick={PlusHandler}>
                <FaPlus />
              </PlusBtn>
            </ButtonDiv>
          </MiddleBodyOfExpand>

          <DeliveryDiv>
            <h3>Delivery : ₦329.23</h3>
            <span>
              From Nsk to user.location
              <br />
              Estimated delivery on Oct 4
            </span>
          </DeliveryDiv>
        </ExpandedDiv>

        <BuyButton onClick={AddToCartHandler}>
          <MdOutlineAddShoppingCart />
          <h3>ADD TO CART</h3>
        </BuyButton>
      </ModalContentsDiv>
    </OverlayDiv>,

    PortalRoot
  );
}

export default AddToCartModal;
