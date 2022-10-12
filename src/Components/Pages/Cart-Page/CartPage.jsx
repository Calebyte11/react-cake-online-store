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
} from "./CartPage.styles";
// import { Cupcake } from "../../../Assets/Images/Images";
import { FaMinus, FaPlus, FaShopify, FaRegTrashAlt } from "react-icons/fa";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { actionRemoveFromCart } from "../../../State Management/Redux/Ducks/CartReducer";

// ============ FUNCTIONAL COMPONENT =========
function CartPage(props) {
  // ======React Hooks for Global State & Actions ========
  const ArrOfCartItems = useSelector((state) => state.cartData);
  const dispatch = useDispatch();


  const Liked = false;

  // ========= Event Handlers =======
  const DeleteHandler = (deletedItem) => {
    dispatch(actionRemoveFromCart(deletedItem))
  };


  // ====== JSX RENDERING ==========
  return (
    <CartPageContainer>
      <LocatorSpan>{`> My Cart`}</LocatorSpan>

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
                          <MinusButton>
                            <FaMinus />
                          </MinusButton>

                          <ButtonSpan>{CartItem.ProductQty}</ButtonSpan>
                          <PlusButton>
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

                    <DeleteBtn onClick={(e) => DeleteHandler(CartItem) } >
                      <FaRegTrashAlt />
                    </DeleteBtn>
                  </LikedAndDeleteBtnsDiv>
                </OneColumnListCard>
              </li>
            );
          })}
        </ul>
      </OneColumnListContainer>

      <CartPageFooter>
        <CheckOutButton>
          <FaShopify />
          <h3>CHECKOUT (₦ 11,500)</h3>
        </CheckOutButton>
      </CartPageFooter>
    </CartPageContainer>
  );
}

export default CartPage;
