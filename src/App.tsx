import React, { useEffect, useState } from 'react';
import { Admin, Resource, defaultTheme, DataProvider, ListGuesser } from 'react-admin';
import Layout from './layout/Layout';
import routes from './routes';
import Dashboard from './dashboard/Dashboard';
import buildGraphQLProvider from 'ra-data-graphql';
import { buildQuery } from 'ra-data-graphql-simple';
import { useThemeState } from './ThemeStateProvider';
import { darkTheme, lightTheme } from './themes';

// const theme = {
//     ...defaultTheme,
//     sidebar: {
//         width: 250, // The default value is 240
//         closedWidth: 55, // The default value is 55
//     },
// };

function App() {
    const [dataProvider, setDataProvider] = useState<DataProvider>();
    const { theme } = useThemeState();

    console.log(dataProvider);

    useEffect(() => {
        buildGraphQLProvider({
            clientOptions: { uri: 'http://localhost:4000' },
            buildQuery,
        }).then(graphQlDataProvider => setDataProvider(() => graphQlDataProvider));
    }, []);

    if (!dataProvider) {
        return <div>Loading</div>;
    }

    return (
        <Admin
            dataProvider={dataProvider}
            layout={Layout}
            customRoutes={routes}
            dashboard={Dashboard}
            loginPage={false}
            theme={theme === 'dark' ? darkTheme : lightTheme}
        >
            <Resource name="FakeData" list={ListGuesser} />
        </Admin>
    );
}

export default App;
