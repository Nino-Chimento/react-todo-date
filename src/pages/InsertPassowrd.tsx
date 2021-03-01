import React, { FC, useState } from "react";
import { Button } from "../components/Button/Button";
import { decrypt } from "../utils/crypto";
import {
  StyledLabelLog,
  StyledWrapButtonLog,
  StyledWrapInputLog,
  StyledWrapPass,
} from "../Style/Style";

interface InsertPasswordProps {
  setAuth: any;
}

export const InsertPassword: FC<InsertPasswordProps> = (props) => {
  const [pass, setPass] = useState();
  const [error, setError] = useState(false);
  const handleSetPass = () => {
    //@ts-ignore
    let passAuth = JSON.parse(localStorage.getItem("firstPassword"));

    passAuth = decrypt(passAuth);
    if (passAuth === pass) {
      localStorage.setItem("auth", JSON.stringify(true));
      props.setAuth(true);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <StyledWrapPass>
        <h1>Insert Your Password</h1>
        <div>
          <StyledWrapInputLog>
            <StyledLabelLog>Insert Your Password</StyledLabelLog>
            <input
              type="text"
              onChange={(e: any): void => setPass(e.target.value)}
            />
          </StyledWrapInputLog>
          <StyledWrapButtonLog>
            <Button handleClick={handleSetPass} variant="primary">
              Log In
            </Button>
          </StyledWrapButtonLog>
          {error && <h4>Password errata</h4>}
        </div>
      </StyledWrapPass>
    </>
  );
};
