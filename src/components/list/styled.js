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
