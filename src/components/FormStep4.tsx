import React, { FC } from "react";
import Styled from "styled-components";
import { StyledWrapButton } from "./Form";
import { Input } from "./Input";
import { Select } from "./Select";

interface FormStep4Props {
  handleChange?: any;
}

const StyledTitle = Styled.div`
    text-align:center;
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    margin-bottom:1rem;
`;
const StyledInput = Styled.div`
    width:45%;
    height:50px;
    margin-bottom:1rem;
`;

const StyledSelect = Styled.div`
    width:100%;
    height:50px;
    margin-bottom:1rem;
`;
const StyledCheckBox = Styled.div`
    display:flex;
    margin-bottom:1rem;
`;

const StyledLabel = Styled.label`
    font-size:12px;
`;

export const FormStep4: FC<FormStep4Props> = (props) => {
  const city = [
    {
      value: "",
      label: "Seleziona città",
    },
    {
      value: "Milano",
      label: "Milano",
    },
    {
      value: "Roma",
      label: "Roma",
    },
    {
      value: "Firenza",
      label: "Firenze",
    },
    {
      value: "Palermo",
      label: "Palermo",
    },
  ];
  return (
    <>
      <StyledTitle>Verifica la fattibilità</StyledTitle>
      <StyledWrapButton>
        <StyledInput>
          <Input
            name="nome"
            handleChange={props.handleChange}
            placeholder="Nome"
          />
        </StyledInput>
        <StyledInput>
          <Input
            name="Cognome"
            handleChange={props.handleChange}
            placeholder="Cognome"
          />
        </StyledInput>
        <StyledInput>
          <Input
            name="E-mail"
            handleChange={props.handleChange}
            placeholder="E-mail"
          />
        </StyledInput>
        <StyledInput>
          <Input
            name="Telefono"
            handleChange={props.handleChange}
            placeholder="Telefono"
          />
        </StyledInput>
        <StyledSelect>
          <Select
            name="pe"
            required={true}
            handleSelect={props.handleChange}
            options={city}
          />
        </StyledSelect>
        <StyledCheckBox>
          <input type="checkbox" id="scales" name="scales" />
          <div>
            <StyledLabel>
              L'Utente dichiara di aver preso visione dell' informativa resa da
              parte di Gruppo Santamaria S.p.a ai sensi degli articoli 13 e 14
              del Regolamento generale UE sulla protezione dei dati GDPR e
              scaricabile dal presente sito nella sezione Privacy.
            </StyledLabel>
          </div>
        </StyledCheckBox>
        <StyledCheckBox>
          <input type="checkbox" id="scales" name="scales" />
          <div>
            <StyledLabel>
              L'Utente presta il proprio libero ed esplicito consenso per il
              trattamento di cui all'informativa (dati forniti volontariamente
              dall'utente).
            </StyledLabel>
          </div>
        </StyledCheckBox>
      </StyledWrapButton>
    </>
  );
};
