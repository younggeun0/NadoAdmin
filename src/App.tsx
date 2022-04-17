import React, { useEffect, useState } from 'react';
import { Admin, Resource, DataProvider, ListGuesser, CustomRoutes } from 'react-admin';
import Layout from './layout/Layout';
import Dashboard from './dashboard/Dashboard';
import buildGraphQLProvider from 'ra-data-graphql';
import { buildQuery } from 'ra-data-graphql-simple';
import { lightTheme } from './themes';
import { BrowserRouter } from 'react-router-dom';
import LotteryNumGenerator from './lottery/LotteryNumGenerator';
import MUIComponents from './muicomponents/MUIComponents';
import NewsFeed from './news/NewsFeed';
import { Route } from 'react-router';

function App() {
    const [dataProvider, setDataProvider] = useState<DataProvider>();

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
        <BrowserRouter>
            <Admin
                dataProvider={dataProvider}
                layout={Layout}
                // customRoutes={routes}
                dashboard={Dashboard}
                loginPage={false}
                theme={lightTheme}
            >
                <Resource name="FakeData" list={ListGuesser} />
                <CustomRoutes>
                    <Route path="/lottery" element={<LotteryNumGenerator />} />,
                    <Route path="/mui_components" element={<MUIComponents />} />,
                    <Route path="/news" element={<NewsFeed />} />,
                </CustomRoutes>
            </Admin>
        </BrowserRouter>
    );
}

export default App;
