import styled from "styled-components";

export const OverlayDiv = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(33, 33, 33,  0.5);
  /* backdrop-filter: blur(1px); */
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 99999;
`;

export const ModalContentsDiv = styled.div`
  font-family: inherit;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0px 10px 0px;
  box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  z-index: 99999;
  border-radius: 10px;

`;

// ======== The Expanded Div ============
export const ExpandedDiv = styled.div`
  height: 100%;
  width: 95%;
  display: flex;
  flex-direction: column;
  padding: 0px 10px 0px 10px;
`;
//==== expanded top section ====
export const TopOfExpanded = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  position: relative;
  padding-top: 10px;

  & > img {
    width: 70px;
    aspect-ratio: 1;
    border-radius: 8px;
  }

  & > span {
    font-size: 22px;
    margin-left: 10px;
    font-weight: 500;
  }

  & > button {
    position: absolute;
    top: 0px;
    right: 5px;
    font-size: 24px;
    display: flex;
    flex-direction: row;
    color: #3c4043;
    background-color: transparent;
    outline: none;
    border: none;
  }
`;

//==== expanded & centered body section ====
export const MiddleBodyOfExpand = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  gap: 10px;
`;

//== button (- & +) section ====
export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  gap: 10px;
  margin-left: 10px;
`;

export const MinusBtn = styled.button`
  font-size: 16px;
  background-color: ${(props) => props.countStopped? '#ff686847' :  '#ff6868'};
  width: 28px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;
  box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  outline: none;
  color: #fff;
  text-align: center;
`;

export const PlusBtn = styled(MinusBtn)`
  background-color: ${(props) => props.countStopped? '#ff686847' :  '#ff6868'};
`;

export const BtnSpan = styled.span`
  font-size: 17px;
  font-weight: 500;
  width: 21px;
`;

//==== expanded footer section ====
export const DeliveryDiv = styled.section`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > h3 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  & > span {
    font-size: 15px;
    font-weight: 400;
  }
`;
