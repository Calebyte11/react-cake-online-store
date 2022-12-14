import styled from "styled-components";
import { PopularListContainer } from "../Home/Popular-List/PopularList.styles";

//==== ENTIRE CONTAINER======
export const PageCategorialContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  position: relative;
`;

// ==== For the Primary navs list ======
export const PagePrimaryNav = styled.div`
  position: fixed;
  top: 6%;
  right: 0px;
  left: 0px;
  z-index: 999;
  padding: 8px 7px 4px 7px;
  background-color: #fff;
  height: 6%;
  /* min-width: 99%; */
  min-height: 55px;
  box-shadow: 0 1px 6px rgb(32 33 36 / 28%);

  & > ul {
    display: flex;
    flex-direction: row;
    height: 40px;
    margin-left: 0px;
    /* margin-top: 6%; */
    padding: 2px;
    overflow-x: scroll;
    gap: 17px;
  }
`;

// ===== list of individual PriNavs ====
export const PriNavList = styled.li`
  background: #f0f0f0;
  min-width: 95px;
  height: 32px;
  list-style: none;
  z-index: 1;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;

  & > h3 {
    font-size: 15px;
    font-family: inherit;
    font-weight: 700;
    color: ${({ active }) => (active ? "#ff6464" : "inherit")};
    display: inline-block;
    white-space: nowrap;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 87px;
    margin: auto;
    padding: 0px 2px 0px 2px;
  }

  & > span {
    width: 40px;
    border-bottom: 5px solid #ff6464;
    display: ${({ active }) => (active ? "block" : "none")};
    border-radius: 10px;
  }
`;

// =========== For the 2 Column list ================
export const TwoColumnListContainer = styled(PopularListContainer)`
  margin-top: 53px;
  z-index: 333;
  border-radius: 0px;
  padding-left: 0px;
  width: 100%;
  min-height: 1vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  left: 0px;
  right: 0px;

  & > ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 0px auto 0px auto;
    padding: 0px;
    padding-left: 0px;
    overflow-x: hidden;
    overflow-y: scroll;
    flex-wrap: wrap;
    min-height: 100%;
    column-count: 2;
    column-gap: 0px;

    & > li {
      display: flex;
      flex-direction: column;
      background: #fff;
      min-width: 153px;
      width: 47%;
      height: 248px;
      list-style: none;
      margin: 7px auto 7px auto;
      z-index: 1;
      border-radius: 6px;
      position: relative;
      box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
      overflow-y: hidden;

      // ==== the discount tag(if any) ====
      & > h5 {
        position: absolute;
        top: -15px;
        right: -5px;
        margin-right: 5%;
        color: #ff6464;
        border-radius: 3px;
        background: #ffdfdf;
        padding: 2px 5px 2px 5px;
        font-weight: 400;
      }

      //==== product image ======
      & > img {
        width: 95%;
        height: 135px;
        min-height: 57%;
        margin: 6px auto 5px auto;
        border-radius: inherit;
      }

      //==== price and slashed price ====
      & > div {
        display : flex;
        flex-direction: column;
        padding: 0px 9px 0px 9px;
        margin-top: 10px;

        & > div {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          height: 27px;
          gap: 4px;

          & > h4 {
            height: 0px;
            margin-top: 0px;
            font-size: 14px;
            font-weight: 400;
            text-transform: capitalize;
          }

          & > h5 {
            height: 0px;
            margin-top: 4px;
            color: #a0a4a8;
            font-size: 11px;
            font-weight: 500;
            text-decoration: line-through;
            text-decoration-color: inherit;
          }
        }

        & > section {

          & > div > button{
            margin-left: 0px;
            border: none;
            background-color: transparent;
            padding-left: 0px;
            display: flex;
            flex-direction: row;
            color: #f6a609;
          }

          & > span {
            font-size: 12px;
            color: #6570a7;
            font-weight: 400;
            width: 100%;
          }
        }
      }
    }
  }
`;
