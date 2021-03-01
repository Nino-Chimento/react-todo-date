import React, { FC, useState } from "react";
import { Button } from "../components/Button/Button";

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
      <h1>Set Your Password</h1>
      <div>
        <input
          type="text"
          onChange={(e: any): void => setPass(e.target.value)}
        />
        <Button handleClick={handleSetPass} variant="primary">
          Set Password
        </Button>
      </div>
    </>
  );
};
