import React, { FC } from "react";
import Styled from "styled-components";

export interface BreadFormProps {
  handleSelect: any;
  active?: number;
  options: {
    id: number;
    label: string;
  }[];
}

const StyledWrap = Styled.div`
    width:90%;
    margin:auto;
    margin-top:1rem;
    display:flex;
    justify-content:space-between;
`;

const StyledNumber = Styled.div<any>`
    border-radius:100%;
    height:30px;
    width:30px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    margin-bottom:1rem; 
    background: ${(props) => (props.active ? "white" : "")};
`;
const StyledText = Styled.div`
    color:white;
    font-size:16px;
    text-transform:uppercase;
`;

const StyledOption = Styled.div`
    width:25%;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const BreadForm: FC<BreadFormProps> = (props) => {
  return (
    <StyledWrap>
      {props.options.map((option) => (
        <StyledOption onClick={() => props.handleSelect(option.id)}>
          <StyledNumber active={option.id === props.active}>
            {option.id}
          </StyledNumber>
          <StyledText>{option.label}</StyledText>
        </StyledOption>
      ))}
    </StyledWrap>
  );
};
