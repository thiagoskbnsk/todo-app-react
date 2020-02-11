import React from "react";

import Card from "../../components/card";
import List from '../../components/list';
import Button from '../../components/button';

import { ButtonsWrapper } from './styled';

function Todo() {
  return (
    <>
      <Card title="Todo list" subtitle="How can I help you?">
        <ButtonsWrapper>
          <Button>Adicionar</Button>
        </ButtonsWrapper>
        <List list={[
          { _id: 123, description: 'teste' },
          { _id: 345, description: 'teste123' },
        ]} />
      </Card>
    </>
  );
}

export default Todo;
