import * as React from 'react';
import { Route } from 'react-router-dom';
import LotteryNumGenerator from './lottery/LotteryNumGenerator';

export default [
  <Route exact path="/lottery" render={() => <LotteryNumGenerator />} />,
];
