import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './components/styles';
import App from './App';

export default () => <App />;

let rootElement: ReactDOM.Root;

export const mount = (Сomponent, element = document.getElementById('app')) => {
    const rootElement = ReactDOM.createRoot(element);
    rootElement.render(
        <BrowserRouter>
            <GlobalStyle />
            <Сomponent />
        </BrowserRouter>
    );

    if (module.hot) {
        module.hot.accept('./App', () => {
            rootElement.render(
                <BrowserRouter>
                    <GlobalStyle />
                    <Сomponent />
                </BrowserRouter>
            );
        });
    }
};

export const unmount = () => {
    rootElement.unmount();
};
