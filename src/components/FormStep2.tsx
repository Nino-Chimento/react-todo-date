import React, { FC } from "react";
import Styled from "styled-components";
import { StyledButton, StyledWrapButton } from "./Form";

export interface FormStep2Props {
  options: string[];
  optionActive: string;
  handleOptionActive: any;
}

const StyledTitle = Styled.div`
    text-align:center;
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    margin-bottom:1rem;
`;

export const FormStep2: FC<FormStep2Props> = (props) => {
  return (
    <>
      <StyledTitle>Attivita</StyledTitle>
      <StyledWrapButton>
        {props.options.map((option) => (
          <StyledButton
            onClick={() => props.handleOptionActive(option)}
            active={option === props.optionActive}
          >
            {option}
          </StyledButton>
        ))}
      </StyledWrapButton>
    </>
  );
};
