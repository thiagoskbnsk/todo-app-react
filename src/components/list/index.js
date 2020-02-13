import React from "react";

import { EditOutlined, DeleteOutlined } from "@material-ui/icons";
import { CheckOutlined } from "@material-ui/icons";

import {
  ListWrapper,
  ItemList,
  Text,
  ButtonItem,
  Label,
  ButtonsWrapper,
  CheckInput,
  CheckCustom
} from "./styled";

function List({ list, editItem, deleteItem }) {
  function RenderList({ list }) {
    return list.map(({ _id, description }) => (
      <ItemList key={_id}>
        <Label htmlFor={_id}>
          <CheckInput id={_id} type="checkbox" />
          <Text>
            <CheckCustom>
              <CheckOutlined />
            </CheckCustom>
            {description}
          </Text>
        </Label>
        <ButtonsWrapper>
          <ButtonItem variant="edit" onClick={() => editItem()}>
            <EditOutlined />
          </ButtonItem>
          <ButtonItem variant="delete" onClick={() => deleteItem(_id)}>
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
