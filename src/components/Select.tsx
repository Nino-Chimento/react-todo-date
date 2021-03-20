import React, { FC } from "react";
import Styled from "styled-components";

interface selectProps {
  required: boolean;
  handleSelect?: any;
  options: {
    value: string;
    label: string;
  }[];
}
const StyledSelect = Styled.select`
    width:100%;
    height:100%;
    border:1px solid lightgrey;
    padding:0 5px 0 5px;
`;

export const Select: FC<selectProps> = (props) => {
  return (
    <StyledSelect required={props.required} onChange={props.handleSelect}>
      {props.options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </StyledSelect>
  );
};
