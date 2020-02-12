import styled from "styled-components";

export const CheckCustom = styled.span`
  display: inline-flex;
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 3px;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  color: transparent;
`;

export const CheckInput = styled.input`
  display: none;

  &:checked + ${CheckCustom} {
    color: green;
  }

  &:checked + span {
    color: green;
  }
`;
