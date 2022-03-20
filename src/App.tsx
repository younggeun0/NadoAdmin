import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import users from './components/users';
import posts from './components/posts';
import Layout from './layout/Layout';
import routes from './routes';
import Dashboard from './dashboard/Dashboard';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      layout={Layout}
      customRoutes={routes}
      dashboard={Dashboard}
    >
      <Resource name="users" {...users} />
      <Resource name="posts" {...posts} />
    </Admin>
  );
}

export default App;
