import React, { FC } from "react";
import Styled from "styled-components";
import { Input } from "./Input";

export interface FormProps {
  total: string[];
  totalActive: string;
  handletotalActive: any;
  handleMyTotal: any;
}
const StyledTitle = Styled.div`
    text-align:center;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
`;

const StyledP = Styled.p`
    font-size: 14px;
    line-height: 15px;
`;

export const StyledWrapButton = Styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`;

export const StyledButton = Styled.div<any>`
    cursor:pointer;
    height:50px;
    width:45%;
    border-radius:6px;
    border:1px solid black;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:1rem;
    background: ${(props) => (props.active ? "#e7c700" : "")};
`;

const StyledInput = Styled.div`
    cursor:pointer;
    height:50px;
    width:45%;
    border-radius:6px;
    border:1px solid black;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:1rem;
`;

export const FormStep1: FC<FormProps> = (props) => {
  return (
    <>
      <StyledTitle>
        <h4>Che Importo Ti serve?</h4>
      </StyledTitle>
      <div>
        <StyledP>
          Ti informiamo che questa soluzione agevolata di prestito non può
          essere concessa a coloro che non possono dimostrare una forma di
          reddito da lavoro (disoccupati, reddito di cittadinanza, pensione
          INAIL, etc.). Sono invece inclusi tutti pensionati, a partire da
          coloro che percepiscono una pensione minima di 650 euro al mese.
        </StyledP>
      </div>
      <StyledWrapButton>
        {props.total.map((total) => (
          <StyledButton
            onClick={() => props.handletotalActive(total)}
            active={total === props.totalActive}
          >
            {total}$
          </StyledButton>
        ))}
        <StyledInput>
          <Input
            min={0}
            handleChange={props.handleMyTotal}
            placeholder="Altro"
          />
        </StyledInput>
      </StyledWrapButton>
    </>
  );
};
