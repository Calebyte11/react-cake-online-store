import styled from "styled-components";

// =============== Product container ================
export const ProductContainer = styled.div`
  margin: 0px;
  /* height: 100%; */
  position: ${(props) => (props.isFromHomepage ? "absolute" : "none")};
  /* top: 70px; */
  top: ${(props) => (props.isFromHomepage ? "70px" : "0px")};
  left: 0px;
  right: 0px;
  padding: 1px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

//============ Image Div ===============
export const ImageDiv = styled.div`
  width: 98%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  & > img {
    width: 100%;
    height: 300px;
    border-radius: 6px;
  }
`;

// ============= Product Footer =============
export const ProductFooter = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 59px;
  box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  z-index: 99999;
`;

// ========= Buy or Add to Cart Button =======
export const BuyButton = styled.button`
  width: 70%;
  height: 42px;
  margin: auto;
  background-color: #ff6464;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-family: inherit;
  font-size: 25px;
  box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  & > h3 {
    font-size: 18px;
    font-weight: 600;
  }
`;

//========= Details Div =========
export const DetailsDiv = styled.div`
  width: 98%;
  min-height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;

  & > section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0px;
  }
`;

// ======== Name and Category of the Product =======
export const ProductName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 3px;
  width: 85%;
  height: 100%;
  margin: 0px;

  & > h4 {
    font-size: 18px;
    font-weight: 500;
    margin: 0px;
    text-transform: capitalize;
  }

  & > h6 {
    margin: auto 0px;
    color: #a0a4a8;
    font-size: 14px;
    font-weight: 500;
  }
`;

// ======== favourite button =======
export const FavouriteButton = styled.button`
  background-color: transparent;
  width: 12%;
  color: ${(props) => (props.liked ? "#ff6464" : "#4f4f4f")};
  border: none;
  outline: none;
  font-size: 18px;
  height: 30px;
  padding-top: 0px;
`;

// ========== price and slashed and discount =======
export const PriceDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 85%;
  height: 20px;
  padding: 0px;

  & > h4 {
    font-size: 22px;
    font-weight: 600;
    margin: 0px;
    text-transform: capitalize;
  }

  & > h5 {
    margin: 0px 0px 0px 5px;
    color: gray;
    font-size: 15px;
    font-weight: 500;
    text-decoration: line-through;
    text-decoration-color: gray;
  }

  & > h6 {
    margin-left: 10px;
    color: #ff6464;
    border-radius: 3px;
    background: #ffdfdf;
    padding: 1px 2px 1px 2px;
    font-size: 15px;
    font-weight: 500;
  }
`;

//======= Rating Button and it's Container ========
export const FlexDivRow = styled.div`
  display: flex;
  flex-direction: row;
`;

// ==== button
export const RatingButton = styled.button`
  background-color: transparent;
  border: none;
  padding-left: 0px;
  color: #f6a609;
  font-size: 16px;
`;

// ==== number of rating
export const NumOfRating = styled.span`
  font-size: 15px;
  color: #6570a7;
`;
