import React from 'react';

import { EditOutlined, DeleteOutlined } from '@material-ui/icons';

import { ListWrapper, ItemList, Text, ButtonItem } from './styled';

function List({ list }) {
  function RenderList({ list }) {
    return list.map(({ _id, description }) => 
      <ItemList key={_id}>
        <Text>{description}</Text>
        <div>
          <ButtonItem variant="edit">
            <EditOutlined />
          </ButtonItem>
          <ButtonItem variant="delete">
            <DeleteOutlined />
          </ButtonItem>
        </div>
      </ItemList>
    );
  };

  return (
    <ListWrapper>
      <RenderList list={list} />
    </ListWrapper>
  )
};

export default List;