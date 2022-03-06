import React from 'react';
import { Datagrid, EmailField, List, TextField } from 'react-admin';
import MyUrlField from './MyURLField';

export default function UserList(props) {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="username" />
        <EmailField source="email" />
        <TextField source="phone" />
        <MyUrlField source="website" />
        <TextField source="company.name" />
      </Datagrid>
    </List>
  );
}
