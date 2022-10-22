import styled from "styled-components";

export const BodyDiv = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px 5px;
  overflow-x: hidden;
  overflow-y: hidden;
  position: absolute;
  top: ${(props) =>
    props.isExpanded.categoryExpanded ||
    props.isExpanded.viewPageCategorially ||
    props.isExpanded.viewCartPage
      ? "7%"
      : "14%"};
  left: 0%;
  right: 0%;

  /* pointer-events: ${(props) =>
    props.isExpanded.categoryExpanded ||
    props.isExpanded.popularExpanded ||
    props.isExpanded.topDealsExpanded
      ? "none"
      : "all"}; */
`;
