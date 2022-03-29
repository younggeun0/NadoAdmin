import * as React from 'react';
import { Route } from 'react-router-dom';
import LotteryNumGenerator from './lottery/LotteryNumGenerator';
import MUIComponents from './muicomponents/MUIComponents';
import NewsFeed from './news/NewsFeed';

export default [
    <Route exact path="/lottery" render={() => <LotteryNumGenerator />} />,
    <Route exact path="/mui_components" render={() => <MUIComponents />} />,
    <Route exact path="/news" render={() => <NewsFeed />} />,
];
