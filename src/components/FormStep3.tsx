import React, { FC } from "react";
import Styled from "styled-components";
import { Select } from "./Select";

export interface FormStep3Props {
  handleChange?: any;
}

const StyledTitle = Styled.div`
    text-align:center;
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    margin-bottom:1rem;
`;
const StyledSelect = Styled.div`
    width:90%;
    margin:auto;
    height:40px;
    margin-bottom:1rem;
`;
const StyleDate = Styled.input`
    width:100%;
    height:100%;
`;

const StyledText = Styled.div`
    margin-bottom:1rem;
`;

const numberMonths = [
  {
    label: "12",
    value: "12",
  },
  {
    label: "24",
    value: "24",
  },
  {
    label: "36",
    value: "36",
  },
  {
    label: "48",
    value: "48",
  },
];

const ammount = [
  {
    label: "Reddito",
    value: "0",
  },
  {
    label: "Sopra 650$",
    value: "Sopra 650$",
  },
  {
    label: "Sopra 2000$",
    value: "Sopra 2000$",
  },
  {
    label: "Sopra 5000$",
    value: "Sopra 5000$",
  },
];

export const FormStep3: FC<FormStep3Props> = (props) => {
  //   const today = new Date();
  //   const setDate =today.getFullYear() +"-" +("0" + (today.getMonth() + 1)).slice(-2) +"-" +("0" + today.getDate()).slice(-2);

  const optionsContract = [
    {
      label: "Tipo di contratto",
      value: "",
    },
    {
      label: "Determinato",
      value: "Determinato",
    },
    {
      label: "Indeterminato",
      value: "Indeterminato",
    },
  ];
  return (
    <>
      <StyledTitle>Maggiori Informazioni</StyledTitle>{" "}
      <StyledSelect>
        <Select
          required={true}
          handleSelect={props.handleChange}
          options={optionsContract}
        />
      </StyledSelect>
      <StyledSelect>
        <StyleDate onChange={props.handleChange} type="date" />
      </StyledSelect>
      <StyledSelect>
        <Select
          required
          handleSelect={props.handleChange}
          options={numberMonths}
        />
      </StyledSelect>
      <StyledSelect>
        <Select
          required={true}
          handleSelect={props.handleChange}
          options={ammount}
        />
      </StyledSelect>
      <StyledText>
        * non è richiesta la compilazione se sei un pensionato
      </StyledText>
    </>
  );
};
