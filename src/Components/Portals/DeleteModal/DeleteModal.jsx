import React from "react";
import { createPortal } from "react-dom";
import { OverlayDiv } from "../AddToCartModal/AddToCartModal.styles";
import {
  CancelButton,
  CloseButton,
  ContainerHeading,
  DeleteModalButtonsDiv,
  DeleteModalContainer,
  RemoveButton,
} from "./DeleteModal.styles";
import { BsXLg } from "react-icons/bs";

function DeleteModal(props) {
  //===== The Root for the Portals  =====
  const PortalRoot = document.getElementById("portals-root");

  // ====== Props Destructuring ========
  const { CloseModalHandler, RemoveFromCartHandler } = props; 

  //   ======== RENDERING JSX ==========
  return createPortal(
    <OverlayDiv>
      <DeleteModalContainer>
        <ContainerHeading>Remove From Cart</ContainerHeading>
        <CloseButton onClick={CloseModalHandler}>
          <BsXLg />
        </CloseButton>
        <span>Do you really want to remove this item from cart ?</span>
        <DeleteModalButtonsDiv>
          <CancelButton onClick={CloseModalHandler}>Cancel</CancelButton>
          <RemoveButton onClick={RemoveFromCartHandler}>Remove</RemoveButton>
        </DeleteModalButtonsDiv>
      </DeleteModalContainer>
    </OverlayDiv>,

    // ======= CONTAINER ROOT ELEMENT =========
    PortalRoot
  );
}

export default DeleteModal;
