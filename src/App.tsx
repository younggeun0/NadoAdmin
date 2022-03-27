import React from 'react';
import { Admin, Resource, defaultTheme } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { createTheme } from '@material-ui/core/styles';
import Layout from './layout/Layout';
import routes from './routes';
import Dashboard from './dashboard/Dashboard';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const theme = {
    ...defaultTheme,
    sidebar: {
        width: 250, // The default value is 240
        closedWidth: 55, // The default value is 55
    },
};

function App() {
    return (
        <Admin
            dataProvider={dataProvider}
            layout={Layout}
            customRoutes={routes}
            dashboard={Dashboard}
            loginPage={false}
            theme={theme}
        >
            <Resource name="users" />
            <Resource name="posts" />
        </Admin>
    );
}

export default App;
