import React from "react";
import {
  CardBody,
  CartPageContainer,
  CartPageFooter,
  ImgAndDiscountDiv,
  ItemDetailsAndQtyDiv,
  LikedAndDeleteBtnsDiv,
  LocatorSpan,
  OneColumnListCard,
  OneColumnListContainer,
  PriceDiv,
  ProductNameAndCategoryDiv,
  QuantityDiv,
  ButtonSpan,
  BtnsDiv,
  MinusButton,
  PlusButton,
  CheckOutButton,
  FavBtn,
  DeleteBtn,
  EmptyCartContainer,
} from "./CartPage.styles";
import { FaMinus, FaPlus, FaShopify, FaRegTrashAlt } from "react-icons/fa";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
  actionRemoveFromCart,
  actionIncreaseProductQty,
  actionDecreaseProductQty,
} from "../../../State Management/Redux/Ducks/CartReducer";
import { actionResetAllExpand } from "../../../State Management/Redux/Ducks/PagesNavigationReducer";
import { useState } from "react";
import DeleteModal from "../../Portals/DeleteModal/DeleteModal";
import { EmptyCart } from "../../../Assets/Images/Images";

// ============ FUNCTIONAL COMPONENT =========
function CartPage(props) {
  // ====== useState Hook for Local State =========
  const [IsDelBtnClicked, setIsDelBtnClicked] = useState(false);

  // ======React Hooks for Global State & Actions ========
  const ArrOfCartItems = useSelector((state) => state.cartData);
  const dispatch = useDispatch();

  const Liked = false;

  // ============ Event Handlers ===========
  const DeleteBtnHandler = (deletedItem) => {
    setIsDelBtnClicked(true);
    if (IsDelBtnClicked) {
      dispatch(actionRemoveFromCart(deletedItem));
      setIsDelBtnClicked(false);
    }
    console.log("didigienjkgn");
  };

  const MinusBtnHandler = (CartItem) => {
    if (CartItem.ProductQty > 1) {
      dispatch(actionDecreaseProductQty(CartItem));
    }
  };

  const PlusBtnHandler = (CartItem) => {
    if (CartItem.ProductQty < 20) {
      dispatch(actionIncreaseProductQty(CartItem));
    }
  };

  const CloseDeleteModalHandler = () => {
    setIsDelBtnClicked(false);
  };

  const CheckoutButtonHandler = () => {
    if (!ArrOfCartItems.length) {
      dispatch(actionResetAllExpand());
    } else {
    }
  };

  // ====== JSX RENDERING ==========
  return (
    <CartPageContainer>
      <LocatorSpan>{`> My Cart`}</LocatorSpan>

      {ArrOfCartItems.length ? (
        <OneColumnListContainer>
          <ul>
            {ArrOfCartItems.map((CartItem) => {
              return (
                <li key={CartItem.ProductmgSrc}>
                  <OneColumnListCard>
                    <CardBody>
                      <ImgAndDiscountDiv>
                        <img src={CartItem.ProductImgSrc} alt="sbfc" />
                        <span>-%40</span>
                      </ImgAndDiscountDiv>

                      <ItemDetailsAndQtyDiv>
                        <ProductNameAndCategoryDiv>
                          <span>the product name which is the actual name</span>
                          <h6>category</h6>
                        </ProductNameAndCategoryDiv>

                        <PriceDiv>
                          <h4>₦3,000</h4>
                          <h5>₦4,500</h5>
                        </PriceDiv>

                        <QuantityDiv>
                          <ButtonSpan>Quantity</ButtonSpan>

                          <BtnsDiv>
                            <MinusButton
                              onClick={(e) => MinusBtnHandler(CartItem)}
                              countStopped={
                                CartItem.ProductQty === 1 ? true : false
                              }
                            >
                              <FaMinus />
                            </MinusButton>

                            <ButtonSpan>{CartItem.ProductQty}</ButtonSpan>

                            <PlusButton
                              onClick={(e) => PlusBtnHandler(CartItem)}
                              countStopped={
                                CartItem.ProductQty === 20 ? true : false
                              }
                            >
                              <FaPlus />
                            </PlusButton>
                          </BtnsDiv>
                        </QuantityDiv>
                      </ItemDetailsAndQtyDiv>
                    </CardBody>

                    <LikedAndDeleteBtnsDiv>
                      <FavBtn liked={Liked}>
                        {Liked ? <BsHeartFill /> : <BsHeart />}
                      </FavBtn>

                      <DeleteBtn onClick={(e) => DeleteBtnHandler()}>
                        <FaRegTrashAlt />
                      </DeleteBtn>
                    </LikedAndDeleteBtnsDiv>
                  </OneColumnListCard>

                  {IsDelBtnClicked ? (
                    <DeleteModal
                      CloseModalHandler={CloseDeleteModalHandler}
                      RemoveFromCartHandler={(e) => DeleteBtnHandler(CartItem)}
                    />
                  ) : null}
                </li>
              );
            })}
          </ul>
        </OneColumnListContainer>
      ) : (
        <EmptyCartContainer>
          <img src={EmptyCart} alt="Empty Cart"/>
          <h2>Your cart is empty!</h2>
          <span>
            No item added to cart yet, Browse our categories and select items
            and discover our best deals!
          </span>
        </EmptyCartContainer>
      )}

      <CartPageFooter>
        <CheckOutButton onClick={CheckoutButtonHandler}>
          {ArrOfCartItems.length ? (
            <>
              <FaShopify />
              <h3>CHECKOUT (₦ 11,500)</h3>
            </>
          ) : (
            <>
              <h3>START SHOPPING</h3>
            </>
          )}
        </CheckOutButton>
      </CartPageFooter>
    </CartPageContainer>
  );
}

export default CartPage;
