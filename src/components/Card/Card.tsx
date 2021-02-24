import React, { FC } from "react";
import Styled from "styled-components";
import { Img } from "../Img/Img";
import "@fortawesome/fontawesome-free/js/all.js";

export interface CardProps {
  handleStart: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  src: string;
  title: string;
  description: string;
  price: any;
  colorIcon: boolean;
}

const StyledWrap = Styled.div`
    padding: 20px;
    background-color:white;
`;

const StyledImg = Styled.div`
    width:60%;
    margin:auto;
    position:relative;
`;

const StyledIcon = Styled.i<any>`
    font-size:20px;
    color:${(CardProps) => (CardProps.colorIcon ? "yellow" : "lightgrey")};;
`;

const StyledWrapIcon = Styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    top:-5%;
    right:-5%;
    border-radius:100%;
    height:30px;
    width:30px;
    border:1px solid lightgrey;
    cursor:pointer;
`;

const StyledWrapText = Styled.div`
    text-align:center;
`;

const StyledTitle = Styled.h2``;
const StyledDescription = Styled.p``;
const StyledPrice = Styled.span``;

export const Card: FC<CardProps> = (props) => {
  return (
    <StyledWrap>
      <StyledImg>
        {" "}
        <Img src={props.src} />
        <StyledWrapIcon onClick={props.handleStart}>
          <StyledIcon
            colorIcon={props.colorIcon}
            className="fas fa-star"
          ></StyledIcon>
        </StyledWrapIcon>
      </StyledImg>
      <StyledWrapText>
        <StyledTitle>{props.title}</StyledTitle>
        <StyledDescription>{props.description}</StyledDescription>
        <StyledPrice>{props.price}</StyledPrice>
      </StyledWrapText>
    </StyledWrap>
  );
};
