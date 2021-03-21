import React, { FC, useState } from "react";
import Styled from "styled-components";
import axios from "axios";
import { Img } from "../components/Button/Img";
import { BreadForm } from "../components/BreadForm";
import { FormStep1 } from "../components/Form";
import { FormStep2 } from "../components/FormStep2";
import { FormStep3 } from "../components/FormStep3";
import { FormStep4 } from "../components/FormStep4";
import "@fortawesome/fontawesome-free/js/all.js";
import {
  StyledLogo,
  StyledNav,
  StyledSpanJumbo,
  StyledTextJumbo,
  StyledTitleJumbo,
  StyleTextJumbo,
} from "../Style/Style";
import img from "../images/testataLanding.png";
const StyledWrap = Styled.div`
  position:relative;
  height:700px;
  background-image: url(${img});
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
  const [bredSelect, setBredSelect] = useState(1);
  const [totalSelect, setTotalSelect] = useState("5.000");
  const [optionWork, setOptionWork] = useState<string>("Pensionato inps");
  const [myTotal, setMyTotal] = useState<number>(0);
  const [data, setData] = useState();
  const [months, setMonths] = useState();
  const [typeWork, setTypeWork] = useState();
  const [salary, setSalary] = useState();

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
  const sendRequest = () => {
    const request = {
      totalSelect,
      myTotal,
      optionWork,
      data,
      salary,
      months,
      typeWork,
    };
    console.log(data);
    axios.post("http://localhost:8888/landing-page/php/", request).then(
      (response) => {
        alert("dati inviati correttamente");
        console.log(response);
      },
      (error) => {
        alert("errore nell invio");
        console.log(error);
      }
    );
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
    <>
      <StyledNav className="d-flex jus">
        <StyledLogo>
          <Img src={require("../images/logo.svg")} />
        </StyledLogo>
        <nav className="navbar navbar-expand-sm">
          <ul className="navbar-nav">
            <li className="nav-item mr-3">Prestiti Fai da te</li>
            <li className="nav-item mr-3">Tasso Fisso agevolato</li>
            <li className="nav-item mr-3">Vantaggi</li>
            <li className="nav-item mr-3">Vantaggi</li>
            <li className="nav-item mr-3">Fai Da te</li>
            <li className="nav-item mr-3">Faq</li>
          </ul>
        </nav>
      </StyledNav>
      <StyledWrap>
        <StyledTextJumbo>
          <StyledTitleJumbo>100% ONLINE</StyledTitleJumbo>
          <StyledTitleJumbo>FACILE VELOCE DA CASA</StyledTitleJumbo>
          <StyleTextJumbo>
            <StyledSpanJumbo>Richiedere un prestito</StyledSpanJumbo> non e mai
            stato cosi facile
          </StyleTextJumbo>
        </StyledTextJumbo>
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
            {bredSelect === 3 && (
              <FormStep3
                handleChangeData={(e: any) => setData(e.target.value)}
                handleChangeMonths={(e: any) => setMonths(e.target.value)}
                handleChangeTypeWork={(e: any) => setTypeWork(e.target.value)}
                handleChangeSalary={(e: any) => setSalary(e.target.value)}
              />
            )}
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
                  <StyledButtonConfirm onClick={sendRequest}>
                    CONFERMA
                  </StyledButtonConfirm>
                )}
              </StyledWrapButtons>
            )}
          </StyledForm>
        </StyledWrapForm>
      </StyledWrap>
    </>
  );
};
