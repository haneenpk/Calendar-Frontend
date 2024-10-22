import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; // Assuming your store file is in TypeScript now
import App from './App'; // Assuming your App file is in TypeScript now
import './index.css';

// Ensure that 'root' is a valid HTMLElement
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
