import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
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
      <Resource name="users" />
      <Resource name="posts" />
    </Admin>
  );
}

export default App;
