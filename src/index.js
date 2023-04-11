import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// import { Elements } from '@stripe/react-stripe-js';

import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { CartProvider } from './contexts/cart.context';
import { store, persistor } from './store/store';

import './index.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <CartProvider>
            {/* <Elements> */}
              <App />
            {/* </Elements> */}
          </CartProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
