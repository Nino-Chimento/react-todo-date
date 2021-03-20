import React, { FC, useState } from "react";
import Styled from "styled-components";
import { Img } from "../components/Button/Img";
import { BreadForm } from "../components/BreadForm";
import { FormStep1 } from "../components/Form";
import { FormStep2 } from "../components/FormStep2";
import { FormStep3 } from "../components/FormStep3";
import { FormStep4 } from "../components/FormStep4";
import "@fortawesome/fontawesome-free/js/all.js";

const StyledWrap = Styled.div`
  position:relative;
  height:700px;
`;

const StyledWrapForm = Styled.div`
    position:absolute;
    top: 5%;
    right:5%;
    width:400px;   
`;

const StyledForm = Styled.div`
  margin-top:1rem;
  background-color:white;
  border-radius:6px;
  padding:1rem;
`;

const StyledButton = Styled.div`
  cursor:pointer;
  background-color:#6B767C;
  width:100%;
  height:50px;
  color:white;
  position:relative;
  display:flex;
  align-items: center;
  justify-content:center;
`;
const StyledButtonNoFirst = Styled.div<any>`  
      cursor:pointer;
      background: ${(props) =>
        props.variant === "down" ? "#cecccc;" : "#6B767C"};
      width:45%;
      height:50px;
      color:white;
      position:relative;
      display:flex;
      align-items: center;
      justify-content:center;
`;

const StyledButtonConfirm = Styled.div`  
      cursor:pointer;
      background: #e7c700;
      width:45%;
      height:50px;
      color:white;
      position:relative;
      display:flex;
      align-items: center;
      justify-content:center;
`;

const StyleRow = Styled.i`
  position:absolute;
  right:1%;
  top:40%
  font-size:30px;
`;

const StyledWrapButtons = Styled.div`
  display:flex;
  justify-content:space-between;
  width:100%;
`;

export const Landing: FC = (props) => {
  const [bredSelect, setBredSelect] = useState(4);
  const [totalSelect, setTotalSelect] = useState("5.000");
  const [optionWork, setOptionWork] = useState<string>("Pensionato inps");
  const [myTotal, setMyTotal] = useState<number>(0);

  const handleUp = () => {
    if (bredSelect < 4) {
      setBredSelect(bredSelect + 1);
    }
  };
  const handleDown = () => {
    if (bredSelect !== 1) {
      setBredSelect(bredSelect - 1);
    }
  };

  const total = ["5.000", "10.000", " 20.000", "30.000", "50.000"];
  const optionsWork = [
    "Pensionato inps",
    "Pensionato altro",
    "Dipendete",
    "Dipendente Pubblico",
    "Azienda Municipale",
    "Militare",
    "Ferroviere",
    "Dipendente Postale",
  ];
  const OptionsBread = [
    {
      id: 1,
      label: "Importo",
    },
    {
      id: 2,
      label: "Attività",
    },
    {
      id: 3,
      label: "reddito",
    },
    {
      id: 4,
      label: "Esito",
    },
  ];
  return (
    <StyledWrap>
      <Img src={require("../images/testataLanding.png")} />
      <StyledWrapForm>
        <BreadForm
          handleSelect={setBredSelect}
          active={bredSelect}
          options={OptionsBread}
        />
        <StyledForm>
          {bredSelect === 1 && (
            <FormStep1
              handletotalActive={setTotalSelect}
              totalActive={totalSelect}
              total={total}
              handleMyTotal={(e: any) => setMyTotal(e.target.value)}
            />
          )}
          {bredSelect === 2 && (
            <FormStep2
              optionActive={optionWork}
              handleOptionActive={setOptionWork}
              options={optionsWork}
            />
          )}
          {bredSelect === 3 && <FormStep3 />}
          {bredSelect === 4 && <FormStep4 />}
          {bredSelect === 1 && (
            <StyledButton onClick={handleUp}>
              AVANTI
              <StyleRow className="fas fa-arrow-right"></StyleRow>
            </StyledButton>
          )}
          {bredSelect !== 1 && (
            <StyledWrapButtons>
              <StyledButtonNoFirst variant="down" onClick={handleDown}>
                INDIETRO
              </StyledButtonNoFirst>
              {bredSelect !== 4 && (
                <StyledButtonNoFirst onClick={handleUp}>
                  AVANTI
                  <StyleRow className="fas fa-arrow-right"></StyleRow>
                </StyledButtonNoFirst>
              )}
              {bredSelect === 4 && (
                <StyledButtonConfirm>CONFERMA</StyledButtonConfirm>
              )}
            </StyledWrapButtons>
          )}
        </StyledForm>
      </StyledWrapForm>
    </StyledWrap>
  );
};
