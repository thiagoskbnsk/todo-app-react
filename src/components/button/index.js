import React from "react";
import { ButtonStyled } from "./styled";

function Button({ onClick, children, variant = "default" }) {
  return (
    <ButtonStyled type="button" onClick={onClick} variant={variant}>
      {children}
    </ButtonStyled>
  );
}

export default Button;
