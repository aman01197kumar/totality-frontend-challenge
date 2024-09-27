import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import { store } from './redux/store.js';

const root = ReactDOM.createRoot(document.getElementById("root"));
const peristor = persistStore(store)
root.render(
  <Provider store={store}>

    <PersistGate persistor={peristor}>
    <App />
    </PersistGate>
  </Provider>
);

