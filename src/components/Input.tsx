import React, { FC } from "react";
import styled from "styled-components";

export interface InputProps {
  label?: string;
  placeholder?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocus?: ((event: React.FocusEvent<HTMLInputElement>) => void) & void;
  required?: boolean;
  type?: string;
  value?: string | number;
  minlength?: string | number;
  maxlength?: string | number;
  min?: string | number;
  max?: string | number;
  name?: string;
}

const StyledInput = styled.input<InputProps>`
  height: 100%;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  font-size: 14px;
  font-family: "Lato", sans-serif;
  &:focus {
    outline: none;
  }
`;
const StyledLabel = styled.label`
  font-family: inherit;
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 14px;
`;

export const Input: FC<InputProps> = (props: InputProps) => {
  return (
    <>
      <StyledLabel>{props?.label}</StyledLabel>
      <StyledInput
        name={props.name}
        type={props.type}
        minlength={props.minlength}
        maxlength={props.maxlength}
        min={props.min}
        max={props.max}
        placeholder={props.placeholder}
        value={props.value}
        onFocus={props.handleFocus}
        onChange={props.handleChange}
      />
    </>
  );
};
