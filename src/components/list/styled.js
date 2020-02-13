import styled from "styled-components";

export const ListWrapper = styled.ul`
  list-style: none;
`;

export const ItemList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;

  + li {
    border-top: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

export const Text = styled.span`
  font-size: 1.142857142857143rem;
  font-family: Montserrat, sans-serif;
  color: #cacaca;
  font-weight: 300;
  display: flex;
  width: 100%;
  align-items: center;
`;

const variants = {
  edit: {
    regular: "#47b1e4",
    hover: "#00a5f5"
  },
  delete: {
    regular: "#f35c5c",
    hover: "#e63838"
  }
};

export const ButtonItem = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  color: ${props => variants[props.variant].regular};
  border-radius: 3px;
  padding: 4px;

  &:hover {
    color: ${props => variants[props.variant].hover};
  }

  &:active {
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

export const ButtonsWrapper = styled.div`
  min-width: 64px;
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  cursor: pointer;
`;

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

  &:checked + span > ${CheckCustom} {
    color: green;
  }

  &:checked + span {
    text-decoration: line-through;
  }
`;
