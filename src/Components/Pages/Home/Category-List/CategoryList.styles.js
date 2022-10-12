import styled from "styled-components";

export const CategoryListContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  width: 98%;
  /* height: px; */
  font-size: 17px;
  font-weight: 500;
  padding: 0px 7px;
  z-index: 333;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  /* margin-top: 15px; */

  & > section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 10px;

    & > button {
      background-color: transparent;
      border: none;
      font-family: inherit;
      font-size: 14px;
      color: #ff6464;
      margin-right: 5px;
    }
  }

  & ul {
    display: flex;
    flex-direction: row;
    margin-left: 5px;
    padding-left: 0px;
    overflow-x: scroll;
    margin-top: 6px;

    & > li {
      background: #ff6464;
      min-width: 78px;
      padding: 6px;
      height: 120px;
      list-style: none;
      margin: 5px 15px 15px 5px;
      z-index: 1;
      border-radius: 49px;
      display: flex;
      flex-direction: column;
      box-shadow: 0 1px 6px rgb(32 33 36 / 28%);

      & > img {
        width: 66px;
        aspect-ratio: 1;
        border-radius: 50%;
        margin: 2px auto;
      }

      & > h4 {
        padding-top: 2px;
        font-family: inherit;
        font-weight: 500;
        font-style: italic;
        font-size: 13px;
        color: #fff;
        white-space: normal;
        margin: 0px auto;
        text-align: center;
      }
    }
  }
`;
