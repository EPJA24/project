import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
  
export default () => <App/>;
  
let rootElement: ReactDOM.Root
  
export const mount = (Сomponent, element = document.getElementById('app')) => {
  const rootElement = ReactDOM.createRoot(element);
  rootElement.render(
    <BrowserRouter>
      <Сomponent/>
    </BrowserRouter>
  );

  if(module.hot) {
      module.hot.accept('./App', ()=> {
        rootElement.render(
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
