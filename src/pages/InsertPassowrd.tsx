import React, { FC, useState } from "react";
import { Button } from "../components/Button/Button";

interface InsertPasswordProps {
  setAuth: any;
}

export const InsertPassword: FC<InsertPasswordProps> = (props) => {
  const [pass, setPass] = useState();
  const [error, setError] = useState(false);
  const handleSetPass = () => {
    //@ts-ignore
    const passAuth = JSON.parse(localStorage.getItem("firstPassword"));
    if (passAuth === pass) {
      props.setAuth(true);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <h1>Insert Your Password</h1>
      <div>
        <input
          type="text"
          onChange={(e: any): void => setPass(e.target.value)}
        />
        <Button handleClick={handleSetPass} variant="primary">
          Log In
        </Button>
        {error && <h4>Password errata</h4>}
      </div>
    </>
  );
};
