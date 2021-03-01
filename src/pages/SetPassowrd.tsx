import React, { FC, useState } from "react";
import { Button } from "../components/Button/Button";
import {
  StyledLabelLog,
  StyledWrapButtonLog,
  StyledWrapInputLog,
  StyledWrapPass,
} from "../Style/Style";

interface SetPasswordProps {
  setFirstPassword: any;
}

export const SetPassword: FC<SetPasswordProps> = (props) => {
  const [pass, setPass] = useState();

  const handleSetPass = () => {
    localStorage.setItem("firstPassword", JSON.stringify(pass));
    props.setFirstPassword(pass);
  };

  return (
    <>
      <StyledWrapPass>
        <h1>Set Your Password</h1>
        <div>
          <StyledWrapInputLog>
            <StyledLabelLog>Set Password</StyledLabelLog>
            <input
              type="text"
              onChange={(e: any): void => setPass(e.target.value)}
            />
          </StyledWrapInputLog>
          <StyledWrapButtonLog>
            <Button handleClick={handleSetPass} variant="primary">
              Set Password
            </Button>
          </StyledWrapButtonLog>
        </div>
      </StyledWrapPass>
    </>
  );
};
