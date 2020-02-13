import React, { useState } from "react";

import Card from "../../components/card";
import List from "../../components/list";
import Button from "../../components/button";
import If from "../../components/if";
import Modal from "../../components/modal";

import { ButtonsWrapper, TodoWrapper } from "./styled";

function Todo() {
  const [modal, setModal] = useState(false);
  const [list, setList] = useState([
    { _id: 123, description: "teste" },
    { _id: 345, description: "teste123" }
  ]);

  function editItem() {
    console.log("edit");
  }

  function deleteItem(id) {
    const confirmation = window.confirm("Are you sure?");
    if (confirmation) {
      setList(prevState => prevState.filter(itemList => itemList._id !== id));
    }
  }

  return (
    <TodoWrapper>
      <Card title="Todo list" subtitle="How can I help you?">
        <ButtonsWrapper>
          <Button onClick={() => setModal(true)}>Adicionar</Button>
        </ButtonsWrapper>
        <List list={list} deleteItem={deleteItem} editItem={editItem} />
        <If condition={modal}>
          <Modal title="Add task" subtitle="Whatever you want" />
        </If>
      </Card>
    </TodoWrapper>
  );
}

export default Todo;
