import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store';
import { Provider } from 'react-redux';
  
export default () => <App/>;
  
let rootElement: ReactDOM.Root
  
export const mount = (Сomponent, element = document.getElementById('app')) => {
  const rootElement = ReactDOM.createRoot(element);
  rootElement.render(
    // <Provider store={store}>
    // </Provider>
      <BrowserRouter>
        <Сomponent/>
      </BrowserRouter>
  );

  if(module.hot) {
      module.hot.accept('./App', ()=> {
        rootElement.render(
          // <Provider store={store}>
          // </Provider>
            <BrowserRouter>
              <Сomponent/>
            </BrowserRouter>
      );
      })
  }
};

export const unmount = () => {
  rootElement.unmount();
};
