import * as React from 'react';
import { Route } from 'react-router-dom';
import LottoGenerator from './lotto/LottoGenerator';

export default [
  <Route exact path="/lotto" render={() => <LottoGenerator />} />,
];
