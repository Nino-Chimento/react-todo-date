import React, { FC } from "react";
import { useSelector } from "react-redux";
import Styled from "styled-components";
import { selectorCard, selectorLikeCard } from "../../redux/selectors";
import { formattedPrice } from "../../utils/Utility";

const StyledWrap = Styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

const StyledWrapIcon = Styled.div`
    display:flex;
`;

const StyledIcon = Styled.i`
    font-size:20px;
    margin:0 5px 0 5px;;
`;

const StyledH1 = Styled.h1``;
const StyledWrapIconCount = Styled.div`
    position:relative;
`;
const StyledCount = Styled.div`
    background-color:lightblue;
    border-radius:100%;
    position:absolute;
    height:20px;
    width:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    top:-60%;
    right:-20%;
`;

export const Header: FC = () => {
  const selectLikeCard = useSelector(selectorLikeCard);
  const selectCart = useSelector(selectorCard);
  const price = formattedPrice(selectCart);

  return (
    <StyledWrap>
      <StyledH1>Brand</StyledH1>
      <StyledWrapIcon>
        <StyledWrapIconCount>
          <span>€ {price}</span>
          <StyledIcon className="fas fa-shopping-bag"></StyledIcon>
          <StyledCount>{selectCart.length}</StyledCount>
        </StyledWrapIconCount>
        <StyledWrapIconCount>
          <StyledIcon className="fas fa-star"></StyledIcon>
          <StyledCount>{selectLikeCard.length}</StyledCount>
        </StyledWrapIconCount>
      </StyledWrapIcon>
    </StyledWrap>
  );
};
