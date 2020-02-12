import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 8px 16px;
  text-transform: uppercase;
  border: none;
  background: #7e6fb9;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  outline: none;

  &:hover {
    box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.3),
      4px 4px 10px rgba(0, 0, 0, 0.3);
  }

  &:active {
    box-shadow: inset 0 0 100px rgba(255, 255, 255, 0.1),
      4px 4px 10px rgba(0, 0, 0, 0.3);
  }
`;
