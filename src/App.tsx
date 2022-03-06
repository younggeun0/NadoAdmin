import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import users from './components/users';
import posts from './components/posts';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" {...users} />
      <Resource name="posts" {...posts} />
    </Admin>
  );
}

export default App;
