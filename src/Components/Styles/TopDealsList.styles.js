import styled from "styled-components";
import { PopularListContainer } from "./PopularList.styles";

export const TopDealsContainer = styled(PopularListContainer)`
  margin-top: -15px;

  & > section {
    & > button {
      font-size: 15px;
    }
  }

  & > ul {
    margin-top: -1px;
    gap: 3px;

    & > li {
      background: #fff;
      min-width: 185px;
      height: 220px;
      list-style: none;
      margin: 10px 5px 25px 5px;
      z-index: 1;
      border-radius: 7px;
      display: flex;
      flex-direction: column;
      box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
      overflow-y: hidden;
      position: relative;

      & > h5 {
        position: absolute;
        top: -15px;
        right: 0px;
        margin-right: 5%;
        color: #ff6464;
        border-radius: 3px;
        background: #ffdfdf;
        padding: 1px 5px 1px 5px;
        font-weight: 500;
      }

      & > img {
        width: 95%;
        height: 115px;
        margin: 6px auto 5px auto;

        border-radius: inherit;
      }

      & > div {
        margin-top: 5px;

        & > section {
          height: 40px;

          & > h4 {
            height: 0px;
            margin-top: 8px;
            font-size: 15px;
          }

          & > h6 {
            height: 0px;
            margin-top: -3px;
            color: #a0a4a8;
            font-size: 14px;
            font-weight: 500;
          }

          & h5 {
            height: 0px;
            margin-top: -3px;
            color: #a0a4a8;
            font-size: 14px;
            font-weight: 500;
            text-decoration: line-through;
            text-decoration-color: #3c4043;
          }
        }
      }
    }
  }
`;
