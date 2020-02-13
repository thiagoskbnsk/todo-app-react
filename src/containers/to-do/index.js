import React, { useState } from "react";

import Card from "../../components/card";
import List from "../../components/list";
import Button from "../../components/button";

import { ButtonsWrapper } from "./styled";

function Todo() {
  const [list, setList] = useState([
    { _id: 123, description: "teste" },
    { _id: 345, description: "teste123" }
  ]);

  function editItem() {
    console.log("edit");
  }

  function deleteItem() {
    console.log("delete");
  }

  return (
    <>
      <Card title="Todo list" subtitle="How can I help you?">
        <ButtonsWrapper>
          <Button>Adicionar</Button>
        </ButtonsWrapper>
        <List list={list} deleteItem={deleteItem} editItem={editItem} />
      </Card>
    </>
  );
}

export default Todo;
