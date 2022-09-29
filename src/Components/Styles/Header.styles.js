import styled from "styled-components";

export const HeaderDiv = styled.div`
  /* min-width : 100%; */
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 7px;
  padding: 8px 4px 10px 4px;
  position: fixed;
  top: 0%;
  left: 0px;
  right: 0px;
  z-index: 9999;
  box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  color: #3c4043;
`;

export const LogoSection1 = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 49%;
  padding: 4px 3px 0px 3px;
  justify-content: space-between;
  color: #3c4043;

  & > section {
    display: flex;
    flex-direction: row;
    gap: 10px;
    height: 100%;
    align-items: center;
    padding: 0px 5px;

    & > img {
      width: 110px;
      height: 40px;
      margin-top: -8px;
      cursor: pointer;
    }
  }
`;

export const SearchDiv = styled.div`
  width: 88%;
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  margin: 0px auto 0px auto;
  padding-left: 7px;
  background-color: #f8f9fa;
  border: 1px solid #dfe1e5;

  & > input {
    width: 80%;
    margin: auto;
    margin-left: 0px;
    height: 30px;
    outline: none;
    border: none;
    padding-left: 5px;
    font-size: inherit;
    background-color: inherit;
  }

  & > button {
    background: transparent;
    font-size: 23px;
    height: 30px;
    border: none;
    outline: none;
    color: #252825;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Button = styled.button`
  background: transparent;
  text-align: center;
  font-size: ${(props) => (props.size ? props.size : "25px")};
  width: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 39px;
  border: none;
  outline: none;
  color: #3c4043;
  cursor: pointer;
`;
