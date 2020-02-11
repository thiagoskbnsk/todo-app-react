import React from 'react';
import { ButtonStyled } from './styled';

function Button({ onPress, children, variant = 'default' }) {
  return (
    <ButtonStyled onClick={onPress} variant={variant}>{children}</ButtonStyled>
  );
};

export default Button;