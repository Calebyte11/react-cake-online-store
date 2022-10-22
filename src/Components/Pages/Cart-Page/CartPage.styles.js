import styled from "styled-components";
import { BuyButton, ProductFooter } from "../Product-Page/ProductPage.styles";
import {
  BtnSpan,
  ButtonDiv,
  MinusBtn,
} from "../../Portals/AddToCartModal/AddToCartModal.styles";

// ===== Page Container ============
export const CartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0px;
`;

// ======= Locator Text =========
export const LocatorSpan = styled.span`
  margin: 0px;
  font-size: 19px;
  font-weight: 400;
  position: fixed;
  top: 6%;
  right: 0px;
  text-align: justify;
  padding: 15px 8px 5px;
  left: 0px;
  z-index: 999;
  background-color: #fff;
  box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
`;

// ====== 1-Column List Container ==========
export const OneColumnListContainer = styled.div`
  margin-top: 35px;
  padding: 0px;
  position: relative;

  & > ul {
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    align-content: center;
    gap: 17px;
    list-style: none;
    padding: 7px;
    margin-bottom: 75px;

    & > li {
      width: 100%;
    }
  }
`;

// ======== for the One-ColumnlistCard =======
export const OneColumnListCard = styled.div`
  background-color: #fff;
  height: 179px;
  border-radius: 7px;
  box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

// ========== the Card Body  =====
export const CardBody = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
  height: 85%;
`;

// ========= the Img & Discount section ======
export const ImgAndDiscountDiv = styled.section`
  position: relative;
  width: 43%;
  position: relative;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 7px;
  }

  & > span {
    position: absolute;
    top: 2px;
    right: -4px;
    margin-right: 5%;
    color: #ff6464;
    border-radius: 3px;
    background: #ffdfdf;
    padding: 1px 3px 1px 3px;
    font-weight: 400;
  }
`;

// ====== Product details, Product Name, Prices and Quatity Btns ==============
export const ItemDetailsAndQtyDiv = styled.section`
  width: 57%;
  display: flex;
  flex-direction: column;
`;

export const ProductNameAndCategoryDiv = styled.section`
  display: flex;
  flex-direction: column;

  & > span {
    margin-top: 0px;
    font-size: 15px;
    line-height: 18px;
    font-weight: 400;
    text-transform: capitalize;
  }

  & > h6 {
    margin-top: 0px;
    margin-bottom: 0px;
    color: #a0a4a8;
    font-size: 14px;
    font-weight: 500;
  }
`;

export const PriceDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  height: 21px;

  & > h4 {
    font-size: 17px;
    font-weight: 600;
    text-transform: capitalize;
  }

  & > h5 {
    color: #a0a4a8;
    font-size: 14px;
    font-weight: 500;
    text-decoration: line-through;
    text-decoration-color: inherit;
  }
`;

// ======= Quantity Div =======
export const QuantityDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  gap: 19px;
`;

//== button (- & +) section ====
export const BtnsDiv = styled(ButtonDiv)`
  flex-direction: row;
  gap: 10px;
  margin-left: 10px;
`;

export const MinusButton = styled(MinusBtn)`
  background-color: ${(props) =>
    props.countStopped ? "#ff686847" : "#ff6868"};
`;

export const PlusButton = styled(MinusButton)`
  background-color: ${(props) =>
    props.countStopped ? "#ff686847" : "#ff6868"};
`;

export const ButtonSpan = styled(BtnSpan)`
  font-weight: 400;
  font-size: 15px;
  width: auto;
`;

//==== the favBtn n delBtn Div==========
export const LikedAndDeleteBtnsDiv = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

// ===== for the favBtn ========
export const FavBtn = styled.button`
  background: transparent;
  border: none;
  outline: none;
  font-size : 18px;

  color: ${(props) =>
    props.liked ? "#ff6464" : "#4f4f4f"};
`;

// ===== for the delBtn ==========
export const DeleteBtn = styled.button`
  background: transparent;
  color: #d10000;
  border: none;
  outline: none;
  font-size : 19px;
`;

// ======== The Page Footer ============
export const CartPageFooter = styled(ProductFooter)`
  padding: 10px 0px 10px 0px;
`;

export const CheckOutButton = styled(BuyButton)`
`;


// ======== For Empty Cart Container =========
export const EmptyCartContainer = styled.div`
  margin-top: 55px;
  padding: 0px;
  margin-top: 50px;
    padding: 0px;
    display: flex;
    flex-direction: column;

  & > img{
    height: 300px;
  }

  & > h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    margin-top: -10px;
  }

  & > span {
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    padding: 0px 10px 0px 10px;
  }
`;

