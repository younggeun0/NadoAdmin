import React from 'react';
import { Datagrid, List, ReferenceField, TextField } from 'react-admin';

function PostList(props) {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <ReferenceField source="userId" reference="users">
          <TextField source="id" />
        </ReferenceField>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="body" />
      </Datagrid>
    </List>
  );
}

export default PostList;
