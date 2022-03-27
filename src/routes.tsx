/* eslint-disable import/extensions */
import * as React from 'react';
import { Route } from 'react-router-dom';
import LotteryNumGenerator from './lottery/LotteryNumGenerator';
import MUIComponents from './muicomponents/MUIComponents';

export default [
    <Route exact path="/lottery" render={() => <LotteryNumGenerator />} />,
    <Route exact path="/mui_components" render={() => <MUIComponents />} />,
];
