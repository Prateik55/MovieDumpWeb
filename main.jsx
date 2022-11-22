import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import App from './src/App';
import {store} from "./src/features/store"

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Provider store= {store}>
      <App /> 
  </Provider>

  </>
);
