import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Use 'react-dom/client' instead of 'react-dom'
import './index.css';
import App from "./App";
import { CssBaseline } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root')); // ✅ Use createRoot()
root.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
);
