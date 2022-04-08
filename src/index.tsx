import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeStateProvider } from './ThemeStateProvider';

ReactDOM.render(
    <ThemeStateProvider>
        <App />
    </ThemeStateProvider>,
    document.getElementById('root')
);
