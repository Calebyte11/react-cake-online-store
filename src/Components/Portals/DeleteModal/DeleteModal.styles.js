import styled from "styled-components";
import { FlexDivRow } from "../../Pages/Product-Page/ProductPage.styles";

// ======= the delete modal container =====
export const DeleteModalContainer = styled.div`
  background-color: #fff;
  z-index: 9999;
  height: 130px;
  width: 87%;
  border-radius: 7px;
  padding: 10px;
  position: fixed;
  margin: auto;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
`;

// ===== Container heading text =====
export const ContainerHeading = styled.h3`
  font-size: 21px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

// ====== close button ======
export const CloseButton = styled.button`
  background-color: transparent;
  width: 25px;
  aspect-ratio: 1;
  height: 25px;
  font-size: 20px;
  border: none;
  position: absolute;
  top: 15px;
  right: 15px;
`;

// ====== Buttons Div for cancel n remove btn =======
export const DeleteModalButtonsDiv = styled(FlexDivRow)`
  gap: 20px;
  justify-content: flex-end;
`;

// ====== Remove Button & Cancel Button =========
export const RemoveButton = styled.button`
  width: 75px;
  background: #ff6464;
  height: 28px;
  color: #fff;
  border-radius: 7px;
  border: none;
  font-weight: 700;
  font-size: 15px;
  font-family: inherit;
  box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  text-align: center;
`;

export const CancelButton = styled(RemoveButton)`
  color: inherit;
  background-color: white;
  /* border: 1px solid #dfe1e5; */
`;
