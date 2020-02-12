import React from "react";

import { EditOutlined, DeleteOutlined } from "@material-ui/icons";
import Checkbox from "../checkbox";

import {
  ListWrapper,
  ItemList,
  Text,
  ButtonItem,
  Label,
  ButtonsWrapper
} from "./styled";

function List({ list }) {
  function RenderList({ list }) {
    return list.map(({ _id, description }) => (
      <ItemList key={_id}>
        <Label htmlFor={_id}>
          <Checkbox id={_id} />
          <Text>{description}</Text>
        </Label>
        <ButtonsWrapper>
          <ButtonItem variant="edit">
            <EditOutlined />
          </ButtonItem>
          <ButtonItem variant="delete">
            <DeleteOutlined />
          </ButtonItem>
        </ButtonsWrapper>
      </ItemList>
    ));
  }

  return (
    <ListWrapper>
      <RenderList list={list} />
    </ListWrapper>
  );
}

export default List;
